import React from "react";
import "./blog.css";

const Blog = () => {
  return (
    <section className="pink">
      <div className="wrapper">
        <div className="blog-content">
          <h2 className="light">Latest Posts</h2>
          <div className="posts">
            <div className="post-info">
              <p className="post-name">DAW</p>
              <div className="post-content">
                <img src="../../src/assets/thumbnail1.png" alt="thumbnail1" />
                <p className="post-text">
                  How To Use Drum Machine in Logic Pro X
                </p>
              </div>
            </div>

            <div className="post-info">
              <p className="post-name">Mixing</p>
              <div className="post-content">
                <img src="../../src/assets/thumbnail2.png" alt="thumbnail2" />
                <p className="post-text">How To Mix Guitars Effectively</p>
              </div>
            </div>

            <div className="post-info">
              <p className="post-name">Vox</p>
              <div className="post-content">
                <img src="../../src/assets/thumbnail3.png" alt="thumbnail3" />
                <p className="post-text">
                  The Real Power of Harmonies in Music Production
                </p>
              </div>
            </div>
          </div>
          <div className="post-btn-container">
            <button className="post-btn">All Posts</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
