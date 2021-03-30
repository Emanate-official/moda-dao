module.exports = `
  INSERT INTO profiles(address, name)
  SELECT $1
  WHERE
  NOT EXISTS (
      SELECT address FROM users WHERE address = $1
  );
`;
