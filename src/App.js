import React from "react";
import { Route, Routes } from "react-router-dom";
import Navi from "./components/Navi";
import Dashboard from "./components/Dashboard";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <div className="container">
        <Navi />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
