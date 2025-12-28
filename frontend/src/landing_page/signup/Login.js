import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      await login({ username, password });

      // ✅ After login, go to dashboard app
      const dashUrl =
        process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001/";
      window.location.href = dashUrl;
    } catch (err) {
      const msg =
        err?.response?.data?.message ||
        "Login failed. Check username/password.";
      setError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: 420, margin: "40px auto", padding: 16 }}>
      <h2 style={{ marginBottom: 16 }}>Login</h2>

      {error ? (
        <div
          style={{
            background: "#ffe6e6",
            padding: 10,
            borderRadius: 8,
            marginBottom: 12,
          }}
        >
          {error}
        </div>
      ) : null}

      <form onSubmit={onSubmit}>
        <div style={{ marginBottom: 10 }}>
          <label>Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
            style={{ width: "100%", padding: 10, marginTop: 6 }}
          />
        </div>

        <div style={{ marginBottom: 14 }}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            style={{ width: "100%", padding: 10, marginTop: 6 }}
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          style={{
            width: "100%",
            padding: 12,
            cursor: submitting ? "not-allowed" : "pointer",
          }}
        >
          {submitting ? "Logging in..." : "Login"}
        </button>
      </form>

      <p style={{ marginTop: 14 }}>
        Don’t have an account? <Link to="/signup">Register</Link>
      </p>
    </div>
  );
}
