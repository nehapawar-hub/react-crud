import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";
import React from 'react';
import { Home } from "./Home";
import { Department } from "./Department";
import { Employee } from "./Employee";

// import { variables } from "./Variables"; // Unused for now, uncomment if needed

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function App() {
   debugger;
   console.log("App component rendered");
  return (
   
    <BrowserRouter>
      <div className="App container">
        <h3 className="text-center my-4">My React App</h3>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded mb-4">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              Employee CRUD
            </NavLink>

            <div className="navbar-nav">
              {/* Changed 'to' path to "/" to match the home route layout */}
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>

              <NavLink className="nav-link" to="/department">
                Department
              </NavLink>

              <NavLink className="nav-link" to="/employee">
                Employee
              </NavLink>

               <NavLink className="nav-link" to="/account">
                Account
              </NavLink>
            </div>
          </div>
        </nav>

        {/* Content Area */}
        <div className="container p-3 border rounded bg-light">
          <Routes>
            {/* Changed path from "/home" to "/" so the landing page actually loads something */}
            <Route path="/" element={<Home />} />
            <Route path="/department" element={<Department />} />
            <Route path="/employee" element={<Employee />} />
       
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;