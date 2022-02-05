import React, { useRef } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Showcase = () => {
   const slideRef = useRef(null);

   const settings = {
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 8000,
      arrows: false,
      touchThreshold: 15,
   };

   return (
      <div className="showcase">
         <div
            className="slide-control-btn left"
            onClick={() => slideRef.current.slickPrev()}
         >
            <FaChevronLeft />
         </div>
         <div
            className="slide-control-btn right"
            onClick={() => slideRef.current.slickNext()}
         >
            <FaChevronRight />
         </div>

         <Slider {...settings} ref={slideRef}>
            <div className="slide-container">
               <div
                  className="slide"
                  style={{
                     background:
                        "url(https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80) no-repeat center / cover",
                     height: `calc(${100}vh - ${80}px)`,
                  }}
               >
                  <div className="content">
                     <h1>react slick slider one</h1>
                     <p>Lorem ipsum dolor sit amet consectetur.</p>
                     <a className="btn" href="#services">
                        show more
                     </a>
                  </div>
               </div>
            </div>
            <div className="slide-container">
               <div
                  className="slide"
                  style={{
                     background:
                        "url(https://images.unsplash.com/photo-1643386777909-04835ade3530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80) no-repeat center / cover",
                     height: `calc(${100}vh - ${80}px)`,
                  }}
               >
                  <div className="content">
                     <h1>react slick slider two</h1>
                     <p>
                        Lorem ipsum dolor sit amet consequuntur voluptatibus.
                     </p>
                     <a className="btn" href="#services">
                        show more
                     </a>
                  </div>
               </div>
            </div>
            <div className="slide-container">
               <div
                  className="slide"
                  style={{
                     background:
                        "url(https://images.unsplash.com/photo-1612820885398-03b96dab50a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80) no-repeat center / cover",
                     height: `calc(${100}vh - ${80}px)`,
                  }}
               >
                  <div className="content">
                     <h1>react slick slider three</h1>
                     <p>Praesentium eius consequuntur voluptatibus.</p>
                     <a className="btn" href="#services">
                        show more
                     </a>
                  </div>
               </div>
            </div>
            <div className="slide-container">
               <div
                  className="slide"
                  style={{
                     background:
                        "url(https://images.unsplash.com/photo-1643306965254-517e3ddb164d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80) no-repeat center / cover",
                     height: `calc(${100}vh - ${80}px)`,
                  }}
               >
                  <div className="content">
                     <h1>react slick slider four</h1>
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     </p>
                     <a className="btn" href="#services">
                        show more
                     </a>
                  </div>
               </div>
            </div>
         </Slider>
      </div>
   );
};

export default Showcase;
