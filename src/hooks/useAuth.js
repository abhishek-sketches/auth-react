import { useCallback, useState } from "react";

const readJSON = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    return null;
  }
};

// Demo-only auth: credentials live in localStorage. Do not use for real accounts.
export default function useAuth() {
  const [isAuthed, setIsAuthed] = useState(() => readJSON("token") === true);

  const register = useCallback(({ email, password }) => {
    localStorage.setItem("user", JSON.stringify({ email, password }));
    localStorage.setItem("token", JSON.stringify(true));
    setIsAuthed(true);
  }, []);

  const login = useCallback(({ email, password }) => {
    const saved = readJSON("user");
    if (saved && saved.email === email && saved.password === password) {
      localStorage.setItem("token", JSON.stringify(true));
      setIsAuthed(true);
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    localStorage.setItem("token", JSON.stringify(false));
    setIsAuthed(false);
  }, []);

  return { isAuthed, register, login, logout };
}
