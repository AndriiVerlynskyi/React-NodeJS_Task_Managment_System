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
    default: false
  },

  priority: {
    type: String,
    required: true
  },
  
  dueDate: {
    type: Date,
    required: true
  },

  userId: {
    type: mongoose.Types.ObjectId,
    required: true    
  }
});

module.exports = mongoose.model('task', taskSchema);
