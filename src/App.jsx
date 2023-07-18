import logo from "./assets/logo.png";
import squareIcon from "./assets/squareIcon.svg";
import luxuryIcon from "./assets/luxuryIcon.svg";
import star from "./assets/star.svg";
import icon from "./assets/icon.png";
import gymSis from "./assets/gymSis.jpeg";
import locationIcon from "./assets/locationIcon.svg";
import "./App.css";
import "./Navbar.css";
import "./Hero.css";
import "./Reviews.css";
import "./Contact.css";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="body">
        <Hero />
        <div className="image">
          <p>TRAIN ON YOUR OWN TIME</p>
        </div>
        <Contact />
        <Reviews />
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

const Hero = () => {
  return (
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
  );
};

const Reviews = () => {
  return (
    <div className="reviews">
      <span className="top-reviews">
        <span className="score">
          <h3>4.98</h3>
          <span>
            <span className="stars">
              <img src={star} alt="star1" />
              <img src={star} alt="star2" />
              <img src={star} alt="star3" />
              <img src={star} alt="star4" />
              <img src={star} alt="star5" />
            </span>
            BASED ON 619 REVIEWS
          </span>
        </span>
        <img src={icon} alt="Brand Icon" />
      </span>
      <p>
        "I had been to Al Balad several times. It is one of my favorite places
        in Jeddah. It is historic, full of great people. I would recommend this
        place 100%. They have many equipment and the staff is really nice and
        welcoming."
      </p>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="contact">
      <span className="contact-box">
        <img src={gymSis} alt="GymGirl" />
        <span className="contact-info">
          <span className="contact-top">
            24/7 SUPPORT
            <a href="#" className="address">
              1234 FITNESS LN BROOKLYN, NY
              <img src={locationIcon} alt="Location Icon" />
            </a>
          </span>
          <h4>CONTACT US & RISE STRONGER</h4>
        </span>
      </span>
    </div>
  );
};

export default App;
