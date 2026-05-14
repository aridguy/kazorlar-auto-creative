import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { createClient } from "contentful";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "react-image-lightbox/style.css";
import Lightbox from "react-image-lightbox";
import "./Gallery.css";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Initialize Contentful client
  const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN_PROJECT,
  });

  // Fetch gallery from Contentful
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setLoading(true);
        console.log("🔄 Fetching gallery from Contentful...");
        console.log("Space ID:", process.env.REACT_APP_CONTENTFUL_SPACE_ID);
        
        const response = await client.getEntries({
          content_type: "gallery",
          order: "-sys.createdAt",
        });
        
        console.log("✅ Gallery fetched successfully!");
        console.log("📊 Total gallery items:", response.items.length);
        console.log("📦 Full response:", response);
        
        setGallery(response.items);
        setError(null);
      } catch (err) {
        console.error("❌ Error fetching gallery:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  // Extract unique categories from fetched gallery items
  const categories = ["all", ...new Set(gallery.map(item => item.fields?.category).filter(Boolean))];
  
  const filteredGallery = activeCategory === "all" 
    ? gallery 
    : gallery.filter(item => item.fields?.category === activeCategory);

  const images = filteredGallery.map(
    (item) => item.fields?.image?.fields?.file?.url || item.fields?.galleryImages?.fields?.file?.url
  ).filter(Boolean);

  if (loading) {
    return (
      <div className="gallery-page">
        <Navbar />
        <div className="gallery-loader-container">
          <div className="gallery-loader"></div>
          <p>Loading our gallery...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="gallery-page">
        <Navbar />
        <div className="gallery-error-container">
          <div className="gallery-error-icon">⚠️</div>
          <h2>Unable to Load Gallery</h2>
          <p>{error}</p>
          <button className="gallery-retry-btn" onClick={() => window.location.reload()}>
            Try Again
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="gallery-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="gallery-hero-overlay"></div>
        <div className="gallery-hero-content">
          <h1 className="gallery-hero-title" data-aos="fade-up">
            Our Gallery
          </h1>
          <p className="gallery-hero-subtitle" data-aos="fade-up" data-aos-delay="200">
            Explore our collection of transformations and restorations
          </p>
        </div>
      </section>

      {/* Filter Section */}
      {categories.length > 1 && (
        <div className="gallery-filter-section">
          <div className="gallery-container">
            <div className="gallery-filter-wrapper">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`gallery-filter-btn ${activeCategory === category ? "active" : ""}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category === "all" ? "All" : category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Gallery Grid */}
      <section className="gallery-grid-section">
        <div className="gallery-container">
          <div className="gallery-stats">
            <p>{filteredGallery.length} photos • Click any image to enlarge</p>
          </div>
          
          {filteredGallery.length === 0 ? (
            <div className="gallery-empty">
              <p>No images found in this category.</p>
            </div>
          ) : (
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 576: 2, 768: 3, 992: 4 }}
            >
              <Masonry gutter="20px">
                {filteredGallery.map((item, index) => {
                  const imageUrl = item.fields?.image?.fields?.file?.url || item.fields?.galleryImages?.fields?.file?.url;
                  const title = item.fields?.title || `Gallery ${index + 1}`;
                  const category = item.fields?.category || "Upholstery";
                  
                  return (
                    <div 
                      key={item.sys.id || index} 
                      className="gallery-item"
                      onClick={() => {
                        setPhotoIndex(index);
                        setIsOpen(true);
                      }}
                    >
                      <div className="gallery-image-wrapper">
                        <img
                          src={imageUrl}
                          alt={title}
                          loading="lazy"
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/400x300?text=Image+Not+Found";
                          }}
                        />
                        <div className="gallery-overlay">
                          <div className="gallery-overlay-content">
                            <span className="gallery-overlay-icon">🔍</span>
                            <p className="gallery-overlay-title">{title}</p>
                            <span className="gallery-overlay-category">{category}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Masonry>
            </ResponsiveMasonry>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="gallery-cta">
        <div className="gallery-container">
          <div className="gallery-cta-content">
            <h2>Inspired by Our Work?</h2>
            <p>Let's create something beautiful for your space</p>
            <button 
              className="gallery-cta-btn"
              onClick={() => window.location.href = "/contact"}
            >
              Request a Quote
            </button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Lightbox */}
      {isOpen && images.length > 0 && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
          imageTitle={filteredGallery[photoIndex]?.fields?.title || "Our Work"}
          imageCaption={`Category: ${filteredGallery[photoIndex]?.fields?.category || "Upholstery"}`}
        />
      )}
    </div>
  );
};

export default Gallery;