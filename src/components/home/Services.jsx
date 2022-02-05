import React from "react";
import { FaAnchor, FaDigitalOcean, FaGitkraken } from "react-icons/fa";
import Card from "../global/Card";
import SectionTitle from "../global/SectionTitle";

const Services = () => {
   return (
      <section id="services">
         <div className="container">
            <SectionTitle
               title="our services"
               subTitle="we provide complete solution for your startup, agency, brand,
            company etc. We have more than 10k+ satisfied clients. We are the
            best branding solution in Innsbruck."
            />

            <Card
               icon={<FaDigitalOcean />}
               title="Business planning"
               desc="We provide complete business plan for your brand to achieve company target, goals etc."
            />
            <Card
               icon={<FaAnchor />}
               title="Marketing strategy"
               desc="marketing is very important things in terms of growing your company."
            />
            <Card
               icon={<FaGitkraken />}
               title="Branding plans"
               desc="as your brand category we will give the branding service you wil get the best service in the Austria."
            />
         </div>
      </section>
   );
};

export default Services;
