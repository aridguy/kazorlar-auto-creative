import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import Swal from "sweetalert2";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import "aos/dist/aos.css";
import { useForm } from "@formspree/react";
import "./Navbar.css"; // Unique CSS for navbar only

const Navbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [appointment, setAppointment] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const savedName = localStorage.getItem("userName");
  const [visitorName, setVisitorName] = useState(savedName);

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setVisitorName(storedName);
    }

    // Handle scroll effect
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const goToBlog = () => {
  //   navigate("/blog");
  // };

  const openAppointment = () => setAppointment(true);
  const closeAppointment = () => setAppointment(false);

  const [state, handleSubmit] = useForm("mqazjznb");

  if (state.succeeded) {
    Swal.fire({
      title: "Appointment Booked!",
      text: "We'll contact you shortly to confirm.",
      icon: "success",
    }).then((result) => {
      setAppointment(false);
    });
  }

  return (
    <div className="navbar-wrapper">
      <nav className={`navbar-custom ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container-custom">
          <div className="navbar-logo" onClick={() => navigate("/")}>
            <img src={Logo} alt="Kazorler Auto-Creative" />
            <span className="logo-text">Kazorler Auto-Creative</span>
          </div>

          <button className="navbar-toggle-custom" onClick={() => setIsOpen(!isOpen)}>
            <span className="hamburger-icon">☰</span>
          </button>

          <ul className={`navbar-menu-custom ${isOpen ? "open" : ""}`}>
            <li className="navbar-item-custom text-white cursor">
              <span onClick={() => navigate("/")}>Home</span>
            </li>
            <li className="navbar-item-custom text-white cursor">
              <span onClick={() => navigate("/projects")}>Projects</span>
            </li>
            <li className="navbar-item-custom text-white cursor">
              <span onClick={() => navigate("/about")}>About</span>
            </li>
            <li className="navbar-item-custom text-white cursor">
              <span onClick={() => navigate("/shop")}>Shop</span>
            </li>
            <li className="navbar-item-custom text-white cursor">
              <span onClick={() => navigate("/gallery")}>Gallery</span>
            </li>
            {/* <li className="navbar-item-custom text-white cursor">
              <span onClick={goToBlog}>Blog</span>
            </li> */}
            <li className="navbar-item-custom text-white cursor">
              <span onClick={openAppointment}>Appointment</span>
            </li>
            <li className="navbar-item-custom text-white cursor">
              <span onClick={() => navigate("/contact")}>Contact</span>
            </li>
          </ul>

          <div className="navbar-user">
            <div className="user-avatar">
              {/* <img
                src="https://avatar.iran.liara.run/public"
                alt="avatar"
              /> */}
            </div>
            <div className="user-info">
              <span className="welcome-text">Welcome,</span>
              <span className="user-name">{visitorName || "Guest"} 😎</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Appointment Modal */}
      {appointment && (
        <div className="appointment-modal-overlay" onClick={closeAppointment}>
          <div className="appointment-modal-container" data-aos="fade-up" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeAppointment}>×</button>
            
            <div className="appointment-form-wrapper">
              <h2 className="appointment-title">Book an Appointment</h2>
              <p className="appointment-subtitle">We'll get back to you within 24 hours</p>
              
              <form onSubmit={handleSubmit} className="appointment-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" name="name" placeholder="John Doe" required />
                  </div>
                  
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" name="email" placeholder="john@example.com" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input type="tel" name="number" placeholder="(555) 123-4567" required />
                  </div>
                  
                  <div className="form-group">
                    <label>Address</label>
                    <input type="text" name="address" placeholder="Your location" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Preferred Date *</label>
                    <input type="date" name="date" required />
                  </div>
                  
                  <div className="form-group">
                    <label>Preferred Time *</label>
                    <input type="time" name="time" required />
                  </div>
                </div>

                <div className="form-group">
                  <label>Service Needed *</label>
                  <select className="text-black" name="service" required>
                    <option value="" disabled selected>Select a service</option>
                    <optgroup label="Automotive Services">
                      <option value="headliners">Headliners</option>
                      <option value="vinyl-tops">Vinyl Tops</option>
                      <option value="convertible-tops">Convertible Tops</option>
                      <option value="car-upholstery-revamping">Car Upholstery Revamping</option>
                      <option value="headlamp-polishing">Headlamp Polishing</option>
                      <option value="auto-detailing">Auto Detailing</option>
                    </optgroup>
                    <optgroup label="Interior Repair & Restoration">
                      <option value="vinyl-leather-repairs-dyeing">Vinyl & Leather Repairs & Dyeing</option>
                      <option value="dashboard-repair">Dashboard Repair</option>
                      <option value="carpets-rugs">Carpets/Rugs</option>
                    </optgroup>
                    <optgroup label="Furniture Upholstery">
                      <option value="house-furniture">House Furniture</option>
                      <option value="house-chairs">House Chairs</option>
                      <option value="office-chairs">Office Chairs</option>
                    </optgroup>
                    <optgroup label="Specialty Services">
                      <option value="boat-cushions">Boat Cushions</option>
                      <option value="recreational-vehicles">Recreational Vehicles</option>
                      <option value="motorcycle-seats">Motorcycle Seats</option>
                      <option value="heavy-equipment-seats">Heavy Equipment Seats</option>
                    </optgroup>
                  </select>
                </div>

                <div className="form-group">
                  <label>Description</label>
                  <textarea name="Service-Info" placeholder="Tell us about your project..." rows="3"></textarea>
                </div>

                <div className="form-group">
                  <label>Special Request</label>
                  <textarea name="special-request" placeholder="Any special requests or notes..." rows="2"></textarea>
                </div>

                <div className="form-group">
                  <label>Preferred Contact Method</label>
                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input type="checkbox" name="throughPhone" /> Phone
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" name="throughEmail" /> Email
                    </label>
                  </div>
                </div>

                <div className="form-notice">
                  <Marquee pauseOnHover gradient={false} speed={30}>
                    <span className="notice-text">
                      ⚠️ Note: Kazorler Auto-Creative does not save your personal information nor ask for credit/debit card or banking information
                    </span>
                  </Marquee>
                </div>

                <button type="submit" className="submit-btn" disabled={state.submitting}>
                  {state.submitting ? "Booking..." : "Book Appointment"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;