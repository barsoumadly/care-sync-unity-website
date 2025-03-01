function PatientHealthDetails({
  temperature,
  weigh,
  height,
  heartRate,
  bloodType,
  bloodSugar,
  bloodPressure,
  handleTemperature,
  handleWeigh,
  handleHeight,
  handleHeartRate,
  handleBloodType,
  handleBloodSugar,
  handleBloodPressure,
}) {
  return (
    <form>
      <div className="row">
        <div className="col-12">
          <div className="form-heading">
            <h4>
              Health Details{" "}
              <span style={{ fontSize: "13px" }}>(Optional)</span>
            </h4>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <div className="input-block local-forms">
            <label>
              Temperature <span className="login-danger"></span>
            </label>
            <input
              className="form-control"
              type="number"
              placeholder="ex: 37 °C"
              value={temperature}
              onChange={(event) =>
                handleTemperature(Number(event.target.value))
              }
            />
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <div className="input-block local-forms">
            <label>
              Weigh <span className="login-danger"></span>
            </label>
            <input
              className="form-control"
              type="number"
              placeholder="ex: 80 KG"
              value={weigh}
              onChange={(event) => handleWeigh(Number(event.target.value))}
            />
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <div className="input-block local-forms">
            <label>
              Height <span className="login-danger"></span>
            </label>
            <input
              className="form-control"
              type="number"
              placeholder="ex: 170 M"
              value={height}
              onChange={(event) => handleHeight(Number(event.target.value))}
            />
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <div className="input-block local-forms">
            <label>
              Heart Rate <span className="login-danger"></span>
            </label>
            <input
              className="form-control"
              type="number"
              placeholder="ex: 60 beats/minute"
              value={heartRate}
              onChange={(event) => handleHeartRate(Number(event.target.value))}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 col-xl-3">
          <div className="input-block local-forms">
            <label>
              Blood Type <span className="login-danger"></span>
            </label>
            <select
              className="form-control"
              value={bloodType}
              onChange={(event) => handleBloodType(event.target.value)}
            >
              <option value="select option" disabled>
                Select Option
              </option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <div className="input-block local-forms">
            <label>
              Blood Sugar <span className="login-danger"></span>
            </label>
            <input
              className="form-control"
              type="number"
              placeholder="ex: 70 mg/dL"
              value={bloodSugar}
              onChange={(event) => handleBloodSugar(Number(event.target.value))}
            />
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <div className="input-block local-forms">
            <label>
              Blood Pressure <span className="login-danger"></span>
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="ex: 85 mm/Hg"
              value={bloodPressure}
              onChange={(event) =>
                handleBloodPressure(Number(event.target.value))
              }
            />
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="doctor-submit text-end">
          <button type="submit" className="btn btn-primary submit-form me-2">
            Next
          </button>
        </div>
      </div>
    </form>
  );
}

export default PatientHealthDetails;
