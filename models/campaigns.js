const { query, update, toSql } = require('./db');


const addCampaign=async(data)=>{

    const created_by = data.username;
    const {  name, start_date, end_date, is_annual_special } = data;

    const sql = `INSERT INTO campaigns(name, start_date, end_date, is_annual_special,created_by) 
                 VALUES(?,?,?,?,?);`;
      const result = await update(sql, [name, start_date, end_date, is_annual_special, created_by]);
      return result[0];
}


const getCampaign=async(id)=>{

        const sql = `SELECT id, name, start_date, end_date, is_annual_special FROM campaigns WHERE id=?`;
         const [result] = await query(sql, [id]);
         return result;
}


const getCampaigns=async()=>{
    const sql = `SELECT id, name, start_date, end_date, is_annual_special FROM campaigns`;
    const [result] = await query(sql);
    return result;
}

module.exports = {
  addCampaign,
  getCampaign,
  getCampaigns
}