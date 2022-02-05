import React from "react";

const SectionTitle = ({ title, subTitle }) => {
   return (
      <div className="section-title">
         <h1>{title}</h1>
         <p>{subTitle}</p>
      </div>
   );
};

export default SectionTitle;
