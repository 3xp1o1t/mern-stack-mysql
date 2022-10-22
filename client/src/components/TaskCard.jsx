import { useTasks } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";
import { FcEmptyTrash, FcEditImage } from "react-icons/fc";
import { BiToggleLeft, BiToggleRight} from "react-icons/bi";

function TaskCard({ task }) {
  const { deleteTask, toggleTaskDone } = useTasks();
  // useNavigate para insertar links en react y redireccionar.
  const navigate = useNavigate();

  // Funcion para controlar el estado de la tarea (completo/incompleto)
  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  return (
    <div className="border-solid border-green-600 border-2 p-4">
      <header className="flex justify-between">
        <h2 className="text-xl font-bold text-white">{task.title}</h2>
        <span className="border-2 border-blue-400">
          {task.is_done == 1 ? "✔" : "❌"}
        </span>
      </header>
      <p className="text-sm text-green-400">{task.description}</p>
      <span className="text-xs text-yellow-300">{task.createdAt}</span>
      <div className="flex gap-x-2 justify-end">
        <button
          className="bg-transparent border-2 border-red-600 px-1 py-1 rounded-md text-3xl"
          onClick={() => {
            deleteTask(task.id);
          }}
        >
          <FcEmptyTrash/>
        </button>
        <button
          className="bg-transparent border-2 border-blue-600 px-1 py-1 rounded-md text-3xl"
          onClick={() => {
            navigate(`/edit/${task.id}`);
          }}
        >
          <FcEditImage />
        </button>
        <button
          className="bg-transparent border-2 border-green-600 px-1 py-1 rounded-md text-3xl text-white"
          onClick={() => {
            handleDone(task.is_done);
          }}
        >
          {
            task.is_done == 0 ? <BiToggleLeft/> : <BiToggleRight/>
          }
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
