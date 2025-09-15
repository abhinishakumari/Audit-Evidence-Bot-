import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from './components/Login/Login';
import Landing from './components/landing/Landing';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Landing" element={<Landing />} />
    </Routes>
  );
};

export default App;
