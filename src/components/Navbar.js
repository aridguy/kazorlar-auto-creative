// src/Navbar.js
import React, { useEffect, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

import Logo from "../assets/logo.jpg";
import Swal from "sweetalert2";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles
import { useForm } from "@formspree/react";

const Navbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation (in milliseconds)
      once: true, // Whether animation should happen only once
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);
  const navigate = useNavigate("/");
  const [isOpen, setIsOpen] = useState(false);
  const [appointment, setAppointment] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const savedName = localStorage.getItem("userName");
  const [visitorName, setVisitorName] = useState(savedName);
  useEffect(() => {
    // Load the name from localStorage when the component mounts
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setVisitorName(storedName);
    }
  }, []);

  const InProgress = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Our blog is under construction!",
      footer: '<a href="/contact">How soon will this go live?</a>',
    });
  };

  const openAppointment = () => setAppointment((prevState) => !prevState);

  const [state, handleSubmit] = useForm("mqazjznb");

  if (state.succeeded) {
    Swal.fire({
      title: "Successful?",
      text: "Appointment has been booked?",
      icon: "question",
    }).then((result) => {
      setAppointment(false);
    });
  }

  return (
    <div>
      <nav className="navbar">
        <div
          className="navbar-container py-2 px-2"
          style={{ borderRight: "2px solid white" }}
        >
          <img
            onClick={() => navigate("/")}
            className="cursor"
            width={50}
            src={Logo}
            alt="logo"
          />
          <button className="navbar-toggle" onClick={toggleNavbar}>
            ☰
          </button>{" "}
          &nbsp;&nbsp;
          <ul className={`navbar-menu lead ${isOpen ? "open" : ""}`}>
            <li className="navbar-item">
              <p className="cursor" onClick={() => navigate("/")}>
                Home
              </p>
            </li>
            <li className="navbar-item">
              <p className="cursor" onClick={() => navigate("/projects")}>
                Projects
              </p>
            </li>
            <li className="navbar-item">
              <p className="cursor" onClick={() => navigate("/about")}>
                About
              </p>
            </li>
            <li className="navbar-item">
              <p className="cursor" onClick={() => navigate("/shop")}>
                Work Shop
              </p>
            </li>
            <li className="navbar-item">
              <p className="cursor" onClick={InProgress}>
                Blog
              </p>
            </li>
            <li className="navbar-item">
              <p className="cursor" onClick={() => openAppointment(true)}>
                Appointment
              </p>
            </li>
            <li className="navbar-item">
              <p className="cursor" onClick={() => navigate("/contact")}>
                Contact
              </p>
            </li>
          </ul>
        </div>
        <div>
          <img
            src="https://avatar.iran.liara.run/public"
            className="rounded-circle cursor"
            height="25"
            alt="visitor icon_avater"
            loading="lazy"
          />{" "}
          &nbsp;
          <small>
            Welcome, <b className="text-info">{visitorName} 😎</b>
           
          </small>
        </div>
      </nav>
      {appointment && (
        <div className="appointment_modal_parent pt-5">
          <div data-aos="fade-up" className="container mt-1 pt-5">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <div className="appointment_form_bg p-3">
                  <h3 className="text-center text-black">
                    Book an Appointment!
                  </h3>
                  <hr />
                  <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                      <form onSubmit={handleSubmit}>
                        <p>
                          <sup>Name</sup>
                          <input
                            type="text"
                            placeholder="name"
                            name="name"
                            className="form-control"
                            required
                          />
                        </p>
                        <p>
                          <sup>Email</sup>
                          <input
                            type="email"
                            placeholder="email"
                            name="email"
                            className="form-control"
                            required
                          />
                        </p>
                        <p>
                          <sup>Phone</sup>
                          <input
                            className="form-control"
                            type="number"
                            name="number"
                            placeholder="phone number"
                            required
                          />
                        </p>
                        <p>
                          <sup>Choose Date</sup>
                          <input
                            className="form-control"
                            type="date"
                            name="date"
                            required
                          />
                        </p>
                        <p>
                          <sup>Choose time</sup>
                          <input
                            className="form-control"
                            type="time"
                            name="time"
                            required
                          />
                        </p>
                        <p>
                          <sup>Choose Service Needed</sup>
                          <select
                            className="form-control"
                            name="service"
                            required
                          >
                            <option value="" disabled selected>
                              Choose
                            </option>
                            <optgroup label="Automotive Services">
                              <option value="headliners">Headliners</option>
                              <option value="vinyl-tops">Vinyl Tops</option>
                              <option value="convertible-tops">
                                Convertible Tops
                              </option>
                              <option value="car-upholstery-revamping">
                                Car Upholstery Revamping
                              </option>
                              <option value="headlamp-polishing">
                                Headlamp Polishing
                              </option>
                              <option value="auto-detailing">
                                Auto Detailing
                              </option>
                            </optgroup>
                            <optgroup label="Interior Repair & Restoration">
                              <option value="vinyl-leather-repairs-dyeing">
                                Vinyl & Leather Repairs & Dyeing
                              </option>
                              <option value="dashboard-repair">
                                Dashboard Repair
                              </option>
                              <option value="carpets-rugs">Carpets/Rugs</option>
                            </optgroup>
                            <optgroup label="Furniture Upholstery">
                              <option value="house-furniture">
                                House Furniture
                              </option>
                              <option value="house-chairs">House Chairs</option>
                              <option value="office-chairs">
                                Office Chairs
                              </option>
                            </optgroup>
                            <optgroup label="Specialty Services">
                              <option value="boat-cushions">
                                Boat Cushions
                              </option>
                              <option value="recreational-vehicles">
                                Recreational Vehicles
                              </option>
                              <option value="motorcycle-seats">
                                Motorcycle Seats
                              </option>
                              <option value="heavy-equipment-seats">
                                Heavy Equipment Seats
                              </option>
                            </optgroup>
                          </select>
                        </p>
                        <p>
                          <sup>Description</sup>
                          <textarea
                            className="form-control"
                            name="Service-Info"
                            required
                            placeholder="additional info"
                          ></textarea>
                        </p>
                        <p>
                          <sup>Address</sup>
                          <input
                            type="address"
                            placeholder="Address"
                            name="address"
                            className="form-control"
                          />
                        </p>
                        <p>
                          <sup>Comment or special request</sup>
                          <textarea
                            className="form-control"
                            name="special-request"
                            placeholder="special request"
                          ></textarea>
                        </p>
                        <p>
                          <small className="lead">How to reach me!</small>
                        </p>
                        <p>
                          <input type="checkbox" name="throughPhone" />
                          &nbsp;&nbsp;
                          <small>Phone</small> &nbsp;&nbsp;
                          <input type="checkbox" name="throughEmail" />
                          &nbsp;&nbsp;
                          <small>Email Address</small>
                        </p>
                        <Marquee>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <p className="lead">
                            Note that Kazorler Auto-Creative doesn't not save
                            your personal information nor ask for your credit or
                            debit card or banking information
                          </p>
                        </Marquee>
                        <button
                          className="border btn btn-info btn-block block"
                          type="submit"
                          disabled={state.submitting}
                        >
                          Book Now!
                        </button>
                      </form>
                    </div>
                    <div className="col-md-2"></div>
                  </div>
                </div>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
