import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const Navigate = useNavigate();
  // const parallaxRef = useRef(null);

  useEffect(() => {
    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-bg');
      parallaxElements.forEach((el) => {
        const speed = el.getAttribute('data-speed') || 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <div className="home-modern">
      <Navbar />

      {/* Hero Section - Full Screen with Parallax */}
      <section className="hero-modern">
        <div className="hero-modern-bg parallax-bg" data-speed="0.3"></div>
        <div className="hero-modern-overlay"></div>
        <div className="hero-modern-content">
          <div className="hero-modern-badge">
            <span className="badge-pulse">✦ EST. 2014</span>
          </div>
          <h1 className="hero-modern-title">
            <span className="title-line">Redefining</span>
            <span className="title-gradient">Upholstery</span>
            <span className="title-line">Craftsmanship</span>
          </h1>
          <p className="hero-modern-subtitle">
            Where traditional mastery meets cutting-edge design
          </p>
          <div className="hero-modern-buttons">
            <button onClick={() => Navigate("projects")} className="btn-primary-modern">
              Explore Work <span>→</span>
            </button>
            <button onClick={() => Navigate("shop")} className="btn-outline-modern">
              Watch Showreel <span className="play-icon">▶</span>
            </button>
          </div>
          <div className="hero-scroll-indicator">
            <span>Scroll to explore</span>
            <div className="scroll-mouse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section - Glassmorphism */}
      <section className="stats-modern">
        <div className="container-modern">
          <div className="stats-grid">
            <div className="stat-card" data-aos="fade-up">
              <div className="stat-number">20+</div>
              <div className="stat-label">Years Excellence</div>
              <div className="stat-line"></div>
            </div>
            <div className="stat-card" data-aos="fade-up" data-aos-delay="100">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Completed</div>
              <div className="stat-line"></div>
            </div>
            <div className="stat-card" data-aos="fade-up" data-aos-delay="200">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
              <div className="stat-line"></div>
            </div>
            <div className="stat-card" data-aos="fade-up" data-aos-delay="300">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
              <div className="stat-line"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Modern Grid */}
      <section className="services-modern">
        <div className="container-modern">
          <div className="section-header-modern">
            <span className="section-tag">What We Do</span>
            <h2 className="section-title-modern">
              Precision <span className="gradient-text">Craftsmanship</span>
              <br />For Every Surface
            </h2>
            <p className="section-subtitle-modern">
              Specialized upholstery solutions that blend innovation with tradition
            </p>
          </div>

          <div className="services-grid-modern">
            <div className="service-card-modern" data-aos="fade-up">
              <div className="service-icon">🚗</div>
              <h3>Automotive Excellence</h3>
              <p>Custom interiors, luxury finishes, and complete restoration</p>
              <div className="service-hover-bg"></div>
            </div>
            <div className="service-card-modern" data-aos="fade-up" data-aos-delay="100">
              <div className="service-icon">🛋️</div>
              <h3>Furniture Artistry</h3>
              <p>Restoring heirlooms and creating modern masterpieces</p>
              <div className="service-hover-bg"></div>
            </div>
            <div className="service-card-modern" data-aos="fade-up" data-aos-delay="200">
              <div className="service-icon">⛵</div>
              <h3>Marine Upholstery</h3>
              <p>Weather-resistant luxury for your vessel</p>
              <div className="service-hover-bg"></div>
            </div>
            <div className="service-card-modern" data-aos="fade-up" data-aos-delay="300">
              <div className="service-icon">✈️</div>
              <h3>Aviation Interiors</h3>
              <p>Premium aircraft seating and cabin upholstery</p>
              <div className="service-hover-bg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Showcase Section */}
      <section className="showcase-modern">
        <div className="showcase-bg parallax-bg" data-speed="0.2"></div>
        <div className="container-modern">
          <div className="showcase-content">
            <div className="showcase-text" data-aos="fade-right">
              <span className="section-tag light">Portfolio</span>
              <h2>Where Vision <br />Meets <span className="gradient-text">Execution</span></h2>
              <p>Every project tells a story of transformation, precision, and passion for the craft.</p>
              <button onClick={() => Navigate("gallery")} className="btn-primary-modern">View Full Portfolio →</button>
            </div>
            <div className="showcase-grid" data-aos="fade-left">
              <div className="showcase-item">
                <div className="showcase-img"></div>
                <div className="showcase-overlay">
                  <span>Luxury Car Interior revamping</span>
                </div>
              </div>
              <div className="showcase-item">
                <div className="showcase-img-2"></div>
                <div className="showcase-overlay">
                  <span>Antique Restoration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Timeline Style */}
      <section className="process-modern">
        <div className="container-modern">
          <div className="section-header-modern">
            <span className="section-tag">Our Process</span>
            <h2 className="section-title-modern">From Concept <br />To <span className="gradient-text">Creation</span></h2>
          </div>

          <div className="process-timeline">
            <div className="process-step" data-aos="fade-up">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Consultation</h3>
                <p>Understanding your vision and requirements</p>
              </div>
              <div className="step-line"></div>
            </div>
            <div className="process-step" data-aos="fade-up" data-aos-delay="100">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>Material Selection</h3>
                <p>Curating the finest fabrics and materials</p>
              </div>
              <div className="step-line"></div>
            </div>
            <div className="process-step" data-aos="fade-up" data-aos-delay="200">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Precision Crafting</h3>
                <p>Master artisans bringing your vision to life</p>
              </div>
              <div className="step-line"></div>
            </div>
            <div className="process-step" data-aos="fade-up" data-aos-delay="300">
              <div className="step-number">04</div>
              <div className="step-content">
                <h3>Quality Delivery</h3>
                <p>Rigorous inspection and perfect finish</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Modern Carousel Style */}
      {/* <section className="testimonials-modern">
        <div className="container-modern">
          <div className="testimonials-header">
            <span className="section-tag">Testimonials</span>
            <h2 className="section-title-modern">What Our <span className="gradient-text">Clients Say</span></h2>
          </div>

          <div className="testimonials-grid-modern">
            <div className="testimonial-card-modern" data-aos="fade-up">
              <div className="quote-icon">“</div>
              <p className="testimonial-text">Absolutely transformed my classic car. The attention to detail is unmatched.</p>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div>
                  <h4>James Wilson</h4>
                  <span>Classic Car Collector</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card-modern" data-aos="fade-up" data-aos-delay="100">
              <div className="quote-icon">“</div>
              <p className="testimonial-text">Professional, creative, and perfectionists. Couldn't be happier with my furniture!</p>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div>
                  <h4>Sarah Martinez</h4>
                  <span>Interior Designer</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card-modern" data-aos="fade-up" data-aos-delay="200">
              <div className="quote-icon">“</div>
              <p className="testimonial-text">Best in the business. My boat interior looks better than when it was new.</p>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div>
                  <h4>David Chen</h4>
                  <span>Boat Owner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section - Bold */}
      <section className="cta-modern">
        <div className="cta-bg parallax-bg" data-speed="0.1"></div>
        <div className="container-modern">
          <div className="cta-content-modern" data-aos="zoom-in">
            <h2>Ready to <span className="gradient-text">Transform</span> Your Piece?</h2>
            <p>Let's discuss your project and create something extraordinary together</p>
            <div  className="cta-buttons">
              <button onClick={() => Navigate("contact")} className="btn-primary-modern btn-large">Get Free Quote</button>
              <button onClick={() => Navigate("contact")} className="btn-outline-modern btn-large">Call: +234 (701) 276-0072</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;