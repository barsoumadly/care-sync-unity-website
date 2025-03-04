function StaticOfHealth() {
  return (
    <div className="doctor-personals-grp">
      <div className="card">
        <div className="card-body">
          <div className="heading-detail">
            <h4>General Health:</h4>
          </div>
          <div className="skill-blk">
            <div className="skill-statistics">
              <div className="skills-head">
                <h5>Heart Beat</h5>
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
                <h5>Haemoglobin</h5>
                <p>85%</p>
              </div>
              <div className="progress mb-0">
                <div
                  className="progress-bar bg-haemoglobin"
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
                <h5>Blood Pressure </h5>
                <p>65%</p>
              </div>
              <div className="progress mb-0">
                <div
                  className="progress-bar bg-statistics"
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
                <h5>Sugar </h5>
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
        </div>
      </div>
    </div>
  );
}

export default StaticOfHealth;
