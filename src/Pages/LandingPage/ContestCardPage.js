import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
const ContestCardPage = () => {
  return (
    <div className="dynamic-container">
      <nav className="contest-button-container">
        <NavLink  className={({ isActive }) => (isActive ? "active-class" : "all-button")} to="/home/all">All</NavLink>

        <NavLink className={({ isActive }) => (isActive ? "active-class" : "all-button")} to="/home/nature">Nature</NavLink>

        <NavLink className={({ isActive }) => (isActive ? "active-class" : "all-button")} to="/home/hills">Hills</NavLink>

        <NavLink className={({ isActive }) => (isActive ? "active-class" : "all-button")} to="/home/model">Model</NavLink>

        <NavLink className={({ isActive }) => (isActive ? "active-class" : "all-button")} to="/home/product">Product</NavLink>

        <NavLink className={({ isActive }) => (isActive ? "active-class" : "all-button")} to="/home/3d">3d</NavLink>

        <NavLink className={({ isActive }) => (isActive ? "active-class" : "all-button")} to="/home/fashion">Fashion</NavLink>

        <NavLink className={({ isActive }) => (isActive ? "active-class" : "all-button")} to="/home/others">Others</NavLink>
        
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ContestCardPage;