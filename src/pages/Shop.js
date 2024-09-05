import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useForm, ValidationError } from "@formspree/react";
import Swal from "sweetalert2";

const Shop = () => {
  // const WorkshopAPIKey = process.env.REACT_APP_WORKSHOP_FORM_ID
  const [state, handleSubmit] = useForm("xldrzykr");

  if (state.succeeded) {
    // console.log("Successfully sent mail");
    Swal.fire({
      title: "Successful?",
      text: "Message has been delivered!",
      icon: "success",
    });
    setTimeout(() => {
      window.location.reload(); // Reload the current page
    }, 3000);
  }

  return (
    <div>
      <Navbar />
      <div className="container-fluid mt-5 pt-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="text-center text-info">
              Welcome to Our <br /> Work Shop
            </h1>
            <sup className="text-black text-center lead">
              Check out Kazorler Auto-creative workshop
            </sup>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-7">
            <div className="video_box" style={{ borderRadius: "8px" }}>
              <iframe
                width="315"
                height="560"
                src="https://www.youtube.com/embed/nW1nHluVr9U"
                title="workshop video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <iframe
                width="315"
                height="560"
                src="https://www.youtube.com/embed/YELYkJkjtJY"
                title="vid 01"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="col-md-3">
            <p className="lead text-secondary">Get in Touch!</p>
            <div>
              <form onSubmit={handleSubmit}>
                <p>
                  <input
                    id="name"
                    className="form-control"
                    name="name" // Ensure it matches with the ValidationError field
                    type="text"
                    placeholder="Name"
                    required
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </p>

                <p>
                  <input
                    id="email"
                    className="form-control"
                    name="email" // Ensure it matches with the ValidationError field
                    type="email"
                    placeholder="Email"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </p>

                <p>
                  <textarea
                    name="message" // Ensure it matches with the ValidationError field
                    id="message"
                    style={{ minHeight: "30vh" }}
                    className="form-control"
                    placeholder="Leave a message . . ."
                    required
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </p>

                <p>
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="btn btn-secondary text-black text-uppercase"
                  >
                    Send
                  </button>
                </p>
              </form>
            </div>
          </div>

          <div className="col-md-1"></div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex gap-5 text-center">
              <h2 className="text-black">
                Want to talk to the upholstery experts?
              </h2>
              <button className="btn btn-secondary text-black text-uppercase">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
