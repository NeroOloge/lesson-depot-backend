const express = require("express");
const { ObjectId } = require("mongodb");
const { db } = require("../db");

const router = express.Router();

router.get("/lessons", function (req, res, next) {
  const lessons = db.collection("lessons").find();
  lessons.toArray().then((results) => res.json(results));
});

router.post("/orders", function (req, res, next) {
  const order = req.body;
  // TODO: create order
  db.collection("orders")
    .insertOne(order)
    .then((result) => res.json({ msg: "Success" }))
    .catch((err) => {
      console.error(err);
      res.status(500).json({ msg: "An error occurred" });
    });
});

router.get("/search", function (req, res, next) {
  const searchTerm = req.query.searchTerm;

  const lessons = db.collection("lessons").find({
    $or: [
      { subject: { $regex: `${searchTerm}` } },
      { location: { $regex: `${searchTerm}` } },
      { price: { $regex: `${searchTerm}` } },
      { spaces: { $regex: `${searchTerm}` } },
    ],
  });
  lessons.toArray().then((results) => res.json(results));
});

router.put("/lessons/:id", function (req, res, next) {
  const id = req.params.id;
  const updatedLesson = req.body;
  // TODO: update lesson
  db.collection("lessons").findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: updatedLesson }
  );
  return res.json({ msg: "Success" });
});

module.exports = router;
