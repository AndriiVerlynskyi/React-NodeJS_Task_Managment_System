const { Task } = require('../../database/models');

const { createFilter } = require('./filter');
const { createSorter } = require('./sorter');

module.exports.getAllTasks = async (req, res) => {
  try {
    const filter = createFilter(req);
    filter.userId = req.user._id;

    const sorter = createSorter(req.query.sort)

    const tasksPerPage = Number(req.query.perPage) || 15;
    const page = Number(req.query.page) || 1;

    const tasks = (await Task.find(filter)
                    .sort(sorter)
                    .select('title isDone _id')
                    .skip(tasksPerPage * (page - 1))
                    .limit(tasksPerPage)) || [];

    return res.status(200).send(tasks);
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }  
}

module.exports.getTask = async(req, res) => {
  try {
    const { taskId } = req.params;

    const task = await Task.findById(taskId)

    if ( task.userId.toString() === req.user._id.toString() ) {
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
    const task = req.body;
    const result = await Task.create({...task, userId: req.user._id})

    return res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err)
  }
}

module.exports.deleteTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const task = await Task.findById(taskId);

    if ( task.userId.toString() === req.user._id.toString() ) {
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
    const task = await Task.findById(taskId);

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
    const editedFields = req.body;

    const task = await Task.findById(taskId);

    if ( task.userId.toString() === req.user._id.toString() ) {
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
