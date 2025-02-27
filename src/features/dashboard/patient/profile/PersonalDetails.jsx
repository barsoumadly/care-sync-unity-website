import { useState } from "react";

function PersonalDetails({
  phoneNumber,
  age,
  gender,
  handlePhoneNumber,
  handleAge,
  handleGender,
}) {
  return (
    <div className="row">
      <div className="col-12">
        <div className="form-heading">
          <h4>Personal Details</h4>
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
            Age <span className="login-danger">*</span>
          </label>
          <input
            className="form-control"
            type="number"
            placeholder="ex: 30"
            required
            value={age}
            onChange={(event) =>
              Number(event.target.value) > 0 &&
              Number(event.target.value) < 100 &&
              handleAge(Number(event.target.age))
            }
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
            value={gender}
            required
            onChange={(event) => handleGender(event.target.value)}
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
  );
}

export default PersonalDetails;
