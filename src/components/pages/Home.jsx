import React from "react";
import Footer from "../header&footer/Footer";
import Header from "../header&footer/Header";
import ContactUs from "../home/ContactUs";
import Projects from "../home/Projects";
import Services from "../home/Services";
import Showcase from "../home/Showcase";

const Home = () => {
   document.title = "New Style Website";
   return (
      <>
         <Header />
         <Showcase />
         <Services />
         <Projects />
         <ContactUs />
         <Footer />
      </>
   );
};

export default Home;
