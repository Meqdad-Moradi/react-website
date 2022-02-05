import React from "react";
import { Link } from "react-router-dom";

const Project = ({ bg, customerTitle, projectName, projectDesc, bgColor }) => {
   return (
      <div className="projects-container">
         <div
            className="project-cover"
            style={{
               background: `url(${bg})no-repeat center top / cover`,
            }}
         >
            <div className="project-content">
               <div className="project-header">
                  <h2 className="title">
                     <span className="title-headline">Customer:</span>
                     {customerTitle}
                  </h2>
                  <h2 className="title">
                     <span className="title-headline">Project:</span>
                     {projectName}
                  </h2>
                  <p className="project-desc">{projectDesc}</p>
               </div>

               <div className="project-footer">
                  <div className="btns">
                     <a href="#" target="_blank" className="btn btn-secondary">
                        Website
                     </a>
                     <Link
                        to="details"
                        className="btn"
                        style={{ backgroundColor: bgColor }}
                     >
                        details
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Project;
