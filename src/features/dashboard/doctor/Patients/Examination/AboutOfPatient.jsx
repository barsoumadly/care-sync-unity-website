function AboutOfPatient({ data }) {
  return (
    <div className="doctor-personals-grp">
      <div className="card">
        <div className="card-body">
          <div className="heading-detail ">
            <h4 className="mb-3">About me</h4>
            <p>
              Hello, my name is {data?.userId?.name}. I'm here today because I'd
              like to establish care with this clinic. My contact information is{" "}
              {data?.phone}.
            </p>
          </div>
          <div className="about-me-list">
            <ul className="list-space">
              <li>
                <h4>Blood Type</h4>
                <span>{data?.bloodType}</span>
              </li>
              <li>
                <h4>Blood Pressure</h4>
                <span>{data?.bloodPressure}</span>
              </li>
              <li>
                <h4>Blood Sugar</h4>
                <span>{data?.bloodSugar}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutOfPatient;
