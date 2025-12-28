import React, { createContext, useEffect, useMemo, useState } from "react";
import api from "./api";

export const AuthContext = createContext({
  user: null,
  loading: true,
  register: async () => {},
  login: async () => {},
  logout: async () => {},
  refreshMe: async () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const refreshMe = async () => {
    setLoading(true);
    try {
      const res = await api.get("/api/auth/me");
      setUser(res.data?.user || null);
    } catch (e) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshMe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const register = async ({ fullName, username, password }) => {
    const res = await api.post("/api/auth/register", {
      fullName,
      username,
      password,
    });
    setUser(res.data?.user || null);
    return res.data;
  };

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
    () => ({ user, loading, register, login, logout, refreshMe }),
    [user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
