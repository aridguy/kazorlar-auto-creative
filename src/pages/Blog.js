import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [hoveredImages, setHoveredImages] = useState({});
  const [openBlog, setOpenBlog] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const client = createClient({
    space: "6u1ri8jhaa4q",
    accessToken: "x3Mzc04F3uTEKcuUIjFm4w9L92LyvHWAUdME4Sgv_RA",
  });

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        const entries = await client.getEntries();
        setBlogPosts(entries.items);
      } catch (error) {
        console.log(error);
      }
    };
    getAllEntries();
  }, [client]);

  const handleMouseEnter = (id) => {
    setHoveredImages((prevState) => ({ ...prevState, [id]: true }));
  };

  const handleMouseLeave = (id) => {
    setHoveredImages((prevState) => ({ ...prevState, [id]: false }));
  };

  const handleReadMore = (post) => {
    setSelectedBlog(post); // Set the selected blog post data
    setOpenBlog(true); // Open the modal
  };

  const closeOverlay = () => {
    setOpenBlog(false);
    setSelectedBlog(null); // Clear the selected blog post data
  };
  const navigate = useNavigate("/");

  return (
    <div>
      <div className="container mt-5">
        <div style={{ width: "100%", height: "4.2em" }} className="">
          <div className="container">
            <span className="cursor lead fw-bold">Blog</span>
            <span onClick={() => navigate("/")} className="cursor lead fw-bold">
              {" "}
              Home
            </span>
          </div>
        </div>
        {/* blog header */}

        <div className="landingBlog">
          <h2 className="text-white">UPHOLSTERY WORKS</h2>
          <br />
          <small className="text-white">Kazorler Auto-Creative blog</small>
        </div>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-3 mt-4">
              <form>
                <div className="d-flex gap-2">
                  <input
                    type="search"
                    placeholder="search blog"
                    className="form-control"
                  />
                  <button className="border">search</button>
                </div>
              </form>
            </div>
            <div className="col-md-9">
              <div className="row mt-4">
                {blogPosts.slice(0, 2).map((posts) => (
                  <div key={posts.sys.id} className="col-md-3">
                    <div>
                      <img
                        width="100%"
                        src={`https:${posts.fields.blogImage[0].fields.file.url}`}
                        alt="products"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="row mt-5 mb-2">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              {blogPosts.map((posts, index) => (
                <div key={posts.sys.id} className="row mt-5">
                  {index % 2 === 0 ? (
                    // Even index layout
                    <>
                      <div className="col-md-6">
                        <img
                          width="100%"
                          src={`https:${
                            hoveredImages[posts.sys.id]
                              ? posts.fields.blogImage[1].fields.file.url
                              : posts.fields.blogImage[0].fields.file.url
                          }`}
                          alt="products"
                          loading="lazy"
                          onMouseEnter={() => handleMouseEnter(posts.sys.id)}
                          onMouseLeave={() => handleMouseLeave(posts.sys.id)}
                        />
                      </div>
                      <div className="col-md-6">
                        <h3>{posts.fields.blogName}</h3>
                        <article>{posts.fields.blogDescription}</article>
                        <button
                          onClick={() => handleReadMore(posts)}
                          className="btn btn-secondary btn-rounded mt-5"
                        >
                          Read more...
                        </button>
                      </div>
                    </>
                  ) : (
                    // Odd index layout
                    <>
                      <div className="col-md-6">
                        <h3>{posts.fields.blogName}</h3>
                        <article>{posts.fields.blogDescription}</article>
                        <button
                          onClick={() => handleReadMore(posts)}
                          className="btn btn-secondary btn-rounded mt-5"
                        >
                          Read more...
                        </button>
                      </div>
                      <div className="col-md-6">
                        <img
                          width="100%"
                          src={`https:${
                            hoveredImages[posts.sys.id]
                              ? posts.fields.blogImage[1].fields.file.url
                              : posts.fields.blogImage[0].fields.file.url
                          }`}
                          alt="products"
                          loading="lazy"
                          onMouseEnter={() => handleMouseEnter(posts.sys.id)}
                          onMouseLeave={() => handleMouseLeave(posts.sys.id)}
                        />
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
      <Footer />

      {/* Overlay Modal */}
      {openBlog && selectedBlog && (
        <div
          className="majorBg"
          style={{
            background: "#000000c7",
            width: "100%",
            height: "100%",
            position: "fixed",
            zIndex: "99",
            top: "0px",
            left: "0px",
          }}
        >
          <div className="container">
            <div className="row mt-5">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                <div
                  className="container bg-light overflows"
                  style={{ height: "33em" }}
                >
                  <div className="container">
                    <div className="row p-4">
                      <div className="col-md-12">
                        <h3>{selectedBlog.fields.blogName}</h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2"></div>
                      <div className="col-md-8">
                        <div>
                          <img
                            width="100%"
                            src={`https:${selectedBlog.fields.blogImage[0].fields.file.url}`}
                            alt="products"
                            loading="lazy"
                          />
                        </div>
                        <p>{selectedBlog.fields.blogDescription}</p>
                      </div>
                      <div className="col-md-2"></div>
                    </div>
                    <button
                      onClick={closeOverlay}
                      className="btn btn-secondary mt-4"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
