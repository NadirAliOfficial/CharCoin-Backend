const { query, update, toSql } = require('./db');


const addCategory=async(data)=>{

    const {  name, color, username, file  } = data;
    
    const icon = `/uploads/${file.filename}`;
    
    const sql = `INSERT INTO categories(name, color, icon, created_by) 
                 VALUES(?,?,?,?);`;
      const result = await update(sql, [name, color, icon, username]);
      return result[0];
}


const getCategory=async(id)=>{

        const sql = `SELECT id, name, color, icon FROM categories WHERE id=?`;
         const [result] = await query(sql, [id]);
         return result;
}


const getCategories=async()=>{
    const sql = `SELECT id, name, color, icon, status FROM categories`;
    const [result] = await query(sql);
    return result;
}

module.exports = {
  addCategory,
  getCategory,
  getCategories
}