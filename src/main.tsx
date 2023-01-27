import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/AuthContext";
import { FallBackLoader } from "./components/shared";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { CardProvider } from "./context/CardContext";
import stateReducer from "./context/reducers/cardReducer";
import { initialState } from "./typings/reduxTypings";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <React.Suspense fallback={<FallBackLoader />}>
      <BrowserRouter>
        <AuthContextProvider>
           <CardProvider reducer={stateReducer} initialState={initialState}>
            <App />
           </CardProvider>
          <ToastContainer />
        </AuthContextProvider>
      </BrowserRouter>
    </React.Suspense>
  </React.StrictMode>
);
