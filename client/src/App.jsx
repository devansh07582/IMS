// import logo from './logo.svg';
import React from 'react';
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import EnquiryForm from "./componenet/EnquiryForm";
import Navbar from "./componenet/Navbar";
import Dashboard from "./componenet/Dashboard";
import FormSubmitted from './componenet/FormSubmitted';
import StatusDone from './componenet/StatusDone';
import StatusPending from './componenet/StatusPending';
import StatusRejected from './componenet/StatusRejected';
import LoginPage from './componenet/LoginPage';
import CreateUser from './componenet/CreateUser';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<EnquiryForm />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path='/FormSubmitted' element={<FormSubmitted />} />
        <Route path='Dashboard/Done' element={<StatusDone />} />
        <Route path='Dashboard/Pending' element={<StatusPending />} />
        <Route path='Dashboard/Rejected' element={<StatusRejected />} />
        <Route path='/Login' element={<LoginPage />}/>
        <Route path='/Dashboard/Done/CreateUser' element = {<CreateUser/>}/>
      </Routes>
    </div>
  );
}

export default App;
