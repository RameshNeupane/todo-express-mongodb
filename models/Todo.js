const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  is_completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Todos", TodoSchema);
