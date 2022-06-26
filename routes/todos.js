const express = require("express");
const mongoose = require("mongoose");
const Todo = require("../models/Todo");
// const todos = require("../models/Todo");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const posts = await Todo.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const todo = new Todo({
    title: req.body.title,
  });

  try {
    const savedTodo = await todo.save();
    res.json(savedTodo);
  } catch (err) {
    res.json({ message: err });
  }
});

// get specific todo
router.get("/:todoId", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.todoId);
    res.json(todo);
  } catch (err) {
    res.json({ message: err });
  }
});

// delete specifi todo
router.delete("/:todoId", async (req, res) => {
  try {
    const removedTodo = await Todo.deleteOne({ _id: req.params.todoId });
    res.json(removedTodo);
  } catch (err) {
    res.json({ message: err });
  }
});

// update specific todo
router.patch("/:todoId", async (req, res) => {
  try {
    const updatedTodo = await Todo.updateOne(
      { _id: req.params.todoId },
      { $set: { is_completed: req.body.is_completed } }
    );
    res.json(updatedTodo);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
