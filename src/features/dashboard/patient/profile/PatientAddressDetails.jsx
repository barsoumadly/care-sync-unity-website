function PatientAddressDetails({
  city,
  area,
  address,
  handleCity,
  handleArea,
  handleAddress,
}) {
  return (
    <form>
      <div className="row">
        <div className="col-12">
          <div className="form-heading">
            <h4>Address Details</h4>
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
              value={city}
              onChange={(event) => handleCity(event.target.value)}
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
              value={area}
              onChange={(event) => handleArea(event.target.value)}
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
              value={address}
              onChange={(event) => handleAddress(event.target.value)}
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

export default PatientAddressDetails;
