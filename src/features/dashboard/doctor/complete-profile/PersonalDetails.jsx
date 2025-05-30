import { useMemo } from "react";
import { useForm } from "react-hook-form";
import MedicalSpecialties from "../../../../data/MedicalSpecialties";
function telephoneCheck(p) {
  var phoneRe = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  var digits = p.replace(/\D/g, "");

  return phoneRe.test(digits) ? true : false;
}

function DoctorPersonalDetails({
  profilePhoto = "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg",
  setProfilePhoto,
  onChangePageNumber,
  type,
  register,
  errors,
}) {
  if (typeof profilePhoto !== "string" && profilePhoto) {
    profilePhoto = URL.createObjectURL(profilePhoto);
  }
  const performSubmit = function (event) {
    setProfilePhoto(event.target.files[0]);
  };
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="form-heading">
            <h4>
              <span style={{ fontSize: "15px" }}>
                Enter Your Personal Details
              </span>
            </h4>
          </div>
        </div>
        {type === "edit" && (
          <div className="col-md-12">
            <div className="profile-img-wrap">
              <img className="inline-block" src={profilePhoto} alt="user" />
              <div className="fileupload btn">
                <span className="btn-text">edit</span>
                <input
                  className="upload"
                  type="file"
                  accept="image/*"
                  name="image"
                  id="file"
                  onChange={performSubmit}
                />
              </div>
            </div>
          </div>
        )}
        <div className={`${type === "edit" ? "profile-basic" : ""}`}>
          <div className="row">
            <div className="col-12 col-md-4 col-xl-5">
              <div className="input-block local-forms">
                <label>
                  Phone Number <span className="login-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="ex: 0123456789"
                  {...register("phone", {
                    required: "This field is required",
                    validate: (value) =>
                      telephoneCheck(value) || "Your Phone number isn't Vaild",
                  })}
                />
                <span className="error-message ">
                  {errors?.phoneNumber?.message}
                </span>
              </div>
            </div>
            <div className="col-12 col-md-5 col-xl-5">
              <div className="input-block local-forms">
                <label className="focus-label">
                  Birth Date<span className="login-danger">*</span>
                </label>
                <input
                  className="form-control floating datetimepicker"
                  type="date"
                  data-date-format="DD MMMM YYYY"
                  {...register("dateOfBirth", {
                    required: "This field is required",
                  })}
                />

                <span className="error-message ">
                  {errors?.dateOfBirth?.message}
                </span>
              </div>
            </div>
            <div className="col-12 col-md-4 col-xl-5">
              <div className="input-block local-forms">
                <label>
                  Gender <span className="login-danger">*</span>
                </label>
                <select
                  className="form-control"
                  {...register("gender", {
                    required: "This field is required",
                  })}
                >
                  <option value="select-option" disabled>
                    Select Option
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <span className="error-message ">{errors?.gender?.message}</span>
            </div>
            <div className="col-12 col-md-5 col-xl-5">
              <div className="input-block local-forms">
                <label>
                  Specialization <span className="login-danger">*</span>
                </label>
                <select
                  className="form-control select"
                  {...register("specialization", {
                    required: "This field is required",
                  })}
                >
                  <option value="Specialization" disabled>
                    Specialization
                  </option>
                  {MedicalSpecialties?.map((specialty, index) => (
                    <option value={specialty} key={index}>
                      {specialty}
                    </option>
                  ))}
                </select>
              </div>{" "}
              <span className="error-message ">{errors?.gender?.message}</span>
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-12">
        <div className="input-block local-forms">
          <label>
            Start Biography <span className="login-danger">*</span>
          </label>
          <textarea
            className="form-control"
            rows={3}
            cols={30}
            {...register("biography", { required: "This field is required" })}
          />
          <span className="error-message ">{errors?.biography?.message}</span>
        </div>
      </div>

      {type !== "edit" && (
        <div className="col-12">
          <div className="doctor-submit text-end">
            <button
              type="button"
              className="btn btn-primary submit-form me-2"
              onClick={() =>
                onChangePageNumber?.((pageNumber) => pageNumber + 1)
              }
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default DoctorPersonalDetails;
