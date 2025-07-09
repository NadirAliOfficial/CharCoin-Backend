const { query, update } = require('./db');


const addNew=async(data)=>{
    const { image, name, wallet, hash, status, type, previewLink, username } = data;    
    const params = [image, name, wallet, hash, status, type, previewLink, username];
    const sql = ` INSERT INTO reward_nft(image, name, wallet, hash, status, type, previewLink, created_by) 
                  VALUES(?,?,?,?,?,?,?,?);`;
    const result = await update(sql, params);
    return result[0];
}


const getRewardsNft=async(id)=>{
    const sql = `SELECT 
            id, image, name, wallet, hash, status, type, previewLink, created_on
            FROM reward_nft
            WHERE id=?`;
    const [result] = await query(sql, [id]);
    return result;
}

const getRewardsNfts=async()=>{
    const sql = `SELECT 
                id, image, name, wallet, hash, status, type, previewLink, created_on 
                FROM reward_nft`;
    const [result] = await query(sql);
    return result;
}

module.exports = {
  addNew,
  getRewardsNft,
  getRewardsNfts
}