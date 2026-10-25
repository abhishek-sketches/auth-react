const TodoCard = ({ todo, index, todoList, setTodoList }) => {
  const handleDelete = () => {
    const temp = [...todoList];
    temp.splice(index, 1);
    setTodoList(temp);
  };
  return (
    <div className="flex justify-between my-5 mx-52 px-4 py-4  bg-gray-100 shadow-lg rounded">
      <span className=" font-medium">{todo.task}</span>
      <button
        onClick={handleDelete}
        className="border border-red-700 bg-white px-2 hover:text-white hover:bg-red-500 rounded"
      >
        Delete
      </button>
    </div>
  );
};
export default TodoCard;
