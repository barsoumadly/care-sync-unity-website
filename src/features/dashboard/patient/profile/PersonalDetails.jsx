import { useForm } from "react-hook-form";

function PatientPersonalDetails({
  patientData,
  onChangePatientData,
  onChangePageNumber,
}) {
  const { register, handleSubmit } = useForm();

  const performSubmit = function (data) {
    onChangePatientData({ ...patientData, ...data });
    onChangePageNumber((pageNumber) => pageNumber + 1);
  };

  return (
    <>
      <form onSubmit={handleSubmit(performSubmit)}>
        <div className="row">
          <div className="col-12" style={{ marginTop: "50px" }}>
            <div className="form-heading">
              <h4>
                <span style={{ fontSize: "15px" }}>
                  Enter Your Personal Details
                </span>
              </h4>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <div className="input-block local-forms">
              <label>
                Phone Number <span className="login-danger">*</span>
              </label>
              <input
                className="form-control"
                type="text"
                value={patientData?.phoneNumber}
                placeholder="ex: 0123456789"
                required
                {...register("phoneNumber")}
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <div className="input-block local-forms">
              <label>
                Birth Date <span className="login-danger">*</span>
              </label>
              <input
                className="form-control"
                type="date"
                required
                value={patientData?.birthDate}
                {...register("birthDate")}
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <div className="input-block local-forms">
              <label>
                Gender <span className="login-danger">*</span>
              </label>
              <select
                className="form-control"
                value={patientData?.gender}
                required
                {...register("gender")}
              >
                <option value="select-option" disabled>
                  Select Option
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
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
    </>
  );
}

export default PatientPersonalDetails;
