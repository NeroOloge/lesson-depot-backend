const express = require("express");
const lessons = require("../data");

const router = express.Router();

router.get("/lessons", function (req, res, next) {
  return res.json(lessons);
});

module.exports = router;
