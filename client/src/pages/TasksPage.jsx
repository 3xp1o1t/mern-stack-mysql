import { useEffect, useState } from "react";
import { getTasksRequest } from "../api/tasks.api.js";
import TaskCard from "../components/TaskCard";

function TasksPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const response = await getTasksRequest();
      setTasks(response.data);
    }
    loadTasks();
  }, []);

  function renderTasksList() {
    if (tasks.length === 0) return <h1>No tasks yet</h1>;

    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  }

  return (
    <div>
      <h1>Task list</h1>
      {renderTasksList()}
    </div>
  );
}

export default TasksPage;
