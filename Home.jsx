import { useNavigate } from "react-router-dom";
import "./Home.css"; 

function Home() {
  const navigate = useNavigate(); // Navigation Hook

  return (
    <div className="home-container">
      
      <div className="home-bg">
        <div className="home-content">
          <h1>Travel Now Easy</h1>
          <p>Manage Your Travel From Your Phone</p>
          <p>
            Explore the world's most stunning destinations at your fingertips.
            Plan your next adventure effortlessly with our travel app.
          </p>
          <button onClick={() => navigate("/places")} className="explore-button">
            Explore Now →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
