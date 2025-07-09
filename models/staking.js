const { query, update, toSql } = require('./db');


const addStaking=async(data)=>{
    const created_by = data.username;
    const { name, wallet, staked_amount, start_date, 
            end_date, duration, voting_power, indeks, hash } = data;

                
                
    const params = [name, wallet, staked_amount, toSql(start_date), 
                    toSql(end_date), duration, voting_power, indeks, hash, created_by];

     console.log(data);

    const sql = ` INSERT INTO staking(
                  name, wallet, staked_amount, start_date,
                  end_date, duration, voting_power, indeks, hash, created_by) 
                  VALUES(?,?,?,?,?,?,?,?,?,?);`;
      const result = await update(sql, params);

      const sql1 = `SELECT 
                id, name, wallet, staked_amount, start_date,
                end_date, duration, voting_power, indeks, status, hash
                FROM staking
                WHERE wallet=? ORDER BY id DESC`;
        const [rows] = await query(sql1, [wallet]);

      return {status:"success", insertId:result[0].insertId, rows};
}


const getStaking=async(wallet)=>{

        const sql = `SELECT 
                    id, name, wallet, staked_amount, start_date,
                    end_date, duration, voting_power, indeks, status, hash
                    FROM staking
                    WHERE wallet=?`;

         const [result] = await query(sql, [wallet]);

         return result;
}





const getStakings=async()=>{

        const sql = `SELECT 
                     id, name, wallet, staked_amount, start_date,
                     end_date, duration, voting_power, status, hash 
                     FROM staking`;
         const [result] = await query(sql);
         return result;
}


const unstake=async({wallet, index})=>{
        const params = [index, wallet]
        const sql = `UPDATE staking SET status='un' WHERE indeks=? AND wallet=?`;
         const [result] = await query(sql, params);
         return result;
}


const reqUnstake=async({wallet, index})=>{
        const params = [index, wallet]
        const sql = `UPDATE staking SET status='ur' WHERE indeks=? AND wallet=?`;
         const [result] = await query(sql, params);
         return result;
}


module.exports = {
  addStaking,
  getStaking,
  getStakings,
  unstake,
  reqUnstake
}