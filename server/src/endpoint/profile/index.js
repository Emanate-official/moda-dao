const express = require("express");
const router = express.Router();

const { connectClient } = require("../../database");
const Joi = require("joi");

const schema = Joi.object({
  address: Joi.string().required(),
  name: Joi.string().required(),
  twitter: Joi.string()
});

router.get("/profile", async (request, response) => {
  const stats = await getLoggedStats();
  response.send(stats);
});

router.post("/profile"),
  async (request, response) => {

    console.log(request);
    const { error } = schema.validate({ address, name, twitter });
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
