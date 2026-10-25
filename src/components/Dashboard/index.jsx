import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoCard from "./components/TodoCard";
import TodoForm from "./components/TodoForm";
const Dashboard = ({ setToken }) => {
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState([]);
  const logout = () => {
    localStorage.setItem("token", JSON.stringify(false));
    setToken(false);
    navigate("/");
  };
  console.log("><><><", todoList);
  return (
    <div className="h-screen">
      <div className=" flex justify-between mx-2 my-2  text-red-800">
        <span className="text-3xl ">Dashboard</span>
        <span onClick={logout} className="cursor-pointer text-red-800">
          Logout
        </span>
      </div>
      <TodoForm todoList={todoList} setTodoList={setTodoList} />
      {todoList.map((todo, index) => (
        <TodoCard
          key={index}
          todo={todo}
          index={index}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ))}
    </div>
  );
};
export default Dashboard;
