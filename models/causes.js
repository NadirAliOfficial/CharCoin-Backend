const { query, update, toSql } = require('./db');


const addCause=async(data)=>{


    const {  title, label, detail, category, orgniaztion, winning, position, start_date, end_date, benefactors, points, image, videoUrl, username } = data;
    
      const sql = "INSERT INTO causes (" +
                    "title, label, detail, category, orgniaztion, winning, " +
                    "position, start_date, end_date, " +
                    "benefactors, points, image, videoUrl, created_by" +
                  ") VALUES (" +
                    "'" + title + "', '" + label + "', '" + detail + "', '" + category + "', '" + orgniaztion + "', '" + winning + "', " +
                    "'" + position + "', '" + toSql(start_date) + "', '" + toSql(end_date) + "', " +
                    "'" + benefactors + "', " + points + ", '" + image + "', '" + videoUrl + "', '" + username + "'" +
                  ");";

      const result = await update(sql);
      return result;
}


const getCause=async(id)=>{

        const sql = `SELECT 
                    id, title, label, detail, category, orgniaztion, winning, 
                    position, start_date, end_date, 
                    benefactors, points, image, videoUrl
                    FROM causes
                    WHERE id=?  ORDER BY id DESC`;
         const [result] = await query(sql, [id]);
         return result;
}


const getCauses=async()=>{
    const sql = `SELECT id, title, label, detail, category, orgniaztion, winning, 
                        position, start_date, end_date, 
                        benefactors, points, image, videoUrl 
                  FROM causes ORDER BY id DESC LIMIT 25`;
    const [result] = await query(sql);
    return result;
}

module.exports = {
  addCause,
  getCause,
  getCauses
}