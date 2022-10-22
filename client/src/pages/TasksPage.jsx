import { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskContext";

function TasksPage() {
  // Utilizamos el custom hook para importar el contexto tasks
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  function renderTasksList() {
    if (tasks.length === 0) return <h1>No tasks yet</h1>;

    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  }

  return (
    <div>
      <h1 className="text-5xl text-green-500 font-bold text-center">Tasks</h1>
      <div className="grid grid-cols-3 gap-2 py-4">{renderTasksList()}</div>
    </div>
  );
}

export default TasksPage;
