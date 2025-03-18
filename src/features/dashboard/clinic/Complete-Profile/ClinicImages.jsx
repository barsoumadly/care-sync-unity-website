function ClinicImages({ images, setImage }) {
  const uploadImage = async (e) => {
    const files = e.target.files;
    setImage((images) => [...images, files[0]]);
  };

  function deleteHandler(image) {
    setImage((images) => images.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  return (
    <>
      <div className="col-12">
        <div className="form-heading">
          <h4>
            Clinic images <span style={{ fontSize: "12px" }}>(Optional)</span>
          </h4>
        </div>
      </div>
      <div className="col-12 col-md-6 col-xl-5">
        <div className="input-block local-top-form">
          <label className="local-top">Clinic images</label>
          <div className="settings-btn upload-files-avator">
            <input
              type="file"
              accept="image/*"
              name="image"
              id="file"
              onChange={uploadImage}
              className="hide-input"
              data-cf-modified-f4b406440a9d28b1c089eaf4-=""
            />
            <label htmlFor="file" className="upload">
              Choose File
            </label>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {images?.map((image, i) => (
              <ShowImages
                image={image.url ? image.url : image}
                key={i}
                deleteImage={deleteHandler}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ClinicImages;
function ShowImages({ image, deleteImage }) {
  function checkPhoto(photo) {
    if (typeof photo !== "string") {
      return URL.createObjectURL(photo);
    }
    return photo;
  }

  return (
    <div className="upload-images upload-size" style={{ marginRight: "20px" }}>
      <img src={`${checkPhoto(image)}`} alt="Image" />
      <button
        onClick={() => deleteImage(image)}
        type="button"
        className="btn-icon logo-hide-btn"
        style={{ border: "0", background: "#fff" }}
      >
        <i className="feather-x-circle" />
      </button>
    </div>
  );
}
