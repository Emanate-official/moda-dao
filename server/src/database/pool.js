require("dotenv").config();
const { Pool } = require("pg");

const config = {
  database: process.env.PGDATABASE,
  host: process.env.PGHOST,
  // this object will be passed to the TLSSocket constructor
  ssl: {
    rejectUnauthorized: false
  }
};

const pool = new Pool(config);

pool.on("error", (error, client) => {
  console.error("Unexpected error on idle database client", error);
});

module.exports.connectClient = async () => {
  const client = await pool.connect();
  return client;
};
