import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { createClient } from "contentful";
import "react-image-lightbox/style.css";
import Lightbox from "react-image-lightbox";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const client = createClient({
    space: "tqncsdbsgfia",
    accessToken: "-9EwN0ildNJJx5JkXlF2kql-XkEx6uuThl7kelX7oLo",
  });

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        const entries = await client.getEntries({
          content_type: "gallery", // Specify the content type
        });
        setGallery(entries.items);
        // console.log(entries.items);
      } catch (error) {
        console.error(error);
      }
    };
    getAllEntries();
  }, [client]);

  // Extract image URLs for lightbox navigation
  const images = gallery.map(
    (item) => item.fields.galleryImages.fields.file.url
  );

  return (
    <div>
      <Navbar />
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex justify-content-between">
              <div>
                <h1 className="text-black fw-bold">Customers Interiors</h1>
                <sup>Click any of the images to enlarge for a bigger view.</sup>
              </div>
              <div>
                <sup>Custom Seats</sup>
                <sup>Customer's Interior</sup>
                <sup>Door Panels</sup>
              </div>
            </div>
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="row mt-5">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 768: 2, 992: 3 }}
          >
            <Masonry gutter="3px">
              {gallery.map((item, index) => (
                <article key={index} className="masonry-item">
                  <img
                    src={item.fields.galleryImages.fields.file.url}
                    alt={`Project ${index + 1}`}
                    style={{
                      width: "100%",
                      display: "block",
                      borderRadius: "2px",
                      // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setPhotoIndex(index);
                      setIsOpen(true);
                    }}
                  />
                </article>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>

      <Footer />

      {/* Lightbox Component */}
      {isOpen && (
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
        />
      )}
    </div>
  );
};

export default Gallery;
