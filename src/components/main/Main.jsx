import { useState, useEffect } from "react";
import axios from "axios";
import "./Main.css";
import { Link } from "react-router-dom";
import { GiBee } from "react-icons/gi";
import { FaBlackberry } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import { AiOutlineArrowRight } from "react-icons/ai";
import beeImg from "../../assets/bee.jpg";

const solutions = {
  "ant problems": [
    "Build moats around the legs of your hive stands",
    "Spice up the area around the beehive with Cinnamon",
    "Make the hive stand as slippery as possible",
  ],
  Varroa: [
    "Aspian Strips: One strip for every five frames (Recommended Dosage)",
    "Apiguard: Two treatments of one foil pack every two weeks(Recommended Dosage)",
    "Mite away quick strips: One Strip in brood box",
  ],
  healthy: ["Good job on bee keeping"],
};

const Main = () => {
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState({});
  const [loading, setLoading] = useState(false);
  const [solns, setSolns] = useState([]);
  useEffect(() => {
    const fetchImage = async () => {
      setLoading(true);
      const data = await axios.get("http://192.168.75.83:5000/get_data");
      const image = await data.data;
      setImage(image);
      console.log(image);
      setLoading(false);
      setSolns(solutions[image.prediction]);
    };
    fetchImage();
  }, []);

  console.log();

  return loading ? (
    <h2>Loading...</h2>
  ) : (
    <>
      <div className="container">
        <div className="header">
          <Link to="/">
            <h2>
              Bee<span>Well.</span>
            </h2>
          </Link>
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
          <img src={image.img_path} alt="" />
        </div>

        <div className="prediction">
          <h2>
            Status: <span>{image.prediction}</span>
          </h2>
        </div>
        <button className="solutions" onClick={() => setModal(true)}>
          View Probable Solutions
        </button>
        <Link to="/upload">
          <button className="cta-btn">
            <HiLightBulb className="icon" />
            Predict with image.
            <AiOutlineArrowRight className="icon" />
          </button>
        </Link>
      </div>
      {modal && (
        <div className="modal">
          <div className="modal-main">
            <div className="content">
              <h3>Prediction: {image.prediction}</h3>
              <h4>Probable Solutions:</h4>
              <ul>
                {solns.map((solution, index) => {
                  return <li key={index}>{solution}</li>;
                })}
                {/* <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium, laborum.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium, laborum.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium, laborum.
                </li> */}
              </ul>
              <button onClick={() => setModal(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Main;
