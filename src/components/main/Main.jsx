import "./Main.css";
import { GiBee } from "react-icons/gi";
import { FaBlackberry } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import { AiOutlineArrowRight } from "react-icons/ai";
import beeImg from "../../assets/bee.jpg";
const Main = () => {
  return (
    <div className="container">
      <div className="header">
        <h2>
          Bee<span>Well.</span>
        </h2>
      </div>
      <div className="cards-container">
        <div className="card">
          <div className="icon-container first">
            <FaBlackberry className="icon" />
          </div>
          <div className="content">
            <h2>70000</h2>
            <p>Approx. population</p>
          </div>
        </div>

        <div className="card">
          <div className="icon-container second">
            <GiBee className="icon" />
          </div>
          <div className="content">
            <h2>8931</h2>
            <p>No. Tested</p>
          </div>
        </div>

        <div className="card">
          <div className="icon-container third">
            <GiBee className="icon" />
          </div>
          <div className="content">
            <h2>1432</h2>
            <p>Diseased Found</p>
          </div>
        </div>

        <div className="card">
          <div className="icon-container fourth">
            <GiBee className="icon" />
          </div>

          <div className="content">
            <h2>5</h2>
            <p>Diseases predicted</p>
          </div>
        </div>
      </div>
      <h2 style={{ marginTop: "2rem" }}>Latest Prediction</h2>
      <div className="img">
        <img src={beeImg} alt="" />
      </div>

      <div className="prediction">
        <h2>
          Status: <span>Healthy</span>
        </h2>
      </div>
      <button className="cta-btn">
        <HiLightBulb className="icon" />
        Predict with image.
        <AiOutlineArrowRight className="icon" />
      </button>
    </div>
  );
};

export default Main;
