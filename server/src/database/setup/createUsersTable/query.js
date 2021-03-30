module.exports = `
  CREATE TABLE IF NOT EXISTS users
  (
      address TEXT NOT NULL,
      creation_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (address)
  );
`;
