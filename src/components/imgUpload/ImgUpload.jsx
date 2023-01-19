import { useState } from "react";
import { Link } from "react-router-dom";
import "./ImgUpload.css";
const ImgUpload = () => {
  const [image, setImage] = useState({ preview: "", raw: "" });

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image.raw);

    // await fetch("YOUR_URL", {
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
          Status: <span>Healthy</span>
        </h2>
      </div>
    </div>
  );
};

export default ImgUpload;
