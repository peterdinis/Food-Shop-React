import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/AuthContext";
import { FallBackLoader } from "./components/shared";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <React.Suspense fallback={<FallBackLoader />}>
      <BrowserRouter>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </BrowserRouter>
    </React.Suspense>
  </React.StrictMode>
);
