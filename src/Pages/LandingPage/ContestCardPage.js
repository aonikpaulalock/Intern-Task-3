import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
const ContestCardPage = () => {
  return (
    <div className="dynamic-container">
      <nav className="contest-button-container">
        <NavLink  className={({ isActive }) => (isActive ? "active-class" : "all-button")} to="/contest">All</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active-class" : "all-button")} to="/contest/nature">Nature</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active-class" : "all-button")} to="/contest/hills">Hills</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active-class" : "all-button")} to="/contest/model">Model</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active-class" : "all-button")} to="/contest/product">Product</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active-class" : "all-button")} to="/contest/3d">3d</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active-class" : "all-button")} to="/contest/fashion">Fashion</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active-class" : "all-button")} to="/contest/others">Others</NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ContestCardPage;