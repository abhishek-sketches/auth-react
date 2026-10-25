import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = ({ handleLogin, setToken }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  const userData = JSON.parse(localStorage.getItem("user"));
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.email === user.email && userData.password === user.password) {
      setToken(true);
      localStorage.setItem("token", JSON.stringify(true));
      navigate("/dashboard")
    } else {
      console.log("Credential does't match");
    }
  };
  return (
    <section className="h-screen">
      <div className="container mx-2">
        <div className="flex flex-wrap justify-center items-center h-full text-gray-800 lg:gap-20">
          <div className="lg:w-[50%] md:w-[30%]">
            <img src="/logo.png" className="w-full" alt="logo" />
          </div>
          <div className="border-4 rounded-lg shadow-2xl p-4">
            <span className="w-full text-7xl font-medium flex justify-center mb-4">
              Login
            </span>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="form-control text-lg font-normal border border-solid border-gray-300 rounded w-full px-2 py-2"
                />
              </div>
              <div className="mb-6">
                <input
                  onChange={handleChange}
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control text-lg font-normal border border-solid border-gray-300 rounded w-full px-2 py-2"
                />
              </div>
              <div className="mb-6">
                <button
                  type="submit"
                  className="px-7 shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none py-3 bg-blue-600 text-white font-medium text-sm uppercase w-full border border-solid rounded"
                >
                  Login
                </button>
                <p className="text-lg font-semibold mt-2 pt-1 mb-0">
                  Don't have an account?
                  <span
                    onClick={() => handleLogin()}
                    className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out cursor-pointer pl-1"
                  >
                    Register
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
