const express = require("express");
const router = express.Router();
const jsonserver = require("json-server");
router.get("/", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});

router.get("/api", jsonserver.router("db.json"));
module.exports = router;
