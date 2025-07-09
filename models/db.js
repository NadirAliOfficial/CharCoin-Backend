const mysql = require('mysql2/promise');
require('dotenv').config();


// const pool = mysql.createPool({
//   host: 'localhost', 
//   user: 'root',
//   password: '',
//   database: 'chaincoin',
//   connectionLimit: 5,
// });
const {
  DB_NAME,
  DB_PASSWORD,
  DB_HOST,
  DB_USER
} = process.env;

if (!DB_NAME || !DB_PASSWORD || !DB_HOST || !DB_USER) {
  console.error("Database configuration is missing in .env file");
  process.exit(1);
}

const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  connectionLimit: 5,
});

async function update(sql, params) {
  try {
    return await pool.execute(sql, params);
  }
  catch (error) {
    console.log(error);
    return { status: "success", ...error };
  }
}


async function query(sql, params) {
  try {
    return await pool.query(sql, params);
  }
  catch (error) {
    console.log(error);
    return [];
  }
}


async function getSingle(sql, params) {
  try {
    const [rows] = await pool.query(sql, params);
    return rows[0];
  }
  catch (error) {
    console.log(error);
    return "";
  }
}


function toSql(naturalStr) {
  const date = new Date(naturalStr);
  if (isNaN(date)) {
    throw new Error('Invalid date string');
  }

  const pad = (n) => n.toString().padStart(2, '0');
  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());

  // If time is exactly midnight (00:00:00), assume no time was provided
  const isTimePresent = !(hours === '00' && minutes === '00' && seconds === '00');

  if (isTimePresent) {
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  } else {
    return `${year}-${month}-${day}`;
  }
}



module.exports = {
  query, update, getSingle, toSql
};