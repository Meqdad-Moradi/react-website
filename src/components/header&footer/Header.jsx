import React, { useState } from "react";
import Logo from "../global/Logo";
import Nav from "../global/Nav";

const Header = () => {
   const [open, setOpen] = useState(false);
   const toggleNav = () => {
      setOpen(!open);
   };

   return (
      <header className="header">
         <div className="container">
            <Logo />
            <Nav open={open} onToggle={toggleNav} />
            <div
               className={open ? "hamburger active" : "hamburger"}
               onClick={toggleNav}
            >
               <span></span>
               <span></span>
               <span></span>
            </div>
         </div>
      </header>
   );
};

export default Header;
