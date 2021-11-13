import React from 'react'
import Dashboard from '../component/dashboard';
import Login from '../page/login';
import {
    BrowserRouter as Router,Routes,
    Route,
  } from "react-router-dom";

export default function AppRoutes() {
    const isAuthenticated = localStorage.getItem("AuthToken");
    console.log('ttttr', isAuthenticated);
    return (
        <div>
            <Router>
            <Routes>
                <Route  path="/dashboard" element={isAuthenticated?<Dashboard/>:""}/>                  
                <Route path="/login" element={<Login/>}/>
            </Routes>
            </Router>
        </div>
    )
}
