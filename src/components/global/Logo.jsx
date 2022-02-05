import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
   return (
      <div className="logo">
         <Link to="/">
            <h1>logo</h1>
            <p>slogan goes here</p>
         </Link>
      </div>
   );
};

export default Logo;
