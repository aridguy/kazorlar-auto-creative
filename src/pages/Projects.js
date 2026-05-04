import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { createClient } from "contentful";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Projects.css";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Initialize Contentful client
  const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN_PROJECT,
  });

  // Fetch projects from Contentful
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await client.getEntries({
          content_type: "project",
          order: "-sys.createdAt",
        });
        setProjects(response.items);
        console.log(response.items);
        
        setError(null);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Extract unique categories from fetched projects
  const categories = ["all", ...new Set(projects.map(project => project.fields?.category).filter(Boolean))];
  
  // Filter projects based on active category
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.fields?.category === activeFilter);

  // Loading state
  if (loading) {
    return (
      <div className="projects-page">
        <Navbar />
        <div className="projects-loader-container">
          <div className="projects-loader"></div>
          <p>Loading our projects...</p>
        </div>
        <Footer />
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="projects-page">
        <Navbar />
        <div className="projects-error-container">
          <div className="projects-error-icon">⚠️</div>
          <h2>Unable to Load Projects</h2>
          <p>{error}</p>
          <button className="projects-retry-btn" onClick={() => window.location.reload()}>
            Try Again
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="projects-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="projects-hero-overlay"></div>
        <div className="projects-hero-content">
          <h1 className="projects-hero-title">Our Work</h1>
          <p className="projects-hero-subtitle">
            Explore our collection of transformations and restorations
          </p>
          <div className="projects-hero-stats">
            <div className="projects-stat">
              <span className="projects-stat-number">450+</span>
              <span className="projects-stat-label">Projects</span>
            </div>
            <div className="projects-stat">
              <span className="projects-stat-number">100%</span>
              <span className="projects-stat-label">Satisfaction</span>
            </div>
            <div className="projects-stat">
              <span className="projects-stat-number">20+</span>
              <span className="projects-stat-label">Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      {categories.length > 1 && (
        <div className="projects-filter-section">
          <div className="projects-container">
            <div className="projects-filter-wrapper">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`projects-filter-btn ${activeFilter === category ? "active" : ""}`}
                  onClick={() => setActiveFilter(category)}
                >
                  {category === "all" ? "All" : category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Projects Grid */}
      <section className="projects-grid-section">
        <div className="projects-container">
          {filteredProjects.length === 0 ? (
            <div className="projects-empty">
              <p>No projects found in this category.</p>
            </div>
          ) : (
            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <div key={project.sys.id} className="projects-card">
                  <div className="projects-card-image-wrapper">
                    {project.fields.projectImages && project.fields.projectImages.length > 0 ? (
  <Carousel 
    showThumbs={false} 
    showStatus={false}
    infiniteLoop
    swipeable
    emulateTouch
  >
    {project.fields.projectImages.map((image, idx) => (
      <div key={idx} className="projects-carousel-slide">
        <img 
          src={`https:${image.fields.file.url}`}
          alt={`${project.fields.projectTitle} - ${idx + 1}`}
        />
      </div>
    ))}
  </Carousel>
) : (
  <div className="projects-no-image">
    <span>No image available</span>
  </div>
)}
                    <div className="projects-card-category">
                      {project.fields.category || "Featured"}
                    </div>
                  </div>
                  <div className="projects-card-content">
                    <h5 className="projects-card-title">{project.fields.projectTitle}</h5>
                    <p className="projects-card-description">
                      {project.fields.projectDescription?.substring(0, 120)}
                      {project.fields.projectDescription?.length > 120 ? "..." : ""}
                    </p>
                    <button className="projects-card-btn">View Details →</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="projects-cta">
        <div className="projects-container">
          <div className="projects-cta-content">
            <h2>Have a Project in Mind?</h2>
            <p>Let's bring your vision to life with our expert craftsmanship</p>
            <button 
              className="projects-cta-btn"
              onClick={() => window.location.href = "/contact"}
            >
              Request a Quote
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;