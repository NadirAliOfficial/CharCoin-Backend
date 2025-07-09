const { query, update, toSql } = require('./db');


const addNew=async(data)=>{
    const { name, wallet, amount, registration, potential_winning, username } = data;    
    const params = [name, wallet, amount, toSql(registration), potential_winning, username];
    const sql = ` INSERT INTO reward_top_tier(name, wallet, amount, registration, potential_winning, created_by) 
                  VALUES(?,?,?,?,?,?);`;
    const result = await update(sql, params);
    return result[0];
}



const getOne=async(id)=>{
    const sql = `SELECT 
            id, name, wallet, amount, registration, potential_winning, created_on
            FROM reward_top_tier
            WHERE id=?`;
    const [result] = await query(sql, [id]);
    return result;
}



const getAll=async()=>{
    const sql = `SELECT 
                id, name, wallet, amount, registration, potential_winning, created_on
                FROM reward_top_tier`;
    const [result] = await query(sql);
    return result;
}



module.exports = {
  addNew,
  getOne,
  getAll
}