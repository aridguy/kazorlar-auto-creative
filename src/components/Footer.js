import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="container-fluid text-center bg-black text-white mt-5 pt-5 pb-4 ">
        <sup>
          {" "}
          https://kazorlerauto-creative.com.ng/© 2024 <br /> Custom Car
          Upholstery and Seat Covers, Custom Door Panels, and More! <br />{" "}
          Website design and development by <br />
          <a className="text-white" href="mailto:codetechs247@gmail.com">
            codetechs247@gmail.com
          </a>
        </sup>
        <br />
        <i className="text-white fab fa-facebook mx-3 cursor"></i>
        <i className="text-white fab fa-twitter-square mx-3 cursor"></i>
        <i className="text-white fab fa-instagram mx-3 cursor"></i>
        <i className="text-white fab fa-tiktok mx-3 cursor"></i>
       
      </div>
    </div>
  );
};

export default Footer;
