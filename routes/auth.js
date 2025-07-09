const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const config = require("./../config");
const fs = require('fs');
const bs58 = require('bs58').default;
const bcrypt = require('bcryptjs');
const nacl = require('tweetnacl');
const { PublicKey } = require('@solana/web3.js');

const userModel = require("./../models/user");



const getTokens=async(payload)=>
{
    const accessToken = jwt.sign(payload, config.JWT_SECRET, { expiresIn: '10h' });
    const refreshToken = jwt.sign({id:payload.id}, config.JWT_SECRET, { expiresIn: '30d' });
    await userModel.saveRefreshToken(payload.username, refreshToken);
    return {
      accessToken, refreshToken
    }
}




// web3 authentication

let nonces = {};
try {
  nonces = JSON.parse(fs.readFileSync('nonces.json'));
} catch (e) {
  nonces = {};
}


function saveNonces() {
  fs.writeFileSync('nonces.json', JSON.stringify(nonces));
}


const verifySignature = (message, signature, publicKey) => {
  const messageBytes = new TextEncoder().encode(message);
  const signatureBytes = bs58.decode(signature);
  const pubKeyBytes = new PublicKey(publicKey).toBytes();
  return nacl.sign.detached.verify(messageBytes, signatureBytes, pubKeyBytes);
};



// Generate a nonce for a wallet
router.post('/get-nonce', (req, res) => {
  const { publicKey } = req.body;
  if (!publicKey) {
    return res.status(400).json({ error: 'Missing publicKey' });
  }
  const nonce = `Login request \n At : ${new Date().toISOString()} \n By : ${publicKey}`;
  nonces[publicKey] = nonce;
  saveNonces();
  console.log({nonce})
  res.json({ nonce });
});







// Login endpoint (returns JWT)
router.post('/login', async(req, res) => {
  const { username, password } = req.body;
  const result = await userModel.getUserByUsername(username);

  if(!result) {
     res.status(401).json({status:"error", message: 'Invalid credentials'});
     return;
  }

  const salt = result.salt;
  const passwordHashFromDB = result.password;
  const hashedPassword = bcrypt.hashSync(password+config.JWT_SECRET, salt);


  if (username === result.username && hashedPassword === passwordHashFromDB) 
  {
    const payload = { username, role:result.role, wallet:result.wallet, name:result.name, id:result.id };

    const { refreshToken, accessToken } = await getTokens(payload);

    res.cookie('refreshToken', refreshToken, {
      path: '/api/auth/token',
      httpOnly: false,
      secure: false,
      sameSite: 'Lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.cookie('accessToken', accessToken, {
      path: '/',
      httpOnly: false,
      secure: false,
      sameSite: 'Lax',
      maxAge: 25 * 60 * 1000,
    });

    res.json({status:"success"});

  } 
  else 
  {
    res.status(401).json({status:"error", message: 'Invalid credentials'});
  }

});



// Login endpoint (returns JWT)
router.post('/token', async(req, res) => {
  const refreshToken = req.cookies.refreshToken;

  const errorResponse = {status:"error", message:"Wrong refresh token received."}
  
  if(!refreshToken) 
  {
     errorResponse.message = "Refresh token not received."
     res.status(401).json(errorResponse);
     return;
  }

  const result =  await userModel.getUserByRefreshToken(refreshToken)

  if(result && result.id)
  {
    const payload = { username:result.username, role:result.role, wallet:result.wallet, name:result.name, id:result.id };
    const accessToken = jwt.sign(payload, config.JWT_SECRET, { expiresIn: '15m' });
    
    res.cookie('refreshToken', refreshToken, {
      path: '/api/auth/token',
      httpOnly: false,
      secure: false,
      sameSite: 'Lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
        
    res.cookie('accessToken', accessToken, {
      path: '/',
      httpOnly: false,
      secure: false,
      sameSite: 'Lax',
      maxAge: 25 * 60 * 1000,
    });


    res.json({status:"success"});    
    return;
  } 
  else 
  {
    errorResponse.message = "Refresh token failed to verify."
    res.status(401).json(errorResponse);
  }

});







// Login endpoint (returns JWT)
router.post('/test', async(req, res) => {
  const { username, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password+config.JWT_SECRET, salt);
    res.json({hashedPassword, username, salt});
});


router.delete('/token', async(req, res) => {
  const refreshToken = req.cookies.refreshToken;
  const result =  await userModel.deleteRefreshToken(refreshToken);
    res.cookie('refreshToken', "", {
      path: '/api/auth/token',
      httpOnly: false,
      secure: false,
      sameSite: 'Lax',
      maxAge: 1,
    });
        
    res.cookie('accessToken', "", {
      path: '/',
      httpOnly: false,
      secure: false,
      sameSite: 'Lax',
      maxAge: 1,
    });  
  res.status(200).json({status:"success", ...result});
});


// router.get("/profile", async(req, res)=>{
//    const { publicKey } = req.body;
//    const result = await userModel.getUserDetails(publicKey);
//    res.status(200).json(result);
// })






router.post('/verify-signature', async(req, res) => 
{

    const { signature, publicKey } = req.body;

    if (!signature || !publicKey) {
      return res.status(400).json({ error: 'Missing parameters' });
    }

    const nonce = nonces[publicKey];

    if (!nonce) {
      return res.status(403).json({ error: 'Nonce not found or already used' });
    }

    try 
    {
        const isVerified = verifySignature(nonce, signature, publicKey);
        if (isVerified) 
        {
            delete nonces[publicKey];
            saveNonces();
            const payload = await userModel.getUserDetails(publicKey);
            const { refreshToken, accessToken } = await getTokens(payload);

            console.log({refreshToken, accessToken});

            res.cookie('refreshToken', refreshToken, {
              path: '/api/auth/token',
              httpOnly: false,
              secure: false,
              sameSite: 'Lax',
              maxAge: 7 * 24 * 60 * 60 * 1000,
            });

            res.cookie('accessToken', accessToken, {
              path: '/',
              httpOnly: false,
              secure: false,
              sameSite: 'Lax',
              maxAge: 30 * 60 * 1000,
            });

            res.json({status:"success"});
        } 
        else 
        {
          return res.status(401).json({ error: 'Signature verification failed' });
        }
    } 
    catch (err) 
    {
        return res.status(500).json({ error: 'Server error', details: err.message });
    }

});



// Middleware to verify token
function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];

  if (bearerHeader) {
    const token = bearerHeader.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) return res.status(403).json({ message: 'Invalid token' });
      req.user = decoded;
      next();
    });
  } else {
    res.status(401).json({ message: 'Token missing' });
  }
}

module.exports = router;
