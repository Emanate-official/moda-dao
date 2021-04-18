const express = require("express");
const router = express.Router();

router.get("/proposals", async (request, response) => {
  //
  const result = [
    {
      owner: "0x2BD211585dc43522d31949c1A104570eb5E9789b",
      required: 1000
    },
    {
      owner: "0x681922B32a4402213c4E140A6BC0bb63ED6331E7",
      required: 2000
    }
  ];

  response.send(result);
});

module.exports = router;
