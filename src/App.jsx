import "./App.css";
import logo from "./assets/logo.png";
import squareIcon from "./assets/squareIcon.svg";
import luxuryIcon from "./assets/luxuryIcon.svg";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="body">
        <div className="hero">
          <span className="top-hero">
            <img src={squareIcon} alt="Other brand icon" />
            TIME FOR FITNESS - 23
          </span>
          <h1>OWN YOUR STRENGTH, OWN YOU</h1>
          <span className="bottom-hero">
            <a href="#">START YOUR JOURNEY</a>
            <span>
              <img src={luxuryIcon} alt="Luxury Icon" />
              LUXURY FITNESS EXPERIENCE
            </span>
          </span>
        </div>
        <div className="image">
          <p>TRAIN ON YOUR OWN TIME</p>
        </div>
        <div className="contact">three</div>
        <div className="reviews">four</div>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="Brand Logo" />
      <ul className="nav-list">
        <li>
          <a href="#">ABOUT</a>
        </li>
        <li>
          <a href="#">SCHEDULE</a>
        </li>
        <li>
          <a href="#">STORE</a>
        </li>
        <li>
          <a href="#">CONTACT</a>
        </li>
      </ul>
      <a href="#" className="join-button">
        JOIN OUR GYM
      </a>
    </div>
  );
};

export default App;
