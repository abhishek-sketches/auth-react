const TodoCard = ({ todo, onDelete }) => (
  <li className="todo-item">
    <span>{todo.task}</span>
    <button
      type="button"
      className="btn btn-danger"
      onClick={() => onDelete(todo.id)}
      aria-label={`Delete task: ${todo.task}`}
    >
      Delete
    </button>
  </li>
);

export default TodoCard;
