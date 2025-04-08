import LoadingSpinner from "../../../../ui/LoadingSpinner";

function SideInformation({ certification, isLoading }) {
  return (
    <div className="col-lg-4">
      {" "}
      {/* Skills */}
      <div className="doctor-personals-grp">
        <div className="card">
          <div className="card-body">
            <div className="heading-detail">
              <h4>Skills:</h4>
            </div>
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <div className="skill-blk">
                <div className="skill-statistics">
                  <div className="skills-head">
                    <h5>Operations</h5>
                    <p>45%</p>
                  </div>
                  <div className="progress mb-0">
                    <div
                      className="progress-bar bg-operations"
                      role="progressbar"
                      style={{ width: "45%" }}
                      aria-valuenow={45}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="skill-statistics">
                  <div className="skills-head">
                    <h5>Patient Care</h5>
                    <p>85%</p>
                  </div>
                  <div className="progress mb-0">
                    <div
                      className="progress-bar bg-statistics"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow={85}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="skill-statistics">
                  <div className="skills-head">
                    <h5>Endoscopic </h5>
                    <p>65%</p>
                  </div>
                  <div className="progress mb-0">
                    <div
                      className="progress-bar bg-endoscopic"
                      role="progressbar"
                      style={{ width: "65%" }}
                      aria-valuenow={65}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="skill-statistics">
                  <div className="skills-head">
                    <h5>Patient Visit </h5>
                    <p>90%</p>
                  </div>
                  <div className="progress mb-0">
                    <div
                      className="progress-bar bg-visit"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Certification */}
      <div className="doctor-personals-grp">
        <div className="card">
          <div className="card-body">
            <div className="heading-detail">
              <h4>Certification</h4>
            </div>
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              certification?.map((certificate, index) => (
                <div className="personal-activity" key={certificate?.name}>
                  <div
                    className={`personal-icons status-${
                      index % 3 === 0
                        ? "grey"
                        : index % 3 === 1
                        ? "green"
                        : "orange"
                    }`}
                  >
                    <img
                      src={`/images/dashborad/icons/medal-0${
                        (index % 3) + 1
                      }.svg`}
                      alt=""
                    />
                  </div>
                  <div className="views-personal">
                    <h4>{certificate?.name}</h4>
                    <h5>{certificate?.description}</h5>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideInformation;
