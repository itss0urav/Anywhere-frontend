import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { UserContextProvider } from "./context/UserContext";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
