import "./testimonials.css";

const Testimonials = () => {
  return (
    <section className="dark-gray" id='testimonials'>
      <div className="wrapper">
        <div className="testimonials-container">
          <h2>What our students say?</h2>

          <div className="contents">
            <div className="content-info">
              <img src="../../src/assets/profileImg1.png" alt="profileImg1" />
              <div className="reviewer-details">
                <p className="name">Robert Fox</p>
                <p className="content-text">
                  I got to learn a lot about Music Production with this course.
                  Thanks :)
                </p>
              </div>
            </div>

            <div className="content-info">
              <img src="../../src/assets/profileImg2.png" alt="profileImg2" />
              <div className="reviewer-details">
                <p className="name">Emily Smith</p>
                <p className="content-text">Awesome! Great job!!</p>
              </div>
            </div>

            <div className="content-info">
              <img src="../../src/assets/profileImg3.png" alt="profileImg3" />
              <div className="reviewer-details">
                <p className="name">Peter Adams</p>
                <p className="content-text">
                  This is a great course. I got to learn a lot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
