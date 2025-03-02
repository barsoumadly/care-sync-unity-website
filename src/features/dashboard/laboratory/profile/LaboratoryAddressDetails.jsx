import { useForm } from "react-hook-form";

function LaboratoryAddressDetails({
  laboratoryData,
  onChangeLaboratoryData,
  onChangePageNumber,
}) {
  const { register, handleSubmit } = useForm();

  const performSubmit = function (data) {
    onChangeLaboratoryData({ ...laboratoryData, ...data });
    onChangePageNumber((pageNumber) => pageNumber + 1);
  };

  const handleDecPageNumber = function () {
    onChangePageNumber((pageNumber) => pageNumber - 1);
  };

  return (
    <form onSubmit={handleSubmit(performSubmit)}>
      <div className="row">
        <div className="col-12" style={{ marginTop: "50px" }}>
          <div className="form-heading">
            <h4>
              <span style={{ fontSize: "15px" }}>
                Enter Your Address Details
              </span>
            </h4>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <div className="input-block local-forms">
            <label>
              City <span className="login-danger">*</span>
            </label>
            <select
              className="form-control"
              required
              value={laboratoryData.city}
              {...register("city")}
            >
              <option value="select-option" dir="">
                Select Option
              </option>
            </select>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <div className="input-block local-forms">
            <label>
              Area <span className="login-danger">*</span>
            </label>
            <select
              className="form-control"
              required
              value={laboratoryData.area}
              {...register("area")}
            >
              <option value="select-option" dir="">
                Select Option
              </option>
            </select>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-4">
          <div className="input-block local-forms">
            <label>
              Address <span className="login-danger">*</span>
            </label>
            <input
              className="form-control"
              type="text"
              required
              placeholder="ex: El Hegaz St, Al Matar, El Nozha"
              value={laboratoryData.address}
              {...register("address")}
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

export default LaboratoryAddressDetails;
