import {useTasks} from '../context/TaskContext';
import {useNavigate} from 'react-router-dom';

function TaskCard({ task }) {

  const {deleteTask} = useTasks();
  // useNavigate para insertar links en react y redireccionar.
  const navigate = useNavigate();

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.is_done == 1 ? "✔" : "❌"}</span>
      <span>{task.createdAt}</span>
      <button onClick={() => {deleteTask(task.id)}}>Delete</button>
      <button onClick={() => {navigate(`/edit/${task.id}`)}}>Edit</button>
    </div>
  );
}

export default TaskCard;
