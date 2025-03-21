import { useParams } from "react-router-dom";
import ClinicHeader from "./ClinicHeader";
import useClinicProfile from "./useClinicProfile";
import LoadingSpinner from "../../../../ui/LoadingSpinner";

function ClinicImages() {
  const { id } = useParams();
  const { data: clinic, isLoading } = useClinicProfile(id);

  return (
    <div className="main-wrapper">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="page-wrapper" style={{ minHeight: 270 }}>
          <div className="content">
            <ClinicHeader activeTab="images" clinic={clinic} />
            {/* Page Header */}
            <div className="page-header"></div>
            {/* /Page Header */}
            <div id="lightgallery" className="row">
              {clinic?.photos?.map((photo) => (
                <Image imageUrl={photo.url} key={photo.url} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Image({ imageUrl }) {
  return (
    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20">
      <a href={imageUrl} target="blank">
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
