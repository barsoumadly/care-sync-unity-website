import ClinicHeader from "./ClinicHeader";

function ClinicImages() {
  const clinic = JSON.parse(localStorage.getItem("clinic"));

  return (
    <div className="main-wrapper">
      <div className="page-wrapper" style={{ minHeight: 270 }}>
        <div className="content">
          <ClinicHeader activeTab="images" />
          {/* Page Header */}
          <div className="page-header"></div>
          {/* /Page Header */}
          <div id="lightgallery" className="row">
            {clinic.images.map((imageUrl) => (
              <Image imageUrl={imageUrl} key={imageUrl} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Image({ imageUrl }) {
  return (
    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20">
      <a href={imageUrl}>
        <img
          style={{ width: "350px", height: "250px" }}
          className="img-thumbnail"
          src={imageUrl}
          alt=""
        />
      </a>
    </div>
  );
}

export default ClinicImages;
