import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";
import AboutImg from "../assets/pics/about.jpg";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="about-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1 className="about-hero-title" data-aos="fade-up">
            About Us
          </h1>
          <p className="about-hero-subtitle" data-aos="fade-up" data-aos-delay="200">
            Crafting excellence in upholstery since 2004
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="about-story">
        <div className="about-container">
          <div className="about-story-grid">
            <div className="about-story-content" data-aos="fade-right">
              <span className="about-tag">Our Story</span>
              <h2 className="about-section-title">Passion for Perfect Craftsmanship</h2>
              <p className="about-story-text">
                Kazorler Auto-Creative has been at the forefront of upholstery excellence 
                for over one decade. What started as a small workshop has grown into 
                a trusted name in automotive, furniture, and marine upholstery.
              </p>
              <p className="about-story-text">
                Our commitment to quality, attention to detail, and customer satisfaction 
                has earned us a reputation as one of the most reliable upholstery services 
                in the region. Every project, whether big or small, receives our complete 
                dedication and expertise.
              </p>
              <div className="about-story-stats">
                <div className="about-stat">
                  <span className="about-stat-number">12+</span>
                  <span className="about-stat-label">Years Experience</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat-number">500+</span>
                  <span className="about-stat-label">Projects Completed</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat-number">100%</span>
                  <span className="about-stat-label">Satisfaction</span>
                </div>
              </div>
            </div>
            <div className="about-story-image" data-aos="fade-left">
              <div className="about-image-wrapper">
                <img 
                  src={AboutImg} 
                  alt="Our Workshop"
                />
                <div className="about-image-badge">
                  <span>Est. 2014</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="about-why-us">
        <div className="about-container">
          <div className="about-section-header" data-aos="fade-up">
            <span className="about-tag">Why Choose Us</span>
            <h2 className="about-section-title">What Makes Us Different</h2>
            <p className="about-section-subtitle">
              We combine traditional craftsmanship with modern techniques
            </p>
          </div>
          
          <div className="about-features-grid">
            <div className="about-feature" data-aos="fade-up" data-aos-delay="100">
              <div className="about-feature-icon">🏆</div>
              <h3>Expert Craftsmanship</h3>
              <p>Master artisans with decades of combined experience in premium upholstery</p>
            </div>
            <div className="about-feature" data-aos="fade-up" data-aos-delay="200">
              <div className="about-feature-icon">✨</div>
              <h3>Premium Materials</h3>
              <p>Only the highest quality fabrics, leathers, and materials from trusted suppliers</p>
            </div>
            <div className="about-feature" data-aos="fade-up" data-aos-delay="300">
              <div className="about-feature-icon">⚡</div>
              <h3>Quick Turnaround</h3>
              <p>Efficient service without compromising on quality and attention to detail</p>
            </div>
            <div className="about-feature" data-aos="fade-up" data-aos-delay="400">
              <div className="about-feature-icon">💯</div>
              <h3>Satisfaction Guaranteed</h3>
              <p>We stand behind our work with a 100% customer satisfaction guarantee</p>
            </div>
            <div className="about-feature" data-aos="fade-up" data-aos-delay="500">
              <div className="about-feature-icon">🚚</div>
              <h3>Free Estimates</h3>
              <p>Transparent pricing with no hidden fees or obligations</p>
            </div>
            <div className="about-feature" data-aos="fade-up" data-aos-delay="600">
              <div className="about-feature-icon">🔧</div>
              <h3>Comprehensive Services</h3>
              <p>From automotive to furniture, we handle all types of upholstery needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="about-process">
        <div className="about-container">
          <div className="about-section-header" data-aos="fade-up">
            <span className="about-tag">Our Process</span>
            <h2 className="about-section-title">How We Work</h2>
            <p className="about-section-subtitle">
              A simple, transparent process from start to finish
            </p>
          </div>
          
          <div className="about-process-steps">
            <div className="about-step" data-aos="fade-up" data-aos-delay="100">
              <div className="about-step-number">01</div>
              <div className="about-step-content">
                <h3>Consultation</h3>
                <p>We discuss your needs, preferences, and budget</p>
              </div>
            </div>
            <div className="about-step" data-aos="fade-up" data-aos-delay="200">
              <div className="about-step-number">02</div>
              <div className="about-step-content">
                <h3>Material Selection</h3>
                <p>Choose from our wide range of premium fabrics and materials</p>
              </div>
            </div>
            <div className="about-step" data-aos="fade-up" data-aos-delay="300">
              <div className="about-step-number">03</div>
              <div className="about-step-content">
                <h3>Craftsmanship</h3>
                <p>Our experts bring your vision to life with precision</p>
              </div>
            </div>
            <div className="about-step" data-aos="fade-up" data-aos-delay="400">
              <div className="about-step-number">04</div>
              <div className="about-step-content">
                <h3>Quality Check</h3>
                <p>Rigorous inspection to ensure perfection</p>
              </div>
            </div>
            <div className="about-step" data-aos="fade-up" data-aos-delay="500">
              <div className="about-step-number">05</div>
              <div className="about-step-content">
                <h3>Delivery</h3>
                <p>Your restored piece is delivered with care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <div className="about-container">
          <div className="about-section-header" data-aos="fade-up">
            <span className="about-tag">Our Team</span>
            <h2 className="about-section-title">Meet The Artisans</h2>
            <p className="about-section-subtitle">
              Dedicated professionals passionate about their craft
            </p>
          </div>
          
          <div className="about-team-grid">
            <div className="about-team-member" data-aos="fade-up" data-aos-delay="100">
              <div className="about-member-image">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Team Member" />
              </div>
              <h3>John Martinez</h3>
              <p>Master Upholsterer</p>
              <span className="about-member-experience">15 years experience</span>
            </div>
            <div className="about-team-member" data-aos="fade-up" data-aos-delay="200">
              <div className="about-member-image">
                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Team Member" />
              </div>
              <h3>Sarah Chen</h3>
              <p>Design Specialist</p>
              <span className="about-member-experience">10 years experience</span>
            </div>
            <div className="about-team-member" data-aos="fade-up" data-aos-delay="300">
              <div className="about-member-image">
                <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Team Member" />
              </div>
              <h3>Michael Rodriguez</h3>
              <p>Auto Interior Expert</p>
              <span className="about-member-experience">12 years experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="about-container">
          <div className="about-cta-content" data-aos="fade-up">
            <h2>Ready to Transform Your Furniture?</h2>
            <p>Let's discuss your project and bring your vision to life</p>
            <div className="about-cta-buttons">
              <button className="about-cta-btn-primary">Get a Free Quote</button>
              <button className="about-cta-btn-secondary">Call Us: (555) 123-4567</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;