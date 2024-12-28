import React, { useEffect, useState } from "react";
import { createClient } from "contentful";

const Footer = () => {
  const [socialLinks, setSocialLinks] = useState({ instagram: "", linkedin: "", twitter: "" });

  const client = createClient({
    space: "tqncsdbsgfia",
    accessToken: "-9EwN0ildNJJx5JkXlF2kql-XkEx6uuThl7kelX7oLo",
  });

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        const entries = await client.getEntries({
          content_type: "socialMediaLinks", // Specify the content type
        });
        if (entries.items.length > 0) {
          const fields = entries.items[0].fields;
          setSocialLinks({
            instagram: fields.instagram || "",
            linkedin: fields.linkedin || "",
            twitter: fields.twitter || "",
          });
        }
      } catch (error) {
        console.error(error);
      }
    };
    getAllEntries();
  }, [client]);

  return (
    <div>
      <div className="container-fluid text-center bg-black text-white mt-5 pt-5 pb-4">
        <sup>
          https://kazorlerauto-creative.com.ng/© 2024 <br />
          Custom Car Upholstery and Seat Covers, Custom Door Panels, and More! <br />
          Website design and development by <br />
          <a className="text-white" href="mailto:codetechs247@gmail.com">
            codetechs247@gmail.com
          </a>
        </sup>
        <br />
        <a target="_blank" rel="noopener noreferrer" href={socialLinks.instagram}>
          <i className="text-white fab fa-instagram mx-3 cursor"></i>
        </a>
        <a target="_blank" rel="noopener noreferrer" href={socialLinks.linkedin}>
          <i className="text-white fab fa-linkedin mx-3 cursor"></i>
        </a>
        <a target="_blank" rel="noopener noreferrer" href={socialLinks.twitter}>
          <i className="text-white fab fa-twitter mx-3 cursor"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
