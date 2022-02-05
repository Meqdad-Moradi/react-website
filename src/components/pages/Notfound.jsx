import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const Notfound = () => {
   return (
      <div className="not-found">
         <div className="container">
            <h1>404</h1>
            <h2>Oops! Sorry your page was not found! </h2>
            <Link to="/">
               home page <FaChevronRight className="arrow" />
            </Link>
         </div>
      </div>
   );
};

export default Notfound;
