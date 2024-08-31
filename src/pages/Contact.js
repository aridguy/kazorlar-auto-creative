import React from "react";
import Navbar from "../components/Navbar";
import ContactIcon from "../assets/contact_icon.svg";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="text-black">Contact us</h2> <br />
            <small className="text-black">
              Do you have any questions? Please do not hesitate to contact us{" "}
              <br />
              directly. Our team will come back to you within a matter of hours
              to help you.
            </small>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6 ">
            <div className="d-flex ">
              <h2
                style={{
                  fontSize: "5em",
                  fontWeight: "800",
                  fontStyle: "italic",
                }}
                className="text-info"
              >
                Want to <br /> Get in <br /> touch?
              </h2>
              <img width={150} src={ContactIcon} alt="contcat_icon" />
            </div>
            <p className="lead">
              I am not open to a new role at the moment, Please,reach out if you
              will like to view any of these projects.
            </p>
          </div>
          <div className="col-md-6">
            <div className="form_place ">
              <form className="">
                <div>
                  <input
                    type="text"
                    name="Name"
                    placeholder="your name"
                    required
                    className="contact_input"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="E-mail"
                    placeholder="email"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="Subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="Message"
                    placeholder="Message"
                    required
                  />
                </div>
                <div>
                  <button class="sendBtn float-right mt-5">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
