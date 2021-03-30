const createMinersTable = require("./createMinersTable");
const createLogsTable = require("./createLogsTable");
const registerMinersFromConfig = require("./registerMinersFromConfig");

const setupDatabase = async () => {
  await createMinersTable();
  await createLogsTable();
  await registerMinersFromConfig();
  console.log("Database setup finished");
};

module.exports = setupDatabase;
