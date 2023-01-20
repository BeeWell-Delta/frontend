import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ImgUpload.css";
const ImgUpload = () => {
  const [image, setImage] = useState({ preview: "", raw: "" });
  const [response, setResponse] = useState({});
  const handleUpload = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    // formData.append("name", "name_input");

    formData.append("file", image.raw);
    console.log(image);

    // const url = "http://192.168.174.83:5000/predict";
    // const response = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     // "Content-type": "multipart/form-data",
    //   },
    //   body: formData,
    // });

    // console.log(response);

    // const formData = new FormData();
    // formData.append("image", image.raw);

    try {
      const res = await axios.post(
        "http://192.168.75.83:5000/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const data = await res.data;
      setResponse(data);
      // const data = await res.json();
      console.log(data);
    } catch (ex) {
      console.log(ex);
    }

    // axios
    //   .post("http://192.168.75.83:5000/predict", { body: formData })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));

    // await fetch("http://192.168.75.83:5000/predict", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    //   body: formData,
    // });
    console.log(formData);
  };

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  return (
    <div className="container">
      <div className="header">
        <Link to="/">
          <h2>
            Bee<span>Well.</span>
          </h2>
        </Link>
      </div>

      <div className="imgupload-container">
        <form onSubmit={handleUpload}>
          <input className="fileInput" type="file" onChange={handleChange} />
          <button className="submitButton" type="submit">
            Upload Image
          </button>
        </form>
      </div>
      <div className="preview">
        <h2>Preview</h2>
        <img src={image.preview} className="preview-img" alt="" />
      </div>
      <div className="prediction">
        <h2>
          Status: <span>{response.prediction}</span>
        </h2>
      </div>
    </div>
  );
};

export default ImgUpload;
