import axios from "axios";

// ✅ IMPORTANT:
// React (CRA) reads env vars at BUILD time.
// On Render, after changing env vars you must redeploy (clear cache).

const baseURL =
  process.env.REACT_APP_API_URL ||
  (process.env.NODE_ENV === "development" ? "http://localhost:5000" : "");

// If baseURL is empty in production, calls will become relative and likely fail.
if (!baseURL && process.env.NODE_ENV !== "development") {
  // Avoid crashing the app; errors will be shown when requests are made.
  // You can also console.warn to help debugging:
  // eslint-disable-next-line no-console
  console.warn(
    "REACT_APP_API_URL is missing. Set it in Render frontend environment variables and redeploy."
  );
}

const api = axios.create({
  baseURL,
  timeout: 20000,
  // ✅ If you use cookies/session auth set this to true
  // If you use JWT in headers/localStorage, you can keep it false.
  withCredentials: true,
});

// Optional: log request url in dev
api.interceptors.request.use((config) => {
  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.log(
      "[API]",
      config.method?.toUpperCase(),
      config.baseURL + config.url
    );
  }
  return config;
});

export default api;
