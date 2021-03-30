const { Pool } = require("pg");
const pool = new Pool();

pool.on("error", (error, client) => {
  console.error("Unexpected error on idle database client", error);
});

module.exports.connectClient = async () => {
  const client = await pool.connect();
  return client;
};
