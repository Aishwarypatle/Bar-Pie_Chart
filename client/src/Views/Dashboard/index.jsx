import React from "react";
import Header from "./header";
import { useLocation } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Profile from "./Components/Profile";

const MainDash = () => {
    const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";
  return (
    <div className='width-full'>
      <Header />

      <div>
        {isDashboard ? <Dashboard /> : <Profile />}
      </div>

    </div>
  );
};

export default MainDash;
