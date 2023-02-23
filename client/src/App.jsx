// import logo from './logo.svg';
import React from 'react';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import EnquiryForm from "./componenet/EnquiryForm";
import Navbar from "./componenet/Navbar";
import Dashboard from "./componenet/Dashboard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<EnquiryForm />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
