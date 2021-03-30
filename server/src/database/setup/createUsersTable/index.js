const { connectClient } = require("../../");
const createTableQuery = require("./query");

const createUsersTable = async () => {
  const client = await connectClient();
  try {
    await client.query("BEGIN");
    await client.query(createTableQuery);
    await client.query("END");
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Database query execution error:", error);
  } finally {
    client.release();
  }
};

module.exports = createUsersTable;
