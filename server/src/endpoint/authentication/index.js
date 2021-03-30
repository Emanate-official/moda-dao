const express = require("express");
const router = express.Router();
const config = require("../../../config.json");
const Joi = require("joi");
const fs = require("fs");
const privateKey = fs.readFileSync(process.env.JWT_KEY_FILE).toString();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const schema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const verifyRootLogin = async ({ username, password }) => (
    username.toLowerCase() === "root" &&
    await bcrypt.compare(password, config.rootLogin.passwordHash)
);

router.post("/authentication", async (request, response) => {
  const { error } = schema.validate(request.body);

  if (error != null) {
    response.status(400);
    response.send(error);
    return;
  }
  
  if (!(await verifyRootLogin(request.body))) {
    response.status(401);
    response.send({ error: "invalid login" });
    return;
  }
  
  const payload = {
    username: request.body.username.toLowerCase()
  };
  
  const token = jwt.sign(payload, privateKey);
  
  response.send({
    token
  });
});

module.exports = router;
