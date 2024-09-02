import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import pics1 from "../assets/img/c.jpg";
import pics2 from "../assets/img/e.jpg";
import pics4 from "../assets/img/i.jpg";
import pics3 from "../assets/img/ii.jpg";
import pics5 from "../assets/img/j.jpg";
import pics6 from "../assets/img/k.jpg";
import pics7 from "../assets/img/l.jpg";
import pics8 from "../assets/img/m.jpg";
import pics9 from "../assets/img/n.jpg";
import pics10 from "../assets/img/o.jpg";
import pics11 from "../assets/img/p.jpg";

const Projects = () => {
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
        
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="">
              <ImageGallery items={images} />;
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
