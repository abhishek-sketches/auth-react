import Auth from "./components/Auth/Auth";
import { useState } from "react";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
const App = () => {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));

  return (
    <div>
      <Router>
        <Routes>
          {!token ? (
            <Route
              exact
              path="/"
              element={<Auth setToken={setToken} />}
            ></Route>
          ) : (
            <Route
              exact
              path="/dashboard"
              element={<Dashboard setToken={setToken} />}
            ></Route>
          )}
        </Routes>
      </Router>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          className: "toast-container",
        }}
      />
    </div>
  );
};

export default App;
