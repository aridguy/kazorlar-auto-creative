import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../App.css";

import Footer from "../components/Footer";
import Aos from "aos";
import { useNavigate } from "react-router-dom";
// import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import Marquee from "react-fast-marquee";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate("/");

  useEffect(() => {
    Aos.init({
      duration: 1000, // Duration of the animation (in milliseconds)
      once: true, // Whether animation should happen only once
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);


  //   {
  //     original: pics1,
  //     thumbnail: pics1,
  //   },
  //   {
  //     original: pics2,
  //     thumbnail: pics2,
  //   },
  //   {
  //     original: pics3,
  //     thumbnail: pics3,
  //   },
  //   {
  //     original: pics4,
  //     thumbnail: pics4,
  //   },
  //   {
  //     original: pics5,
  //     thumbnail: pics5,
  //   },
  //   {
  //     original: pics6,
  //     thumbnail: pics6,
  //   },
  //   {
  //     original: pics7,
  //     thumbnail: pics7,
  //   },
  //   {
  //     original: pics8,
  //     thumbnail: pics8,
  //   },
  //   {
  //     original: pics9,
  //     thumbnail: pics9,
  //   },
  //   {
  //     original: pics10,
  //     thumbnail: pics10,
  //   },
  //   {
  //     original: pics11,
  //     thumbnail: pics11,
  //   },
  // ];
  // const brandName = "Kazorler Auto-Creative";
  const [openRegUser, setOpenRegUser] = useState(false);
  useEffect(() => {
    // Check if the modal has already been shown
    const hasModalBeenShown = localStorage.getItem("hasModalBeenShown");

    if (!hasModalBeenShown) {
      // Set a timer to open the modal after 5 seconds
      const timer = setTimeout(() => {
        setOpenRegUser(true);
        // Set the flag in localStorage to indicate the modal has been shown
        localStorage.setItem("hasModalBeenShown", "true");
      }, 5000); // Opens modal after 5 seconds

      // Cleanup timer on component unmount
      return () => clearTimeout(timer);
    }
  }, []);
  const closePopModal = () => {
    setOpenRegUser(false);
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://sheetdb.io/api/v1/z21u1qydjrwpe", {
        data: formData,
      })
      .then((response) => {
        // console.log(response);
        setResponseMessage("Form submitted successfully!");
        localStorage.setItem("userName", formData.name);
        setFormData({ name: "", email: "" }); // Reset form fields
        setOpenRegUser(false);
        navigate("/about");
      })
      .catch((error) => {
        console.error("There was an error!", error);
        setResponseMessage("There was an error submitting the form.");
      });
  };

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
                      Crafting Excellence | With a decade of expertise in auto
                      upholstery, we transform interiors into masterpieces,
                      tailored to perfection for cars, boats, and motorcycles.
                    </p>
                    <p className="lead">
                      Precision & Passion | Our 10+ years of experience in auto
                      upholstery ensure exceptional results, elevating your
                      vehicle's comfort and style.
                    </p>
                    <p className="lead">
                      Upholstery Perfected | Leveraging over 12years of
                      expertise, we deliver bespoke solutions for cars, boats,
                      and motorcycles, blending quality and creativity.
                    </p>{" "}
                    <p className="lead">
                      Expert Touch | With a proven track record of 12+ years in
                      auto upholstery, we guarantee top-tier craftsmanship,
                      revitalizing your vehicle's interior.
                    </p>
                    <p className="lead">
                      Where Quality Meets Artistry | Our team of skilled
                      upholsterers, with over 12years of experience, bring your
                      car, boat, or motorcycle interior to life.
                    </p>
                    <p className="lead">
                      <i>Let us know what you need!</i>
                    </p>
                    <button
                      onClick={() => navigate("/contact")}
                      className="btn btn-secondary"
                    >
                      Contact us Today!
                    </button>
                  </div>
                </div>
                <div className="col-md-3"></div>
              </div>
              <div className="row mt-4">
                <div className="">
                 
                </div>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      }

      {
        // for user modal
        openRegUser && (
          <div className="reg_modal pt-5">
            <div className="container mt-1 pt-5">
              <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  <div className="reg_modal_form_bg p-5 mt-5">
                    <div className="row">
                      <div className="col-md-7">
                        <div>
                          <h5 className=" fw-5 text-white">
                            Subscribe to my newsletter and never miss my
                            upcoming articles || continue on our platform as a
                            guest
                          </h5>
                          <button
                            onClick={closePopModal}
                            className="btn btn-info"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div>
                          <form onSubmit={handleSubmit}>
                            <p>
                              <input
                                className="form-control"
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                              />
                            </p>
                            <p>
                              <input
                                className="form-control"
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                              />
                            </p>
                            <button
                              type="submit"
                              className="btn btn-success btn-block"
                            >
                              Continue
                            </button>
                            <Marquee>
                              <sup className="text-white">
                                ✌🤞🙌 Please note: Kazorler Auto-Creative does
                                not collect or store your personal information,
                                and we will never ask for your credit card,
                                debit card, or banking details.
                              </sup>
                            </Marquee>
                            {responseMessage && (
                              <sup className="text-white">
                                {responseMessage}
                              </sup>
                            )}
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3"></div>
              </div>
            </div>
          </div>
        )
      }

      <Footer />
    </div>
  );
};
// reg_modal_form_bg
export default Home;
