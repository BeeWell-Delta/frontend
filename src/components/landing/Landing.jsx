import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./Landing.css";
const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-top">
        <img src={logo} alt="" className="logo" />
      </div>
      <div className="landing-bottom">
        <h1>
          Bee<span>Well.</span>
        </h1>
        <p>Smart bee health and behavioral monitoring system</p>
        <Link to="/main">
          <button>Get started!</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
