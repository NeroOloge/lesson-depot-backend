const express = require("express");
const { db } = require("../db");

const router = express.Router();

router.get("/lessons", function (req, res, next) {
  const lessons = db.collection("lessons").find();
  lessons.toArray().then((results) => res.json(results));
});

router.post("/orders", function (req, res, next) {
  const order = req.body;
  // TODO: create order
  db.collection("orders").insertOne(order);
  return res.json({ msg: "Success" });
});

router.put("/lessons/:id", function (req, res, next) {
  const id = req.params.id;
  const updatedLesson = req.body;
  // TODO: update lesson
  db.collection("lessons").findOneAndUpdate(
    { _id: id },
    { $set: updatedLesson }
  );
  return res.json({ msg: "Success" });
});

module.exports = router;
