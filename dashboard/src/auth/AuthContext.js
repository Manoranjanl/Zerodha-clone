import React, { createContext, useEffect, useMemo, useState } from "react";
import api from "../utils/api";

export const AuthContext = createContext({
  user: null,
  loading: true,
  login: async () => {},
  logout: async () => {},
  refreshMe: async () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const refreshMe = async () => {
    try {
      const res = await api.get("/api/auth/me");
      setUser(res.data?.user || null);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshMe();
  }, []);

  const login = async ({ username, password }) => {
    const res = await api.post("/api/auth/login", { username, password });
    setUser(res.data?.user || null);
    return res.data;
  };

  const logout = async () => {
    try {
      await api.post("/api/auth/logout");
    } finally {
      setUser(null);
    }
  };

  const value = useMemo(
    () => ({ user, loading, login, logout, refreshMe }),
    [user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
