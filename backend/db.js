const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.PG_USER,       
  host: process.env.PG_HOST,       
  database: process.env.PG_DATABASE, 
  password: process.env.PG_PASSWORD, 
  port: process.env.PG_PORT,       
});

pool.on('connect', () => {
  console.log('✅ Connected to PostgreSQL');
});

pool.on('error', (err) => {
  console.error('❌ PostgreSQL pool error:', err);
});

module.exports = pool;
