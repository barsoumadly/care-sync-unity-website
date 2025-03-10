import { useMemo } from "react";
import { useForm } from "react-hook-form";

function telephoneCheck(p) {
  var phoneRe = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  var digits = p.replace(/\D/g, "");

  return phoneRe.test(digits) ? true : false;
}

function DoctorPersonalDetails({
  doctorData,
  onChangeDoctorData,
  onChangePageNumber,
}) {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: useMemo(() => {
      return doctorData;
    }, [doctorData]),
  });
  const { errors } = formState;

  const performSubmit = function (data) {
    onChangeDoctorData({ ...doctorData, ...data });
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
                placeholder="ex: 0123456789"
                {...register("phoneNumber", {
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
          <div className="col-12 col-md-6 col-xl-3">
            <div className="input-block local-forms">
              <label>
                Age <span className="login-danger">*</span>
              </label>
              <input
                className="form-control"
                type="number"
                placeholder="ex: 30"
                {...register("age", { required: "This field is required" })}
              />
              <span className="error-message ">{errors?.age?.message}</span>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <div className="input-block local-forms">
              <label>
                Gender <span className="login-danger">*</span>
              </label>
              <select
                className="form-control"
                {...register("gender", { required: "This field is required" })}
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
          <div className="col-12 col-md-6 col-xl-3">
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
                <option value="orthopedics">Orthopedics</option>
                <option value="radiology">Radiology</option>
                <option>Dentist</option>
              </select>
            </div>{" "}
            <span className="error-message ">{errors?.gender?.message}</span>
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

export default DoctorPersonalDetails;
