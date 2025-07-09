const { query, update, toSql } = require('./db');



  const getUserByRefreshToken=async(refreshToken)=> 
  {
    const sql1 = "SELECT id, username, role, name, wallet FROM users WHERE refreshToken=?;"; 
    const [rows] = await query(sql1, [refreshToken]); 
    if(rows.length>0) {
      return {...rows[0], status:"success"}
    } else {
      return {status:"error", message:"Token not found"}
    }
  }



const getUserDetails=async(wallet)=>{
      const sql1 = "SELECT id, username, role, name, wallet FROM users WHERE wallet=?;"; 
      const [rows] = await query(sql1, [wallet]); 
      if(rows && rows.length>0) 
      {
        return rows[0];
      }
      else 
      {
        const sql2 = "INSERT INTO users(wallet) VALUES(?);";
        const result2 = await update(sql2, [wallet]);

        const sql3 = "SELECT id, name, wallet, image FROM users WHERE wallet=?;"; 
        const [rows2] = await query(sql3, [wallet]); 
        return rows2;

      }
}


const getUserByUsername=async(username)=>{
    const sql1 = "SELECT id, username, role, salt, name, password, wallet, image FROM users WHERE username=? limit 1;"; 
    const [rows] = await query(sql1, [username]); 
    if(rows.length>0)
    {
      return rows[0];
    }
    else 
    {
      return {status:"error"};
    }
    
}


const deleteRefreshToken=async(refreshToken)=>{
    const sql1 = "UPDATE users SET refreshToken='' WHERE refreshToken=?;"; 
    const result = await query(sql1, [refreshToken]); 
    return result[0];
}


const saveRefreshToken=async(username, refreshToken)=>{
    const sql1 = "UPDATE users SET refreshToken=? WHERE username=?;"; 
    const result = await query(sql1, [refreshToken, username]); 
    return result[0];
}



module.exports = {
  getUserDetails,
  getUserByUsername,
  getUserByRefreshToken,
  deleteRefreshToken,
  saveRefreshToken
}