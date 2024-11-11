const express = require("express");
const lessons = require("../data");

const router = express.Router();

router.get("/lessons", function (req, res, next) {
  return res.json(lessons);
});

router.post("/orders", function (req, res, next) {
  const order = req.body;
  // TODO: create order
  return res.json({ msg: "Success" });
});

router.put("/lessons/:id", function (req, res, next) {
  const id = req.params.id;
  const updatedLesson = req.body;
  // TODO: update lesson
  return res.json({ msg: "Success" });
});

module.exports = router;
