import { useForm } from "react-hook-form";

function PatientHealthDetails({
  patientData,
  onChangePatientData,
  onChangePageNumber,
}) {
  const { register, handleSubmit } = useForm();

  const handleDecPageNumber = function () {
    onChangePageNumber((pageNumber) => pageNumber - 1);
  };

  const performSubmit = function (data) {
    onChangePatientData({ ...patientData, ...data });
    onChangePageNumber((pageNumber) => pageNumber + 1);
  };

  return (
    <form onSubmit={handleSubmit(performSubmit)}>
      <div className="row">
        <div className="col-12" style={{ marginTop: "50px" }}>
          <div className="form-heading">
            <h4>
              <span style={{ fontSize: "15px" }}>
                Enter Your Health Details (optional)
              </span>
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
              value={patientData.temperature}
              {...register("temperature")}
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
              value={patientData.weight}
              {...register("weight")}
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
              value={patientData.height}
              {...register("height")}
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
              value={patientData.heartRate}
              {...register("heartRate")}
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
              value={patientData.bloodType}
              {...register("bloodType")}
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
              value={patientData.bloodSugar}
              {...register("bloodSugar")}
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
              value={patientData.bloodPressure}
              {...register("bloodPressure")}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 col-xl-1">
          <div className="doctor-submit text-end">
            <button
              type="submit"
              className="btn btn-primary submit-form me-2"
              onClick={handleDecPageNumber}
            >
              Back
            </button>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-11">
          <div className="doctor-submit text-end">
            <button type="submit" className="btn btn-primary submit-form me-2">
              Next
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default PatientHealthDetails;
