import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Aos from "aos";
import { createClient } from "contentful";

const About = () => {
  const [about, setAbout] = useState(null); // State to hold the fetched content
  const [error, setError] = useState(null); // State for error handling

  // Initialize Contentful client
  const client = createClient({
    space: "tqncsdbsgfia",
    accessToken: "18xyd4lIv4S6MyvjradyqozSwHr85gS-BFuRX5-RpQY",
  });

  // Fetch About content from Contentful
  useEffect(() => {
    const getAllEntries = async () => {
      try {
        const entries = await client.getEntries({
          content_type: "about", // Specify the content type
        });

        if (entries.items.length > 0) {
          setAbout(entries.items[0].fields); // Assuming the first entry is "About"
        } else {
          setError("No content found for 'about'");
        }
      } catch (error) {
        console.error("Error fetching About content:", error);
        setError("Failed to fetch content. Please try again later.");
      }
    };
    getAllEntries();
  }, [client]);

  // Initialize AOS animations
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration
      once: true, // Animation happens only once
      mirror: false, // No reverse animations on scroll up
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container-fluid mt-4 pt-5 about_hero text-white">
        <h1 data-aos="fade-right" className="about_hero_text">
          ABOUT US
        </h1>
        <p data-aos="fade-left" className="lead">
          Kazorler Auto-Creative
        </p>
      </div>
      <div className="container-fluid mt-5 pt-5">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-5">
                <div
                  data-aos="fade-right"
                  className="pt-5 box_about_bg p-5"
                  style={{ width: "100%", height: "100vh" }}
                >
                  <h2 className="red text-center">WHY US?</h2>
                  {error ? (
                    <p className="lead text-danger">{error}</p>
                  ) : (
                    <p className="">
                      {about?.aboutDescription?.content[0]?.content[0]?.value ||
                        "Description unavailable."}
                    </p>
                  )}
                  <br />
                  <button className="bg-red border text-white btn">
                    Get a Quote
                  </button>
                </div>
              </div>
              <div className="col-md-7">
                <div data-aos="fade-left">
                  {about?.aboutImage?.fields?.file?.url ? (
                    <img
                      width="100%"
                      src={`https:${about.aboutImage.fields.file.url}`}
                      alt={
                        about.aboutImage.fields.title || "About Image"
                      }
                    />
                  ) : (
                    <p className="text-center">Image unavailable.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
