import React from "react";
import SectionTitle from "../global/SectionTitle";
import { FaFacebookSquare, FaLinkedin, FaYoutube } from "react-icons/fa";

import office from "../../assets/images/office.jpg";
import director from "../../assets/images/director.jpg";
import manager from "../../assets/images/manager.jpg";

const ContactUs = () => {
   return (
      <>
         <section id="contact-us">
            <div className="container">
               <SectionTitle title="Contact us" subTitle="" />
               <div className="contact-content">
                  <article className="personal-card">
                     <div className="avatar">
                        <img src={office} alt="office" />
                     </div>
                     <div className="content">
                        <h2>Masouma Karimi</h2>
                        <h4>Office</h4>
                        <p>+43 660 338 00 29</p>
                        <p>office@gmail.com</p>
                     </div>
                  </article>

                  <article className="personal-card">
                     <div className="avatar">
                        <img src={director} alt="director" />
                     </div>
                     <div className="content">
                        <h2>yalda rahimi</h2>
                        <h4>Director</h4>
                        <p>+43 660 338 00 29</p>
                        <p>director@gmail.com</p>
                     </div>
                  </article>

                  <article className="personal-card">
                     <div className="avatar">
                        <img src={manager} alt="office" />
                     </div>
                     <div className="content">
                        <h2>Farzana haidary</h2>
                        <h4>manager</h4>
                        <p>+43 660 338 00 29</p>
                        <p>manager@gmail.com</p>
                     </div>
                  </article>
               </div>
            </div>
         </section>

         <section className="contact-us-sec">
            <div className="container">
               <div className="content">
                  <h1>Walk with us on the new style web development</h1>
                  <p>
                     Ready for us? Then contact us for a non-binding
                     consultation or use our call-back function. If the holzweg
                     sounds like a dream job guarantee, then take a look at the
                     job offers or visit us on social media!
                  </p>
               </div>

               <div className="socials">
                  <a href="http://www.facebook.com/" target="_blank">
                     <FaFacebookSquare />
                  </a>
                  <a href="http://www.linkedin.com/" target="_blank">
                     <FaLinkedin />
                  </a>
                  <a href="http://www.youtube.com/" target="_blank">
                     <FaYoutube />
                  </a>
               </div>
            </div>
         </section>
      </>
   );
};

export default ContactUs;
