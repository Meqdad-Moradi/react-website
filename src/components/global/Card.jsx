import React from "react";

const Card = ({ icon, title, desc }) => {
   return (
      <div className="card">
         <div className="card-header">
            <div className="card-icon">{icon}</div>
         </div>
         <div className="card-footer">
            <h2 className="title">{title}</h2>
            <p>{desc}</p>
         </div>
      </div>
   );
};

export default Card;
