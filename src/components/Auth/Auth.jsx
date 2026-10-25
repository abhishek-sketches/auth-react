import { useState } from "react";
import toast from "react-hot-toast";

const initial = { email: "", password: "", confirmPassword: "" };

const Auth = ({ login, register }) => {
  const [mode, setMode] = useState("login");
  const [values, setValues] = useState(initial);
  const [error, setError] = useState("");
  const isLogin = mode === "login";

  const handleChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
    setError("");
  };

  const switchMode = () => {
    setMode(isLogin ? "register" : "login");
    setValues(initial);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      if (!login(values)) toast.error("Email or password is incorrect.");
      return;
    }
    if (values.password !== values.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    register(values);
  };

  return (
    <main className="auth-page">
      <div className="auth-layout">
        <img src="/logo.png" className="auth-logo" alt="" />
        <section className="card auth-card" aria-labelledby="auth-title">
          <h1 id="auth-title">{isLogin ? "Login" : "Register"}</h1>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete={isLogin ? "current-password" : "new-password"}
                required
                value={values.password}
                onChange={handleChange}
              />
            </div>
            {!isLogin && (
              <div className="field">
                <label htmlFor="confirmPassword">Confirm password</label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={values.confirmPassword}
                  onChange={handleChange}
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? "confirm-error" : undefined}
                />
                {error && (
                  <span id="confirm-error" className="error" role="alert">
                    {error}
                  </span>
                )}
              </div>
            )}
            <button type="submit" className="btn btn-block">
              {isLogin ? "Login" : "Register"}
            </button>
          </form>
          <p className="switch-text">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button type="button" className="link-button" onClick={switchMode}>
              {isLogin ? "Register" : "Login"}
            </button>
          </p>
        </section>
      </div>
    </main>
  );
};

export default Auth;
