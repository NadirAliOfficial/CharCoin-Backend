const { query, update, toSql } = require('./db');


const addAdmin=async(data)=>{

  const { 
    name, username, email, phone, OTPAuthApp, permissions, 
    registeration, image
    } = data;

  const sql = `INSERT INTO admins(
                name, username, email, phone, OTPAuthApp, permissions, 
                registeration, image) 
                VALUES(?,?,?,?,?,?,?,?,?);`;
    const result = await update(sql, [ name, username, email, phone, OTPAuthApp, permissions, toSql(registeration), image]);
    return result[0];
}


const getAdmin=async(id)=>{
  const sql = `SELECT 
              id, name, username, email, phone, OTPAuthApp, permissions, 
              registeration, last_login, image 
              FROM admins
              WHERE id=?`;
    const [result] = await query(sql, [id]);
    return result;
}


const getAdmins=async()=>{
        const sql = `SELECT 
                     id, name, username, email, phone, OTPAuthApp, permissions, 
                     registeration, last_login, image 
                    FROM admins`;
         const [result] = await query(sql);
         return result;
}



module.exports = {
  addAdmin,
  getAdmin,
  getAdmins
}