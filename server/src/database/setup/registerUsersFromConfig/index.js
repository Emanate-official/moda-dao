const { connectClient } = require("../../");
const insertMinerQuery = require("./query");

const registerMinersFromConfig = async () => {
  let config;
  try {
    config = require("../../../../config.json");
  } catch (error) {
    return;
  }

  const client = await connectClient();
  await client.query("BEGIN");
  
  for (let miner of config?.registerMiners) {
    try {
      await client.query(insertMinerQuery, [miner.ip, miner.make, miner.model, miner.interface]);
    } catch (error) {
      await client.query("ROLLBACK");
      client.release();
      console.error("Database query execution error:", error);
      return;
    }
  }
  
  await client.query("END");
  client.release();
};

module.exports = registerMinersFromConfig;
