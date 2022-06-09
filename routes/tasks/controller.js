const mongoose = require('mongoose');

const { Task } = require('../../database/models/Task');

const { createFilter } = require('./filter');

module.exports.getAllTasks = async (req, res) => {
  try {
    const filter = createFilter(req);
    filter[userId] = req.user._id;
    const tasksPerPage = Number(req.query.perPage) || 15;
    const page = Number(req.query.page) || 1;

    const tasks = await Task.find(filter)
                    .select('title, _id')
                    .skip(tasksPerPage * (page - 1))
                    .limit(tasksPerPage) || [];

    return res.staus(200).send(tasks);
  } catch (err) {
    res.status(500).send(err)
  }  
}

module.exports.getTask = async(req, res) => {
  try {
    const { taskId } = req.params;

    const task = await Task.findOneById(taskId)

    if ( task._id === req.user._id ) {
      const task = await Task.findOne({ _id: taskId });

      return res.status(200).send(task)
    } else {
      return res.status(401).send({
        message: 'You cannot get this task'
      })
    }
  } catch (err) {
    res.status(500).send(err)
  }
}

module.exports.createTask = async (req, res) => {
  try {
    const { task } = req.body;
    const result = await Task.create({...task, uesrId: req.user._id})

    return res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err)
  }
}

module.exports.deleteTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const task = await Task.findOneById(taskId)

    if ( task._id === req.user._id ) {
      const deletedTask = await Task.findOneAndDelete({ _id: taskId })

      return res.status(200).send(deletedTask)
    } else {
      return res.status(401).send({
        message: 'User cannot delete this task'
      })
    }
  } catch (err) {
    res.status(500).send({
      message: err.message ? err.message : err
    })
  }
}

module.exports.changeIsDone = async(req, res) => {
  try {
    const { taskId } = req.params;
    const task = await Task.findById(id);

    //change isDone field and return error false if changes are saved
    await Task.findOneAndUpdate(
      { _id: taskId },
      { $set: { isDone: !task.isDone } }
    )

    return res.status(200).send({
      error: false
    })
  } catch (err) {
    return res.status(500).send({
      ...err,
      error: true
    })
  }
}

module.exports.editTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const { editedFields } = req.body;

    if ( taskId === req.user._id ) {
      const editedTask = await Task.findOneAndUpdate(
        {_id: taskId},
        { $set: { ...editedFields }}
      )
      
      return res.status(200).send(editedTask)
    } else {
      return res.status(401).send({
        message: 'This user cannot edit this task'
      })
    }
  } catch (err) {
    return res.status(500).send({
      message: err.message ? err.message : err
    })
  }
}
