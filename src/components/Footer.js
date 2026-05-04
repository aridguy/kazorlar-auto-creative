import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import "./Footer.css";

const Footer = () => {
  const [socialLinks, setSocialLinks] = useState({ 
    instagram: "", 
    linkedin: "", 
    twitter: "",
    facebook: "",
    youtube: ""
  });

  const client = createClient({
    space: "tqncsdbsgfia",
    accessToken: "-9EwN0ildNJJx5JkXlF2kql-XkEx6uuThl7kelX7oLo",
  });

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        const entries = await client.getEntries({
          content_type: "socialMediaLinks",
        });
        if (entries.items.length > 0) {
          const fields = entries.items[0].fields;
          setSocialLinks({
            instagram: fields.instagram || "",
            linkedin: fields.linkedin || "",
            twitter: fields.twitter || "",
            facebook: fields.facebook || "",
            youtube: fields.youtube || "",
          });
        }
      } catch (error) {
        console.error(error);
      }
    };
    getAllEntries();
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-modern">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <h3 className="footer-logo">Kazorler<span>Auto-Creative</span></h3>
            <p className="footer-description">
              Premium upholstery craftsmanship for automotive, furniture, and marine interiors.
              Transforming your vision into reality since 2004.
            </p>
            <div className="footer-trust-badge">
              <span className="trust-badge">✓ 500+ Projects</span>
              <span className="trust-badge">✓ 100% Satisfaction</span>
              <span className="trust-badge">✓ Free Estimates</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="footer-title">Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/shop">Workshop</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-links">
            <h4 className="footer-title">Our Services</h4>
            <ul>
              <li><a href="/">Automotive Upholstery</a></li>
              <li><a href="/">Furniture Restoration</a></li>
              <li><a href="/">Marine Interiors</a></li>
              <li><a href="/">Custom Design</a></li>
              <li><a href="/">Antique Restoration</a></li>
              <li><a href="/">Free Consultation</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4 className="footer-title">Get In Touch</h4>
            <div className="contact-info">
              <p className="contact-item">
                <span className="contact-icon">📍</span>
                Kazorler Auto-Creative, decorium event center opebi link bridge, Lagos, Nigeria
              </p>
              <p className="contact-item">
                <span className="contact-icon">📞</span>
                +234 (070) 1276-0072 <br />+234 (070) 1365-7861
              </p>
              <p className="contact-item">
                <span className="contact-icon">✉️</span>
                wahabkazeem5@gmail.com
              </p>
              <p className="contact-item">
                <span className="contact-icon">🕒</span>
                Mon-Sat: 9AM - 8PM
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="footer-newsletter">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h4>Subscribe to Our Newsletter</h4>
              <p>Get updates on new projects and special offers</p>
            </div>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>© {currentYear} Kazorler Auto-Creative. All rights reserved.</p>
            <p className="footer-credit">
              Website by <a href="mailto:codetechs247@gmail.com">CodeTechs</a>
            </p>
          </div>
          
          <div className="footer-social">
            {socialLinks.instagram && (
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-instagram"></i>
                <span>Instagram</span>
              </a>
            )}
            {socialLinks.facebook && (
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-facebook-f"></i>
                <span>Facebook</span>
              </a>
            )}
            {socialLinks.twitter && (
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-twitter"></i>
                <span>Twitter</span>
              </a>
            )}
            {socialLinks.linkedin && (
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin-in"></i>
                <span>LinkedIn</span>
              </a>
            )}
            {socialLinks.youtube && (
              <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-youtube"></i>
                <span>YouTube</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;