import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Auth from "./components/Auth/Auth.jsx";
import Dashboard from "./components/Dashboard/index.jsx";
import useAuth from "./hooks/useAuth.js";

const App = () => {
  const { isAuthed, login, register, logout } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isAuthed ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Auth login={login} register={register} />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            isAuthed ? <Dashboard onLogout={logout} /> : <Navigate to="/" replace />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster position="bottom-center" />
    </BrowserRouter>
  );
};

export default App;
