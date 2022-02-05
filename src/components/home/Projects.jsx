import React from "react";
import SectionTitle from "../global/SectionTitle";
import Project from "../projects/Project";

import project_1 from "../../assets/images/project-1.jpg";
import project_2 from "../../assets/images/project-2.jpg";
import project_3 from "../../assets/images/project-3.jpg";
import project_4 from "../../assets/images/project-4.jpg";
import project_5 from "../../assets/images/project-5.jpg";

const Projects = () => {
   return (
      <section id="projects">
         <div className="container">
            <SectionTitle
               title="We love our projects and also our customers"
               subTitle="we provide complete solution for your startup, agency, brand,
            company etc. We have more than 10k+ satisfied clients. We are the
            best branding solution in Innsbruck."
            />
            <Project
               bg={project_1}
               customerTitle="EGLO Leuchten"
               projectName="PIM-System"
               projectDesc="The diocese of Innsbruck is one of our favorite regular customers. They have trusted in the design and implementation of holzweg GmbH since 2003. This time the design has been slightly revised and a few new features have been added."
               bgColor="#379b88"
            />
            <Project
               bg={project_2}
               customerTitle="Wirtschaftskammer Tirol"
               projectName="Digitale Lernwelt für Lehrlinge"
               projectDesc="In close cooperation with the customer, a tool for conducting workshops including a quiz was designed and implemented as a web app. Question the Internet and get helpful information for your own application."
               bgColor="#d58c0b"
            />
            <Project
               bg={project_3}
               customerTitle="Voltadol Portal"
               projectName="Kundenorientierte Micro-Site"
               projectDesc="For organizations that want to streamline their business processes and facilitate communication and access to information within the company, there is no better option than implementing an intranet."
               bgColor="#1770af"
            />
            <Project
               bg={project_4}
               customerTitle="Morf"
               projectName="Entwicklung Web-App"
               projectDesc="The Klepsch Group's multi-portal system underwent a soft redesign in order to follow the state-of-the-art of the web. The redesign involved redesigning all content elements to make them more reader-friendly."
               bgColor="#1770af"
            />
            <Project
               bg={project_5}
               customerTitle="Hall.AG"
               projectName="Soft-Relaunch Website"
               projectDesc="Together with our long-standing customer EGLO, an internal product information management (PIM) system for over 240,000 products was created with the help of Akeneo."
               bgColor="#a5419d"
            />
         </div>
      </section>
   );
};

export default Projects;
