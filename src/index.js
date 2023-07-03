import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { useState, createContext } from "react";

export const server = "https://communitreebackend.onrender.com/api/v1";

export const Context = createContext({ isAuthenticated: false });

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [savedCandidates, setSavedCandidates] = useState([]);
  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
        loading,
        setLoading,
        savedCandidates,
        setSavedCandidates,
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <AppWrapper />
  </React.Fragment>
);
