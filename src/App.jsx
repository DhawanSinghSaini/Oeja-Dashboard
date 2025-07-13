import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import FinanceDashboard from "./pages/FinanceDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import EngagementDashboard from "./pages/EngagementDashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="flex-1">
        <Navbar />
        <div className="flex h-screen bg-blue-400">
          <Sidebar /> 
          <main className="p-6"><Routes>
              <Route path="/" element={<FinanceDashboard />} />
              <Route path="/finance" element={<FinanceDashboard />} />
              <Route path="/doctor" element={<DoctorDashboard />} />
              <Route path="/engagement" element={<EngagementDashboard />} />
              </Routes></main>
        </div>
      </div>
    </Router>
  );
}

export default App;
