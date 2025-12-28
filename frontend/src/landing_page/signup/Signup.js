import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";

export default function Signup() {
  const navigate = useNavigate(); // kept (in case you use later)
  const { register, user, loading } = useContext(AuthContext);

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const getDashboardUrl = () => {
    const url = process.env.REACT_APP_DASHBOARD_URL;

    // Allow localhost only in dev (optional)
    if (!url && process.env.NODE_ENV === "development") {
      return "http://localhost:3001/";
    }

    return url || "";
  };

  // If already logged in, redirect to dashboard (but safely)
  if (loading) return <div style={{ padding: 20 }}>Loading...</div>;

  if (user) {
    const dashUrl = getDashboardUrl();
    if (dashUrl) {
      window.location.href = dashUrl;
      return null;
    }
    // If dashboard URL missing, don't auto-redirect; show message instead
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      await register({ fullName, username, password });

      const dashUrl = getDashboardUrl();
      if (!dashUrl) {
        setError(
          "Dashboard URL is not configured. Set REACT_APP_DASHBOARD_URL in your frontend Render environment variables and redeploy (clear cache)."
        );
        return;
      }

      window.location.href = dashUrl;
    } catch (err) {
      console.log("REGISTER ERROR:", err);
      console.log("REGISTER ERROR RESPONSE:", err?.response);
      console.log("REGISTER ERROR DATA:", err?.response?.data);

      const msg =
        err?.response?.data?.message ||
        err?.message ||
        "Registration failed. Please check inputs and try again.";
      setError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: 420, margin: "40px auto", padding: 16 }}>
      <h2 style={{ marginBottom: 16 }}>Create account</h2>

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

      {/* If logged in but dashboard URL missing */}
      {user && !process.env.REACT_APP_DASHBOARD_URL ? (
        <div
          style={{
            background: "#fff3cd",
            padding: 10,
            borderRadius: 8,
            marginBottom: 12,
          }}
        >
          You are logged in, but dashboard redirect URL is missing. Please set{" "}
          <b>REACT_APP_DASHBOARD_URL</b> and redeploy.
        </div>
      ) : null}

      <form onSubmit={onSubmit}>
        <div style={{ marginBottom: 10 }}>
          <label>Full Name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Your full name"
            style={{ width: "100%", padding: 10, marginTop: 6 }}
          />
        </div>

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
            placeholder="min 6 characters"
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
          {submitting ? "Creating..." : "Register"}
        </button>
      </form>

      <p style={{ marginTop: 14 }}>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
