const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  isDone: {
    type: Boolean,
    required: true,
    default: false
  },

  priority: {
    type: Number,
    required: true
  },
  
  dueDate: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('task', taskSchema);
