const express = require("express");
const router = express.Router();

const { connectClient } = require("../../database");
const Joi = require("joi");

const schema = Joi.object({
  address: Joi.string().required(),
  password: Joi.string().required(),
  signature: Joi.string().required()
});

router.post("/register"),
  async (request, response) => {

    console.log(request);
    const { error } = schema.validate({ address, password });
    if (error != null)
      throw new Error(
        "Could not validate schema for database transaction: " + error
      );

    await client.query(
      "INSERT INTO profile(address, name, twitter) VALUES ($1, $2, $3)",
      [address, name, twitter]
    );
  };

module.exports = router;
