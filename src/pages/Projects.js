import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { createClient } from "contentful";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
  });

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        const entries = await client.getEntries({
          content_type: "project",
        });
        setProjects(entries.items);
      } catch (error) {
        console.error(error);
      }
    };
    getAllEntries();
  }, [client]);

  return (
    <div>
      <Navbar />
      <div className="container mt-5 pt-5">
        <h1 className="text-black fw-bold text-center">Customers Interiors</h1>
        <p className="text-center">
          See images, before and after of different projects completed.
        </p>

        {/* Masonry Grid */}
        <div className="row mt-5" style={{ display: "flex", flexWrap: "wrap" }}>
          {projects.map((project, index) => (
            <div
              className="col-md-4 d-flex justify-content-center"
              key={project.sys.id || index}
            >
              <div className="project-card">
                <Carousel showThumbs={true} thumbWidth={50}>
                  {project.fields.carImages?.map((image, i) => (
                    <div key={i} className="carousel-img-container">
                      <img src={image.fields.file.url} alt={`car-${index}-${i}`} />
                      <p className="legend">{project.fields.carName}</p>
                    </div>
                  ))}
                </Carousel>
                <p className="description">{project.fields.carDescriptions}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      
      {/* Styling */}
      <style jsx>{`
        .project-card {
          width: 100%;
          max-width: 350px;
          text-align: center;
          padding: 10px;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          background-color: white;
        }
        .carousel-img-container img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          border-radius: 8px;
        }
        .legend {
          font-weight: bold;
          font-size: 14px;
        }
        .description {
          font-size: 14px;
          color: #555;
          margin-top: 5px;
        }
      `}</style>
    </div>
  );
};

export default Projects;
