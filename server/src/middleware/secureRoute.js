const fs = require("fs");
const privateKey = fs.readFileSync(process.env.JWT_KEY_FILE).toString();
const jwt = require("jsonwebtoken");

const sendError = (response, error) => {
  response.status(401);
  response.send({ error });
};

const validateAuthentication = (request, response, next) => {
  const token = request.header("Authorization")?.split(" ");
  
  if (!Array.isArray(token) || token[0] !== "Bearer")
    return sendError(response, "missing Authorization header");
  
  try {
    let payload = jwt.verify(token[1], privateKey);
    request.jwt = payload;
  } catch (error) {
    return sendError(response, "invalid Authorization header");
  }
  
  next();
};

module.exports = validateAuthentication;
