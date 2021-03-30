const express = require("express");
const router = express.Router();

router.get("/authentication/check", async (request, response) => {
  response.send({
    error: null,
    success: true,
  });
});

module.exports = router;
