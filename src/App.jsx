import React, { useEffect, useContext } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Authentication/Register";
import Login from "./pages/Authentication/Login";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Context, server } from ".";
import axios from "axios";
import SavedCandidates from "./pages/SavedCandidates/SavedCandidates";
function App() {
  const { setUser, setIsAuthenticated, setLoading } = useContext(Context);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${server}/users/me`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data.user);
        setIsAuthenticated(true);
        setLoading(false);
      })
      .catch((error) => {
        setUser({});
        setIsAuthenticated(false);
        setLoading(false);
      });
    // eslint-disable-next-line
  }, []);
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/savedcandidates" element={<SavedCandidates />} />
      </Routes>
      <Toaster />
    </React.Fragment>
  );
}

export default App;
