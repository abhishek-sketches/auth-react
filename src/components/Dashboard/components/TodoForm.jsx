import { useState } from "react";
import toast from "react-hot-toast";

const TodoForm = ({ onAdd }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = task.trim();
    if (!trimmed) {
      toast.error("Input field is empty!");
      return;
    }
    onAdd(trimmed);
    setTask("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label htmlFor="task" className="sr-only">
        New task
      </label>
      <input
        id="task"
        className="input"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a task"
      />
      <button type="submit" className="btn">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
