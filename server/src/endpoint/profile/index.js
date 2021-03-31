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
  const client = await connectClient();
  const result = await client.query(`SELECT t.* FROM public."Profile" t LIMIT 501`);
  console.log(result?.rows);
  response.send(result?.rows);
});

router.get("/profile/:address", async (request, response) => {
  console.log(request.params);
  const client = await connectClient();
  const result = await client.query(`SELECT t.* FROM public."Profile" t address = $1`, [request.params.address]);
  response.send(result?.rows);
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
