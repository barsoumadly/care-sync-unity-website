function StaticOfHealth({ data }) {
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
                <h5>Temperature </h5>
                <p>{data?.temperature} &deg;c</p>
              </div>
              <div className="progress mb-0">
                <div
                  className="progress-bar bg-haemoglobin"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            <div className="skill-statistics">
              <div className="skills-head">
                <h5>Height </h5>
                <p>{data?.height}cm</p>
              </div>
              <div className="progress mb-0">
                <div
                  className="progress-bar bg-visit"
                  role="progressbar"
                  style={{ width: "70%" }}
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            <div className="skill-statistics">
              <div className="skills-head">
                <h5>Weight </h5>
                <p>{data?.weight}kg</p>
              </div>
              <div className="progress mb-0">
                <div
                  className="progress-bar bg-operations"
                  role="progressbar"
                  style={{ width: `${data?.weight}%` }}
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>

            <div className="skill-statistics">
              <div className="skills-head">
                <h5>Heart rate </h5>
                <p>{data?.heartRate}%</p>
              </div>
              <div className="progress mb-0">
                <div
                  className="progress-bar bg-visit"
                  role="progressbar"
                  style={{ width: `${data?.heartRate}%` }}
                  aria-valuenow={data?.heartRate}
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
