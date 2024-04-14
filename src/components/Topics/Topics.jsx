import "./topics.css";
import defaultTopicImage from "../../assets/thumbnail1.png";
import topicImage1 from "../../assets/topicImg1.png";
import topicImage2 from "../../assets/topicImg2.png";
import topicImage3 from "../../assets/topicImg3.png";
import topicImage4 from "../../assets/topicImg4.png";
import topicImage5 from "../../assets/topicImg5.png";
import { useState } from "react";

const Topics = () => {
  const [currentImage, setCurrentImage] = useState(defaultTopicImage);

  return (
    <section id="topics" className="black">
      <div className="wrapper">
        <div className="content-container">
          <h2>What will you learn?</h2>
          <div className="topic-content">
            <ul>
              <li onMouseEnter={() => setCurrentImage(defaultTopicImage)}>
                What are frequencies?
              </li>
              <li onMouseEnter={() => setCurrentImage(topicImage1)}>Using DAW</li>
              <li onMouseEnter={() => setCurrentImage(topicImage2)}>
                Vocals Processing
              </li>
              <li onMouseEnter={() => setCurrentImage(topicImage3)}>Mixing</li>
              <li onMouseEnter={() => setCurrentImage(topicImage4)}>
                Mixing Console
              </li>
              <li onMouseEnter={() => setCurrentImage(topicImage5)}>Mastering</li>
            </ul>
            <div className="topic-image">
              <img src={currentImage} alt="topic-image" />
            </div>
          </div>
        </div>
        <img src="../../src/assets/icon1.svg" alt="icon1" className="iconImg1"/>
      </div>
    </section>
  );
};

export default Topics;
