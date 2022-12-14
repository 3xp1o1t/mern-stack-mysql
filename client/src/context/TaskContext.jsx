import { createContext, useContext, useState } from "react";
import {
  getTasksRequest,
  deleteTaskRequest,
  createTaskRequest,
  getTaskRequest,
  updateTaskRequest,
  toggleTaskDoneRequest,
} from "../api/tasks.api.js";

export const TaskContext = createContext();

/*
 * Para no estar importanto el contexto en todos los componentes
 * vamos a crear nuestro propio Hook.
 * El cual permitira el uso del contexto en los demas componentens.
 */

export const useTasks = () => {
  const context = useContext(TaskContext); // Hacemos uso del contexto local.
  if (!context) {
    // Si no hay un contexto, lanzamos un error, si no, lo retornamos.
    throw new error("useTasks debe de estar dentro de un TaskContextProvider");
  }
  return context;
};

export const TaskContextProvider = ({ children }) => {
  // Tasks servira de objeto global para todos los consumidores de este contexto
  const [tasks, setTasks] = useState([]);

  async function loadTasks() {
    const response = await getTasksRequest();
    setTasks(response.data);
  }

  // handleDelete de taskcard ahora es una funcion "global" para poder actualizar la lista de tareas cuando es eliminada.
  const deleteTask = async (id) => {
    try {
      const response = await deleteTaskRequest(id);
      //if (response.status == 204)
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  // Funcion creada a partir del codigo del evento onSubmit en taskform
  const createTask = async (task) => {
    try {
      const response = await createTaskRequest(task);
    } catch (error) {
      console.log(error);
    }
  };

  // Funcion para obtener una tarea por ID.
  const getTask = async (id) => {
    try {
      const response = await getTaskRequest(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  // Funcion para actualizar las tareas
  const updateTask = async (id, newFields) => {
    try {
      const response = await updateTaskRequest(id, newFields);
    } catch (error) {
      console.log(error);
    }
  };

  // Function para cambiar el estado de la tarea, completo/incompleto (is_done)
  const toggleTaskDone = async (id) => {
    try {
      // Buscar la tarea que queremos actualizar
      const taskFound = tasks.find((task) => task.id === id);
      // Si la tarea no esta completada = 0, entonces ponerla a true.
      await toggleTaskDoneRequest(id, taskFound.is_done === 0 ? true : false);

      // Actualizar el estado en vivo
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, is_done: !task.is_done } : task
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // Es posible usar tasks: tasks, pero en JS se puede acortar usando solo el objeto.
    <TaskContext.Provider
      value={{
        tasks,
        loadTasks,
        deleteTask,
        createTask,
        getTask,
        updateTask,
        toggleTaskDone,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
