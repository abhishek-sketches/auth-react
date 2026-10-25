import { useState } from "react";
import toast from "react-hot-toast";
const TodoForm = ({ todoList, setTodoList }) => {
  const [taskvalue, setTaskValue] = useState({ task: "" });

  const handleChange = (e) => {
    setTaskValue({ ...taskvalue, [e.target.name]: e.target.value });
  };
  const handleSumbit = (e) => {
    e.preventDefault();
    if (taskvalue.task === "") {
      toast.error("Input field is empty !");
    } else {
      setTodoList([...todoList, taskvalue]);
      setTaskValue({ task: "" });
    }
  };
  return (
    <div className="flex flex-row justify-center mt-5">
      <form onSubmit={handleSumbit}>
        <input
          onChange={handleChange}
          type="text"
          name="task"
          value={taskvalue?.task || ""}
          placeholder="TodoList"
          className="form-control text-lg font-normal border border-solid border-gray-300 shadow-lg rounded  px-2 py-2"
        />
        <button
          type="submit"
          className="ml-2 border-2 border-green-500 p-2 text-green-500 hover:text-white hover:bg-green-500 rounded-lg "
        >
          <span>Add</span>
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
