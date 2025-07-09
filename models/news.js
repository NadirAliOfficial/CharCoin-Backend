const { query, update } = require('./db');


const addNew=async(data)=>{

    const { title, brief, category, image, detail, videoUrl, username } = data;
    
    const params = [title, brief, category, image, detail, videoUrl, username];
    
    const sql = ` INSERT INTO news(
                  title, brief, category, image, detail, 
                  status,  posted_on, views, videoUrl, created_by) 
                  VALUES(?,?,?,?,?,"published", NOW(), 0, ?, ?);`;
    const result = await update(sql, params);
    return result[0];
}






const getNew=async(id)=>{

        const sql = `SELECT 
                     id, title, category, image,  detail, 
                  status,  posted_on, views
                    FROM news
                    WHERE id=?`;
         const [result] = await query(sql, [id]);
         return result;
}



const getLatest=async(limit)=>{

const sql = `SELECT 
                id, title, category, image,  detail, 
                status,  posted_on, views
                FROM news
                ORDER BY id DESC LIMIT ${limit}`;
        const [result] = await query(sql);
        return result;
}


const getNews=async()=>{
        const sql = `SELECT 
                     id, title, category, image, detail, 
                     status, posted_on, views 
                     FROM news ORDER BY id DESC LIMIT 25`;
         const [result] = await query(sql);
         return result;
}

module.exports = {
  addNew,
  getNew,
  getNews,
  getLatest
}