const { query, update, toSql } = require('./db');


const addLottery=async(data)=>{

    const { wallet, hash, won, username } = data;
    const sql = `INSERT INTO charity_lottery_winner(wallet, hash, won, created_by) 
                 VALUES(?,?,?,?);`;
    const result = await update(sql, [wallet, hash, won, username]);
    console.log(result)
    return result[0];
}


const getLottery=async(id)=>{

        const sql = `SELECT id, username as name, wallet, hash, won, created_on 
                    FROM charity_lottery_winner
                    WHERE id=?`;
         const [result] = await query(sql, [id]);
         return result;
}


const getLotteries=async(limit=10)=>{

        const sql = `SELECT id, username as name, wallet, hash, won, created_on 
                     FROM charity_lottery_winner ORDER BY id DESC LIMIT ${limit}`;
         const [result] = await query(sql);
         return result;
}

module.exports = {
  addLottery,
  getLottery,
  getLotteries
}