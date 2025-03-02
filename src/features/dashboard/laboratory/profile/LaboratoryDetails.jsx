import { useForm } from "react-hook-form";

function LaboratoryDetails({
  laboratoryData,
  onChangeLaboratoryData,
  onChangePageNumber,
}) {
  const { register, handleSubmit } = useForm();

  const performSubmit = function (data) {
    onChangeLaboratoryData({ ...laboratoryData, ...data });
    onChangePageNumber((pageNumber) => pageNumber + 1);
  };
  return (
    <form onSubmit={handleSubmit(performSubmit)}>
      <div className="row">
        <div className="col-12" style={{ marginTop: "50px" }}>
          <div className="form-heading">
            <h4>
              <span style={{ fontSize: "15px" }}>
                Enter Your Laboratory Details
              </span>
            </h4>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <div className="input-block local-forms">
            <label>
              Laboratory Name <span className="login-danger">*</span>
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="ex: El Ezaby"
              required
              value={laboratoryData.laboratoryName}
              {...register("laboratoryName")}
            />
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
              placeholder="ex: 0123456789"
              required
              value={laboratoryData.phoneNumber}
              {...register("phoneNumber")}
            />
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <div className="input-block local-forms">
            <label>Founded Year (optional)</label>
            <input
              className="form-control"
              type="number"
              placeholder="ex: 2005"
              value={laboratoryData.foundedYear}
              {...register("foundedYear")}
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

export default LaboratoryDetails;
