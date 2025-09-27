import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Login } from "../pages/Login";

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                {/* <Route path="/Dashboard" element = {<Dashboard />} /> */}
            </Routes>
        </Router>
    );
};

export default AppRoutes;