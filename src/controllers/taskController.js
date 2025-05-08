import Task from '../models/taskModel.js';
import { taskSchema } from '../validators/taskValidator.js';

export const getTasks = async (req, res) => {
    try {
      const tasks = await Task.find({ user: req.user.userId });
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener las tareas' });
    }
  };
  
  export const getTaskById = async (req, res) => {
    try {
      const task = await Task.findOne({ _id: req.params.id, user: req.user.userId });
      if (!task) return res.status(404).json({ message: 'Tarea no encontrada' });
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener la tarea' });
    }
  };
  
  export const createTask = async (req, res) => {
    const { error } = taskSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });
  
    try {
      const newTask = new Task({ ...req.body, user: req.user.userId }); // ✔️ correcto
      await newTask.save();
      res.status(201).json(newTask);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error al crear la tarea' });
    }
  };
  
  export const updateTask = async (req, res) => {
    const { error } = taskSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });
  
    try {
      const task = await Task.findOneAndUpdate(
        { _id: req.params.id, user: req.user.userId },
        req.body,
        { new: true }
      );
      if (!task) return res.status(404).json({ message: 'Tarea no encontrada' });
      res.status(200).json(task);
    } catch (err) {
      res.status(500).json({ message: 'Error al actualizar la tarea' });
    }
  };
  
  export const deleteTask = async (req, res) => {
    try {
      const task = await Task.findOneAndDelete({ _id: req.params.id, user: req.user.userId });
      if (!task) return res.status(404).json({ message: 'Tarea no encontrada' });
      res.status(200).json({ message: 'Tarea eliminada correctamente' });
    } catch (err) {
      res.status(500).json({ message: 'Error al eliminar la tarea' });
    }
  };
  
    