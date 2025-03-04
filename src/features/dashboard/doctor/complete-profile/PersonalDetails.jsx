import { useMemo } from "react";
import { useForm } from "react-hook-form";

function DoctorPersonalDetails({
  doctorData,
  onChangeDoctorData,
  onChangePageNumber,
}) {
  const { register, handleSubmit } = useForm({
    defaultValues: useMemo(() => {
      return doctorData;
    }, [doctorData]),
  });

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
                required
                {...register("phoneNumber")}
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
                {...register("age")}
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <div className="input-block local-forms">
              <label>
                Gender <span className="login-danger">*</span>
              </label>
              <select className="form-control" required {...register("gender")}>
                <option value="select-option" disabled>
                  Select Option
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <div className="input-block local-forms">
              <label>
                Specialization <span className="login-danger">*</span>
              </label>
              <select
                className="form-control select"
                {...register("specialization")}
                required
              >
                <option value="Specialization">Specialization</option>
                <option value="orthopedics">Orthopedics</option>
                <option value="radiology">Radiology</option>
                <option>Dentist</option>
              </select>
            </div>{" "}
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
              required
              {...register("biography")}
            />
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
