const express = require("express");
const router = express.Router();

router.get("/stats", async (request, response) => {
  const result = [];
  response.send(result);
});

module.exports = router;
