import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({ open, onToggle }) => {
   return (
      <nav className={open ? "nav active" : "nav"} onClick={() => onToggle()}>
         <ul className="nav-list">
            <li>
               <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
               <NavLink to={"/projects"}>Projects</NavLink>
            </li>
            <li>
               <NavLink to={"/about"}>About</NavLink>
            </li>
            <li>
               <NavLink to={"/register"}>Register</NavLink>
            </li>
         </ul>
      </nav>
   );
};

export default Nav;
