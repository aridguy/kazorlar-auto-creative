import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Shop = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid mt-5 pt-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className=" text-center text-info">
              Welcome to Our <br /> Work Shop
            </h1>
            <sup className="text-black text-center lead">
              check out Kazorler Auto-creative work shop
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
                width="100%"
                height="401"
                src="https://www.youtube.com/embed/0PP3LAc-HCw"
                title="How To Create Your Own Upholstery"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="col-md-3">
          <p className="lead text-secondary">Get in Touch!</p>
            <div>
              <form>
                <p>
                  {" "}
                  <input className="form-control" name="Name" type="text" placeholder="name" required />
                </p>
                <p>
                  {" "}
                  <input className="form-control" name="Email" type="email" placeholder="email" required />
                </p>
                <p>
                  {" "}
                  <textarea style={{minHeight: "30vh"}} className="form-control" type="Message" placeholder="leave a message . . ." required></textarea>
                </p>
                <p>
                  {" "}
                  <button className="btn btn-secondary text-black text-uppercase">Send</button>
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
