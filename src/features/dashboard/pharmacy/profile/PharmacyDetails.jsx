function PharmacyDetails({
  pharmacyName,
  phoneNumber,
  year,
  handlePharmacyName,
  handlePhoneNumber,
  handleFoundedYear,
}) {
  return (
    <div className="row">
      <div className="col-12">
        <div className="form-heading">
          <h4>Pharmacy Details</h4>
        </div>
      </div>
      <div className="col-12 col-md-6 col-xl-3">
        <div className="input-block local-forms">
          <label>
            Pharmacy Name <span className="login-danger">*</span>
          </label>
          <input
            className="form-control"
            type="text"
            value={pharmacyName}
            placeholder="ex: El Ezaby"
            required
            onChange={(event) =>
              event.target.value.length <= 11 &&
              handlePharmacyName(event.target.value)
            }
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
            value={phoneNumber}
            placeholder="ex: 0123456789"
            required
            onChange={(event) =>
              event.target.value.length <= 11 &&
              handlePhoneNumber(event.target.value)
            }
          />
        </div>
      </div>
      <div className="col-12 col-md-6 col-xl-3">
        <div className="input-block local-forms">
          <label>
            Founded Year (optional) <span className="login-danger"></span>
          </label>
          <input
            className="form-control"
            type="number"
            placeholder="ex: 2005"
            required
            value={year}
            onChange={(event) => handleFoundedYear(Number(event.target.age))}
          />
        </div>
      </div>
    </div>
  );
}

export default PharmacyDetails;
