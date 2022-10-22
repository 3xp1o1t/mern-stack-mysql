import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskContext";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function TasksForm() {
  // Usamos el custom hook para extraer cualquier valor del contexto global.
  const { createTask, getTask, updateTask } = useTasks();

  // Use navigate para redireccionar
  const navigate = useNavigate();

  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  // useParams para habilitar la edicion de la tarea comprobando si viene un ID en la url.
  // El h1 a continuacion verifica esto usando el operador ternario.
  const params = useParams();

  // useEffect para traer una tarea si es que se esta editando.
  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setTask({
          title: task.title,
          description: task.description,
        });
      }
    };
    loadTask();
  }, []);

  // initialValues ahora es igual a task (useState) de este modo podemos enviar los datos al form al actualizar
  // para que funcione correctamente es necesario usar enableREinitialize = {true}, si no, no mostrara ningun dato.
  return (
    <div>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values) => {
          if (params.id) {
            await updateTask(params.id, values);
          } else {
            await createTask(values);
          }
          setTask({
            title: "",
            description: "",
          });
          navigate("/");
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="max-w-sm bg-zinc-900 rounded-md p-4 mx-auto mt-10"
          >
            <h1 className="text-4xl font-bold text-blue-500 uppercase text-center">
              {params.id ? "Edit Task" : "New Task"}
            </h1>
            <label className="block text-green-500 py-1 font-semibold">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Write a title"
              onChange={handleChange}
              value={values.title}
              autoFocus
              className="px-2 py-1 rounded-md w-full"
            />
            <label className="block text-green-500 py-1 font-semibold">Description</label>
            <textarea
              name="description"
              rows="3"
              placeholder="Write a description"
              onChange={handleChange}
              value={values.description}
              className="px-2 py-1 rounded-md w-full mt-1" 
            ></textarea>
            <button type="submit" disabled={isSubmitting} className="block bg-indigo-900 text-white px-2 py-2 w-full rounded-md mt-2">
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TasksForm;
