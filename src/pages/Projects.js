import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex justify-content-between">
              <div>
                <h1 className="text-black fw-3">Customers Interiors</h1>
                <sup>click any of the images to enlarge for a bigger view.</sup>
              </div>
              <div className="">
                <sup>Custom Seats</sup>
                <sup>Customer's Interior</sup>
                <sup>Door Panels</sup>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            gallery images will display on this part of this project section
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
