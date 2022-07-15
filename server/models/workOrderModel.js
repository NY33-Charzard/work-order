const { Pool } = require('pg');
require('dotenv').config();

// SQL link goes here
const PG_URI = process.env.POSTGRES_API;

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  }
};