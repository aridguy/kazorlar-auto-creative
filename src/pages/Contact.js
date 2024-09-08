import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import ContactIcon from "../assets/contact_icon.svg";
import Footer from "../components/Footer";
import { useForm, ValidationError } from "@formspree/react";
import Swal from "sweetalert2";
import Aos from "aos";

const Contact = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Duration of the animation (in milliseconds)
      once: true, // Whether animation should happen only once
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);
  const [state, handleSubmit] = useForm("mqazjznb");
  if (state.succeeded) {
    Swal.fire({
      title: "Successful?",
      text: "Message has been delivered!",
      icon: "success",
    });
  }
  return (
    <div>
      <Navbar />
      <div className="container mt-5 pt-5">
        <div data-aos="fade-right" className="row">
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
          <div
            data-aos="fade-right"
            data-aos-delay="1000"
            className="col-md-6 "
          >
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
          <div
            data-aos="fade-right"
            data-aos-delay="81200"
            className="col-md-6"
          >
            <div className="form_place ">
              <form className="" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="Name"
                    placeholder="your name"
                    required
                    className="contact_input"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="E-mail"
                    placeholder="email"
                    required
                    id="email"
                    className="contact_input"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="Subject"
                    placeholder="Subject"
                    required
                    className="contact_input"
                    id="subject"
                  />
                  <ValidationError
                    prefix="Subject"
                    field="subject"
                    errors={state.errors}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="message"
                    name="Message"
                    placeholder="Message"
                    required
                    className="contact_input"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <div>
                  <button
                    className="sendBtn float-right mt-5"
                    type="submit"
                    disabled={state.submitting}
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div>
            <iframe
              title="maps"
              src="https://www.google.com/maps/embed?pb=!4v1725719581583!6m8!1m7!1snPb139ZVaNLbZ7kMF6Ukpg!2m2!1d6.594314431846142!2d3.365926629903162!3f155.8377386626477!4f-15.956779721671452!5f0.7820865974627469"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
