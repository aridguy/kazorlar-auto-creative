import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import "../App.css";

import Footer from "../components/Footer";
import Aos from "aos";
import { useNavigate } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import pics1 from "../assets/img/c.jpg"
import pics2 from "../assets/img/e.jpg"
import pics4 from "../assets/img/i.jpg"
import pics3 from "../assets/img/ii.jpg"
import pics5 from "../assets/img/j.jpg"
import pics6 from "../assets/img/k.jpg"
import pics7 from "../assets/img/l.jpg"
import pics8 from "../assets/img/m.jpg"
import pics9 from "../assets/img/n.jpg"
import pics10 from "../assets/img/o.jpg"
import pics11 from "../assets/img/p.jpg"

const Home = () => {
  const navigate = useNavigate("/");
  useEffect(() => {
    Aos.init({
      duration: 1000, // Duration of the animation (in milliseconds)
      once: true, // Whether animation should happen only once
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  const images = [
    {
      original: pics1,
      thumbnail: pics1,
    },
    {
      original: pics2,
      thumbnail: pics2,
    },
    {
      original: pics3,
      thumbnail: pics3,
    },
    {
      original: pics4,
      thumbnail: pics4,
    },
    {
      original: pics5,
      thumbnail: pics5,
    },
    {
      original: pics6,
      thumbnail: pics6,
    },
    {
      original: pics7,
      thumbnail: pics7,
    },
    {
      original: pics8,
      thumbnail: pics8,
    },
    {
      original: pics9,
      thumbnail: pics9,
    },
    {
      original: pics10,
      thumbnail: pics10,
    },
    {
      original: pics11,
      thumbnail: pics11,
    },
    
  ];
  const brandName = "Kazorler Auto-Creative";
  return (
    <div>
      <Navbar />

      {
        // HERO SECTION OF THE APPLICATION
        <div>
          <div className="container-fluid hero-bg mt-5 pt-2">
            <div className="row mt-4">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-1"></div>
                  <div className="col-md-8">
                    <div className="mt-2">
                      <h1
                        data-aos="fade-right"
                        className="text-uppercase text-white hero_text"
                      >
                        Quality & <br />
                        Experience
                      </h1>
                      <sup
                        data-aos="fade-right"
                        data-aos-delay="1000"
                        className="text-white lead"
                      >
                        With over 10 years experience in auto upholstery, <br />{" "}
                        we will create, repair or upgrade your car, boat or{" "}
                        <br /> motorcycle upholstery to be it’s very best.
                      </sup>
                    </div>
                  </div>
                  <div className="col-md-3"></div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-right"
            style={{ width: "100%", background: "black", height: "2em" }}
            className="container-fluid extra"
          >
            <div className="container ">
              <a
                href="mailto:kazorlerauto-creative.com.ng"
                style={{ fontSize: "14px" }}
                className="mt-1 text-white cursor"
              >
                info@kazorlerauto-creative.com.ng
              </a>
              &nbsp;&nbsp;&nbsp;
              <a
                href="mailto:info@kazorlerauto-creative.com.ng"
                style={{ fontSize: "14px" }}
                className="mt-1 text-white cursor"
              >
                info@kazorlerauto-creative.com.ng
              </a>
              <a
                href="tel:+2349075320025"
                style={{ fontSize: "14px" }}
                className="mt-1 float-end text-white"
              >
                Tel: +234 907 5320 025
              </a>
            </div>
          </div>
        </div>
      }
      {
        // WHY US?
        <div data-aos="fae-right" className="container-fluid">
          <div className="row mt-5">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-9">
                  <div>
                    <h3 data-aos="fade-right">
                      Welcome to{" "}
                      <span className="text-info">Kazorler Auto-Creative</span>
                    </h3>
                  </div>
                  <div className="" data-aos="fade-left">
                    <p className="lead">
                      {brandName} is your online resource for car upholstering.
                      Bring us your car to re-upholster or pick what you want
                      and we'll ship it to you.
                    </p>
                    <p className="lead">
                      At {brandName}, we will re-upholster your vehicle's whole
                      interior or we will sell you everything you need to do it
                      yourself. We'll provide the seat covers, door panels,
                      headliners, carpets and more!
                    </p>
                    <p className="lead">
                      Our styles include original and custom designs. We also
                      re-upholster boats, RV's, restaurant & and bar equipment,
                      fitness equipment, wave runner seats, snowmobile and
                      tractor seats, and furniture too.
                    </p>
                    <p className="lead">
                      <i>Let us know what you need!</i>
                    </p>
                    <button
                      onClick={() => navigate("/contact")}
                      className="btn btn-secondary"
                    >
                      Contact us!
                    </button>
                  </div>
                  
                </div>
                <div className="col-md-3"></div>
              </div>
              <div className="row mt-4">
                <div className="">
                  <ImageGallery items={images} />;
                </div>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      }

      <Footer />
    </div>
  );
};

export default Home;
