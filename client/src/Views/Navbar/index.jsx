import React from "react";
import { NavLink } from "react-router-dom";
import { Dashboard,Person } from "@mui/icons-material";
const Nav = () => {
  return (
    <div className="flex">
      <div className="bg-[#2C7865] w-full h-screen text-white">
        <div className="  px-6  py-2  h-[50px]">
          <p className="text-sm font-bold  text-left ">Ecommify</p>
        </div>

        <ul className="flex flex-col p-4 justify-between gap-5 text-left mt-4 ">
          <li className='text-sm font-medium'>
            <NavLink to="/dashboard" activeClassName="font-bold">
              <span className='flex gap-2 '>
              <Dashboard/> Dashboard
              </span>
              
            </NavLink>
          </li>
          
          <li className='text-sm font-medium '>
            <NavLink to="/account" activeClassName="font-bold">
              <span className='flex gap-2'>
              <Person color="blue"  /> My Account
              </span>
             
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;



