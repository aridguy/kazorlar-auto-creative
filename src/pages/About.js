import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Product1 from "../assets/IMG_7870-1024x768.jpg";
import Footer from "../components/Footer";
import Aos from "aos";

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Duration of the animation (in milliseconds)
      once: true, // Whether animation should happen only once
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);
  // const brandName = "Kazorler Auto-Creative";

  return (
    <div>
      <Navbar />
      <div className="container-fluid mt-4 pt-5 about_hero text-white">
        <h1 data-aos="fade-right" className="about_hero_text">
          ABOUT US
        </h1>
        <p data-aos="fade-left" className="lead">
          Kazorler Auto-Creative
        </p>
      </div>
      <div className="container-fluid mt-5 pt-5">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-5">
                <div
                  data-aos="fade-right"
                  className="pt-5 box_about_bg p-5"
                  style={{ width: "100%", height: "100vh" }}
                >
                  <h2 className="red text-center">WHY US?</h2>
                  <p className="lead">
                    If you’re concerned about the interior of your car,
                    motorcycle or boat, we’d love to help you with that. With
                    over three decades of improving some of the north’s most
                    luxurious cars, boats and motorcycles we are the trusted
                    company to work on the best of the best. We have an
                    incredibly high level of workmanship and no matter how big
                    or small the job is, we will treat your pride and joy as if
                    it’s our very own with good old fashioned service, price and
                    quality of work.
                  </p>{" "}
                  <br />
                  <button className="bg-red border text-white btn">
                    Get a Quote
                  </button>
                </div>
              </div>
              <div className="col-md-7">
                <div data-aos="fade-left">
                  <img width="100%" src={Product1} alt="img_upjhols" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
