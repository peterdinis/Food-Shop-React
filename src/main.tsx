import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/AuthContext";
import { FallBackLoader } from "./components/shared";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <React.Suspense fallback={<FallBackLoader />}>
      <BrowserRouter>
        <AuthContextProvider>
          <App />
          <ToastContainer />
        </AuthContextProvider>
      </BrowserRouter>
    </React.Suspense>
  </React.StrictMode>
);
