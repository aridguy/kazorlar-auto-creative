import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { createClient } from "contentful";
import { useForm, ValidationError } from "@formspree/react";
import Swal from "sweetalert2";
import "./Shop.css";

const Shop = () => {
  const [state, handleSubmit] = useForm("xldrzykr");
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(true);

  // Initialize Contentful client
  const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN_PROJECT,
  });

  // Fetch video URL from Contentful
  useEffect(() => {
    const fetchVideo = async () => {
      try {
        console.log("🔄 Fetching video from Contentful...");
        
        const response = await client.getEntries({
          content_type: "shop",
          limit: 1,
        });
        
        console.log("📦 Full Response:", response);
        console.log("📊 Items count:", response.items.length);
        
        if (response.items.length > 0) {
          const videoField = response.items[0].fields;
          console.log("🔍 Fields:", videoField);
          console.log("🎥 Video URL field:", videoField.videoUrl);
          
          setVideoUrl(videoField.videoUrl);
        } else {
          console.log("⚠️ No workshop content found");
        }
        
      } catch (error) {
        console.error("❌ Error:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchVideo();
  }, []);

  // Success alert
  if (state.succeeded) {
    Swal.fire({
      title: "Message Sent!",
      text: "We'll get back to you within 24 hours",
      icon: "success",
      confirmButtonColor: "#c8a87c",
    });
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }

  return (
    <div className="shop-page">
      <Navbar />

      {/* Hero Section */}
      <section className="shop-hero">
        <div className="shop-hero-overlay"></div>
        <div className="shop-hero-content">
          <h1 className="shop-hero-title" data-aos="fade-up">
            Our Workshop
          </h1>
          <p className="shop-hero-subtitle" data-aos="fade-up" data-aos-delay="200">
            Where craftsmanship meets creativity
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="shop-main">
        <div className="shop-container">
          <div className="shop-grid">

            {/* Video Section */}
            <div className="shop-video-section">
              <div className="shop-video-wrapper">
                <div className="shop-video-label">
                  <span>▶ Watch Our Craftsmanship</span>
                </div>
                
                {loading ? (
                  <div className="shop-video-loader">
                    <div className="loader"></div>
                    <p>Loading video...</p>
                  </div>
                ) : (
                  <iframe
                    width="100%"
                    height="560"
                    src={videoUrl || "https://www.youtube.com/embed/YELYkJkjtJY"}
                    title="Workshop Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                )}
              </div>

              {/* Features */}
              <div className="shop-features">
                <h3>Why Visit Our Workshop?</h3>
                <div className="shop-features-grid">
                  <div className="shop-feature-item">
                    <span className="shop-feature-icon">🔧</span>
                    <div>
                      <h4>State-of-the-art Equipment</h4>
                      <p>Modern tools for precision work</p>
                    </div>
                  </div>
                  <div className="shop-feature-item">
                    <span className="shop-feature-icon">👨‍🔧</span>
                    <div>
                      <h4>Expert Craftsmen</h4>
                      <p>Skilled professionals at work</p>
                    </div>
                  </div>
                  <div className="shop-feature-item">
                    <span className="shop-feature-icon">✨</span>
                    <div>
                      <h4>Quality Materials</h4>
                      <p>Premium fabrics and leathers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="shop-contact-section">
              <div className="shop-contact-card">
                <h3 className="shop-contact-title">Get in Touch</h3>
                <p className="shop-contact-subtitle">
                  Have questions? We'd love to hear from you
                </p>

                <form onSubmit={handleSubmit} className="shop-form">
                  <div className="shop-form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      id="name"
                      className="shop-form-input"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      required
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>

                  <div className="shop-form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      id="email"
                      className="shop-form-input"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>

                  <div className="shop-form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      name="message"
                      id="message"
                      className="shop-form-textarea"
                      placeholder="Tell us about your project or questions..."
                      rows="5"
                      required
                    ></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  <button type="submit" disabled={state.submitting} className="shop-submit-btn">
                    {state.submitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="shop-cta">
        <div className="shop-container">
          <div className="shop-cta-content">
            <h2>Ready to Transform Your Furniture?</h2>
            <p>Speak directly with our upholstery experts</p>
            <button 
              className="shop-cta-btn" 
              onClick={() => document.querySelector('.shop-contact-card').scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch Today
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;