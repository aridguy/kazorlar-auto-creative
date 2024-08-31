// src/Navbar.js
import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { TfiPowerOff } from "react-icons/tfi";
import Logo from "../assets/logo.jpg";
import Swal from "sweetalert2";

const Navbar = () => {
  const navigate = useNavigate("/");
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const [visitorName] = useState("Idowu Ariyo");
  const InProgress = () =>{
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Our blog is under construction!",
      footer: '<a href="/contact">How soon will this go live?</a>'
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
              <p className="cursor" onClick={() => navigate("/appointment")}>
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
            Welcome Back, <b className="text-info">{visitorName}</b> &nbsp;
            <TfiPowerOff className="cursor" />
          </small>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
