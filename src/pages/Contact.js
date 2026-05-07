import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useForm, ValidationError } from "@formspree/react";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css";

const Contact = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [typedText, setTypedText] = useState("");
  const fullText = "We'd love to hear from you";

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
    });

    // Typing animation
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);

    return () => clearInterval(typing);
  }, []);

  const [state, handleSubmit] = useForm("mqazjznb");

  if (state.succeeded) {
    Swal.fire({
      title: "Message Sent!",
      text: "We'll get back to you within 24 hours",
      icon: "success",
      confirmButtonColor: "#c8a87c",
      background: "#0a0a0a",
      color: "#fff",
      backdrop: `
        rgba(0,0,0,0.8)
        url("https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif")
        left top
        no-repeat
      `,
    });
  }

  const contactMethods = [
    {
      icon: "📍",
      title: "Visit Our Studio",
      details: ["123 Creative District", "Upholstery Street", "Cityville, ST 12345"],
      color: "#c8a87c",
      gradient: "linear-gradient(135deg, #c8a87c20, #b8926620)"
    },
    {
      icon: "📞",
      title: "Call Us Directly",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543", "24/7 Emergency Support"],
      color: "#c8a87c",
      gradient: "linear-gradient(135deg, #c8a87c20, #b8926620)"
    },
    {
      icon: "✉️",
      title: "Email Us",
      details: ["info@kazorler.com", "support@kazorler.com", "careers@kazorler.com"],
      color: "#c8a87c",
      gradient: "linear-gradient(135deg, #c8a87c20, #b8926620)"
    },
    {
      icon: "🕒",
      title: "Working Hours",
      details: ["Mon-Fri: 9AM - 8PM", "Saturday: 10AM - 5PM", "Sunday: By Appointment"],
      color: "#c8a87c",
      gradient: "linear-gradient(135deg, #c8a87c20, #b8926620)"
    }
  ];

  return (
    <div className="contact-page">
      <Navbar />

      {/* Animated Background */}
      <div className="contact-bg-animation">
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
        <div className="gradient-sphere sphere-3"></div>
      </div>

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content">
          <div className="hero-badge" data-aos="fade-down">
            <span className="badge-text">✦ Get in Touch ✦</span>
          </div>
          <h1 className="contact-hero-title" data-aos="fade-up">
            Let's Create
            <span className="gradient-text"> Something Amazing</span>
          </h1>
          <p className="contact-hero-subtitle" data-aos="fade-up" data-aos-delay="200">
            {typedText}<span className="cursor-blink">|</span>
          </p>
          <div className="hero-scroll-hint" data-aos="fade-up" data-aos-delay="400">
            <span>Scroll to connect</span>
            <div className="scroll-arrow">↓</div>
          </div>
        </div>
      </section>

      {/* Contact Methods Floating Cards */}
      <section className="contact-methods">
        <div className="contact-container">
          <div className="methods-grid">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className={`method-card ${hoveredCard === index ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                style={{ '--card-gradient': method.gradient }}
              >
                <div className="method-icon-wrapper">
                  <div className="method-icon-glow"></div>
                  <span className="method-icon">{method.icon}</span>
                </div>
                <h3 className="method-title">{method.title}</h3>
                {method.details.map((detail, idx) => (
                  <p key={idx} className="method-detail">{detail}</p>
                ))}
                <div className="method-hover-line"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section with 3D Effect */}
      <section className="contact-main">
        <div className="contact-container">
          <div className="contact-grid">
            {/* Left Side - Info with Parallax */}
            <div className="contact-info" data-aos="fade-right">
              <div className="info-badge">
                <span>Why Choose Us?</span>
              </div>
              <h2 className="contact-info-title">
                Ready to
                <span className="gradient-text"> Transform</span>
                <br />Your Furniture?
              </h2>
              <p className="contact-info-text">
                Join over <span className="highlight-number">500+</span> satisfied clients who trusted us with their precious pieces.
              </p>

              <div className="trust-badges">
                <div className="trust-badge">
                  <span className="trust-icon">⭐</span>
                  <span>4.9/5 Rating</span>
                </div>
                <div className="trust-badge">
                  <span className="trust-icon">🏆</span>
                  <span>Award Winning</span>
                </div>
                <div className="trust-badge">
                  <span className="trust-icon">💯</span>
                  <span>100% Guarantee</span>
                </div>
              </div>

              <div className="social-links">
                <h4>Follow Our Journey</h4>
                <div className="social-icons">
                  <a href="/" className="social-icon">📷</a>
                  <a href="/" className="social-icon">📘</a>
                  <a href="/" className="social-icon">🐦</a>
                  <a href="/" className="social-icon">🎥</a>
                </div>
              </div>
            </div>

            {/* Right Side - Form with 3D Hover */}
            <div className="contact-form-wrapper" data-aos="fade-left">
              <div className="contact-form-card">
                <div className="form-card-glow"></div>
                <h3 className="contact-form-title">
                  Send a <span className="gradient-text">Message</span>
                </h3>
                <p className="contact-form-subtitle">
                  Fill out the form and we'll respond within 24h
                </p>

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="contact-form-group floating-label-group">
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder=" "
                      required
                      className="contact-form-input"
                    />
                    <label htmlFor="name">Full Name *</label>
                    <div className="input-border"></div>
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>

                  <div className="contact-form-group floating-label-group">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder=" "
                      required
                      className="contact-form-input"
                    />
                    <label htmlFor="email">Email Address *</label>
                    <div className="input-border"></div>
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>

                  <div className="contact-form-group floating-label-group">
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      placeholder=" "
                      required
                      className="contact-form-input"
                    />
                    <label htmlFor="subject">Subject *</label>
                    <div className="input-border"></div>
                    <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                  </div>

                  <div className="contact-form-group floating-label-group">
                    <textarea
                      id="message"
                      name="message"
                      placeholder=" "
                      rows="5"
                      required
                      className="contact-form-textarea"
                    ></textarea>
                    <label htmlFor="message">Message *</label>
                    <div className="input-border"></div>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="contact-submit-btn"
                  >
                    {state.submitting ? (
                      <span className="btn-loader">⏳ Sending...</span>
                    ) : (
                      <span className="btn-text">
                        Send Message <span className="btn-arrow">→</span>
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section with Reveal Animation */}
      <section className="contact-map-section">
        <div className="contact-container">
          <div className="contact-map-wrapper" data-aos="fade-up">
            <div className="map-header">
              <h3 className="contact-map-title">Find Our Studio</h3>
              <div className="map-location-pulse">
                <span className="pulse-dot"></span>
                <span>Visit us in person</span>
              </div>
            </div>
            <div className="contact-map-container">
              <iframe
                title="Kazorler Auto-Creative Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4274039526767!2d3.3608163706214262!3d6.593681807782759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9389c1c8562f%3A0xeffa8f456209277!2sKazorler%20Auto-Creative!5e0!3m2!1sen!2sng!4v1778159231290!5m2!1sen!2sng"
                width="100%"
                height="400"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Accordion Animation */}
      <section className="contact-faq">
        <div className="contact-container">
          <div className="contact-faq-header" data-aos="fade-up">
            <span className="faq-badge">FAQ</span>
            <h2>Frequently Asked <span className="gradient-text">Questions</span></h2>
            <p>Everything you need to know about our services</p>
          </div>

          <div className="contact-faq-grid">
            <div className="contact-faq-item" data-aos="fade-up" data-aos-delay="100">
              <div className="faq-icon">❓</div>
              <h3>How quickly do you respond?</h3>
              <p>We typically respond within 24 hours during business days. For urgent inquiries, give us a call!</p>
            </div>
            <div className="contact-faq-item" data-aos="fade-up" data-aos-delay="200">
              <div className="faq-icon">💰</div>
              <h3>Do you provide free estimates?</h3>
              <p>Yes! We offer free, no-obligation estimates for all projects. Just send us your details.</p>
            </div>
            <div className="contact-faq-item" data-aos="fade-up" data-aos-delay="300">
              <div className="faq-icon">📍</div>
              <h3>What areas do you serve?</h3>
              <p>We serve the greater metropolitan area and offer nationwide shipping for furniture restoration.</p>
            </div>
            <div className="contact-faq-item" data-aos="fade-up" data-aos-delay="400">
              <div className="faq-icon">🔧</div>
              <h3>Do you offer warranties?</h3>
              <p>Absolutely! All our work comes with a 5-year warranty and 100% satisfaction guarantee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA with pre-filled message */}
      <section className="emergency-cta">
        <div className="contact-container">
          <div className="emergency-content" data-aos="zoom-in">
            <div className="emergency-icon">🚨</div>
            <h3>Need Urgent Assistance?</h3>
            <p>Click below to chat with us on WhatsApp for immediate support</p>
            <a
              href="https://wa.me/2347012760072?text=Hello%20Kazorler%20Auto-Creative%2C%20I%20will%20like%20to%20make%20enquiry%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="emergency-number"
              style={{
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: '#25D366',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '50px',
                fontWeight: 'bold'
              }}
            >
              <span className="pulse-ring"></span>
              💬 Chat on WhatsApp: +234 701 276 0072
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;