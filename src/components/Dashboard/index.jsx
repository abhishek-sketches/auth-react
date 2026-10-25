import { useState } from "react";
import TodoCard from "./components/TodoCard.jsx";
import TodoForm from "./components/TodoForm.jsx";

const Dashboard = ({ onLogout }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) =>
    setTodos((list) => [...list, { id: crypto.randomUUID(), task }]);
  const deleteTodo = (id) => setTodos((list) => list.filter((t) => t.id !== id));

  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <button type="button" className="btn btn-ghost" onClick={onLogout}>
          Logout
        </button>
      </header>
      <TodoForm onAdd={addTodo} />
      {todos.length === 0 ? (
        <p className="empty">No tasks yet. Add your first one above.</p>
      ) : (
        <ul className="todo-list" aria-label="Tasks">
          {todos.map((todo) => (
            <TodoCard key={todo.id} todo={todo} onDelete={deleteTodo} />
          ))}
        </ul>
      )}
    </main>
  );
};

export default Dashboard;
