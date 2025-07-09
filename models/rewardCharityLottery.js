const { query, update, toSql } = require('./db');




const addRewardCharityLottery=async(data)=>{
    const { name, wallet, hash, transactions, amount, registration, last_transaction_date, username } = data;
    const params = [name, wallet, hash, transactions, amount, toSql(registration), toSql(last_transaction_date), username];
    const sql = ` INSERT INTO reward_charity_lottery
                  (name, wallet, hash, transactions, amount, registration, last_transaction_date, created_by) 
                  VALUES(?,?,?,?,?,?,?,?);`;
    const result = await update(sql, params);
    return result[0]; 
}






const getRewardCharityLottery=async(id)=>{

        const sql = `SELECT 
                     id, name, wallet, hash, transactions, amount, registration, created_on
                    FROM reward_charity_lottery
                    WHERE id=?`;
         const [result] = await query(sql, [id]);
         return result;
}

const getRewardCharityLotteries=async()=>{

        const sql = `SELECT 
                     id, name, wallet, hash, transactions, amount, registration, created_on 
                     FROM reward_charity_lottery`;
         const [result] = await query(sql);
         return result;
}

module.exports = {
  addRewardCharityLottery,
  getRewardCharityLottery,
  getRewardCharityLotteries
}