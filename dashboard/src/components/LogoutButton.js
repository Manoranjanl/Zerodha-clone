import React from "react";
import api from "../utils/api";

export default function LogoutButton() {
  const handleLogout = async () => {
    try {
      await api.post("/api/auth/logout");
    } catch (e) {
      console.error("Logout error:", e);
    } finally {
      window.location.href = "/login";
    }
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        width: "100%",
        padding: "10px 12px",
        borderRadius: 8,
        border: "1px solid #eee",
        background: "#fff",
        cursor: "pointer",
        fontWeight: 600,
      }}
    >
      Logout
    </button>
  );
}
