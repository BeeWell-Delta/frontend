import "./ImgUpload.css";
const ImgUpload = () => {
  return (
    <div className="container">
      <div className="header">
        <h2>
          Bee<span>Well.</span>
        </h2>
      </div>

      <div className="imgupload-container">
        <form onSubmit={(e) => console.log(e.target.value)}>
          <input
            className="fileInput"
            type="file"
            onChange={(e) => console.log(e.target.value)}
          />
          <button
            className="submitButton"
            type="submit"
            onClick={(e) => console.log(e.target.value)}
          >
            Upload Image
          </button>
        </form>
      </div>
      <div className="preview"></div>
    </div>
  );
};

export default ImgUpload;
