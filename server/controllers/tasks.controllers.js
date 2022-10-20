import { pool } from "../db.js";

export const getTasks = async (req, res) => {

  try {
    const [result] = await pool.query('SELECT * FROM tasks ORDER BY createdAt ASC');
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }

};

export const getTask = async (req, res) => {
  try {
    const {id} = req.params;
    const [result] = await pool.query('SELECT * FROM tasks WHERE id = ?', id);

    if (result.length === 0){
      return res.status(404).json({
        message: "Task  not found."
      })
    }

    res.json(result[0]);

  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

export const createTask = (req, res) => {
  res.send("Creando tarea");
};

export const updateTask = (req, res) => {
  res.send("Actualizando tarea");
};

export const deleteTask = (req, res) => {
  res.send("Eliminando tarea");
};
