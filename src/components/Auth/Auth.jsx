import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

const Auth = ({ setToken, pageNavigation }) => {
  const [login, setLogin] = useState(true);

  const handleLogin = () => {
    setLogin(!login);
  };
  if (login)
    return (
      <Login
        handleLogin={handleLogin}
        setToken={setToken}
        pageNavigation={pageNavigation}
      />
    );
  return (
    <Register
      handleLogin={handleLogin}
      setToken={setToken}
      pageNavigation={pageNavigation}
    />
  );
};
export default Auth;
