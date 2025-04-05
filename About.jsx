import { FaGlobeAmericas } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./About.css";

function About() {
  const navigate = useNavigate(); // Navigation Hook

  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Travel</h1>
        <p>Exploring the world made easy, one journey at a time.</p>
      </header>

      <div className="about-content">
        <div className="about-intro">
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              At Travel, we believe in making travel experiences seamless and
              memorable. From exotic locations to hidden gems, we help you plan
              and explore with confidence.
            </p>
          </div>
          <div className="about-image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxTVW7qIPLFJ_alveDA1xU-P0mGXH0CF98Fw&s" alt="Travel Experience" />
          </div>
        </div>

        <div className="about-highlight">
          <FaGlobeAmericas className="highlight-icon" />
          <div>
            <h3>Everyone is welcome here</h3>
            <p>Join our travel community and explore the beauty of the world.</p>
          </div>
        </div>

        <div className="about-stats">
          <div>
            <h3>500K+</h3>
            <p>Happy Travelers</p>
          </div>
          <div>
            <h3>120</h3>
            <p>Countries Explored</p>
          </div>
          <div>
            <h3>1M+</h3>
            <p>Bookings Completed</p>
          </div>
          <div>
            <h3>99%</h3>
            <p>Customer Satisfaction</p>
          </div>
        </div>
        <div className="about-cta">
          <h3>Be a part of the journey</h3>
          <p>Discover new places, meet amazing people, and create unforgettable memories.</p>
          <button onClick={() => navigate("/places")} className="cta-button">
            Start Your Adventure
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
