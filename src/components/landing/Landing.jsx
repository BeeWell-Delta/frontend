import logo from "../../assets/logo.png";
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
        <button>Get started!</button>
      </div>
    </div>
  );
};

export default Landing;
