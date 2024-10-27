import React from "react";

const Blog = () => {
  return (
    <div className="container mt-5">
      <div style={{ width: "100%", height: "4.2em" }} className="">
        <div classname="container">
          <span className="cursor lead fw-bold">Blog</span>
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
                <button className="border ">search</button>
              </div>
            </form>
          </div>
          <div className="col-md-9">
            <div className="row mt-4">
              <div className="col-md-3">
                <div>
                  <img
                    width="100%"
                    src="https://images.unsplash.com/photo-1726534168836-59dff8524925?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="products"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div>
                  <img
                    width="100%"
                    src="https://images.unsplash.com/photo-1726534168836-59dff8524925?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="products"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div>
                  <img
                    width="100%"
                    src="https://images.unsplash.com/photo-1726534168836-59dff8524925?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="products"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div>
                  <img
                    width="100%"
                    src="https://images.unsplash.com/photo-1726534168836-59dff8524925?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="products"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
