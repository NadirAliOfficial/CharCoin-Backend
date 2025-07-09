const { query, update, toSql } = require('./db');


const addTopWallet=async(data)=>{

    const { wallet, volume, winnings, username } = data;
    const params = [wallet, volume, winnings, username];
    const sql = ` INSERT INTO top_wallets(wallet, volume, winnings, created_by) VALUES(?,?,?,?);`;
      const result = await update(sql, params);
      return result[0];
}


const getTopWallet=async(id)=>{

        const sql = `SELECT 
                     id, username as name, wallet, volume, winnings, created_on
                    FROM top_wallets
                    WHERE id=?`;
         const [result] = await query(sql, [id]);
         return result;
}


const getTopWallets=async()=>{

        const sql = `SELECT 
                     id, username as name, wallet, volume, winnings, created_on 
                     FROM top_wallets`;
         const [result] = await query(sql);
         return result;
}

module.exports = {
  addTopWallet,
  getTopWallet,
  getTopWallets
}