import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { logout } from "../../../services/auth";
import { useAuth } from "../../../context/AuthContext";

function telephoneCheck(p) {
  var phoneRe = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  var digits = p.replace(/\D/g, "");
  alert(
    phoneRe.test(digits)
      ? "😁Your Phone number is Vaild"
      : "❌Your Phone number isn't Vaild"
  );
}

function CompleteDoctorProfile() {
  const [education, setEducation] = useState();
  const [experience, setExperience] = useState();
  const [certification, setCertification] = useState();
  const { register, handleSubmit, reset } = useForm();
  const { userLogout } = useAuth();

  function onSubmit(data) {
    const formData = {
      ...data,
      education: education,
      experience: experience,
      certification: certification,
    };
    console.log(formData, formData.mobile);
    telephoneCheck(formData.mobile);
  }

  function handleCancel() {
    setEducation([{}]);
    setExperience([{}]);
    setCertification([{}]);
    reset();
  }
  return (
    <>
      <div className="page-wrapper" style={{ marginLeft: "0px" }}>
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-7 col-6">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a>Doctors </a>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right" />
                  </li>
                  <li className="breadcrumb-item active">Complete Profile</li>
                </ul>
              </div>
              <div className="col-sm-5 col-6 text-end">
                <Link
                  onClick={() => {
                    userLogout();
                    logout();
                  }}
                  class="btn btn-primary btn-rounded"
                >
                  <IoArrowBackOutline /> Logout
                </Link>
              </div>
            </div>
          </div>

          {/* /Page Header */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                      <div className="col-12">
                        <div className="form-heading">
                          <h4>Doctor Details</h4>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="input-block local-forms">
                          <label>
                            Specialization{" "}
                            <span className="login-danger">*</span>
                          </label>
                          <select
                            className="form-control select"
                            {...register("specialization")}
                          >
                            <option>Select Specialization</option>
                            <option>Orthopedics</option>
                            <option>Radiology</option>
                            <option>Dentist</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-3">
                        <div className="input-block local-forms">
                          <label>
                            Mobile <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="+1 23 456890"
                            {...register("mobile")}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-3">
                        <div className="input-block local-forms ">
                          <label>
                            Age
                            <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control datetimepicker"
                            type="number"
                            {...register("age")}
                          />
                        </div>
                      </div>
                      {/* Gender */}
                      <div className="col-12 col-md-6 col-xl-2">
                        <div className="input-block select-gender">
                          <label className="gen-label">
                            Gender<span className="login-danger">*</span>
                          </label>
                          <div className="form-check-inline">
                            <label className="form-check-label">
                              <input
                                type="radio"
                                name="gender"
                                value={"male"}
                                className="form-check-input"
                                defaultChecked=""
                                {...register("gender")}
                              />
                              Male
                            </label>
                          </div>
                          <div className="form-check-inline">
                            <label className="form-check-label">
                              <input
                                type="radio"
                                name="gender"
                                value={"female"}
                                className="form-check-input"
                                {...register("gender")}
                              />
                              Female
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12">
                        <div className="input-block local-forms">
                          <label>
                            Start Biography{" "}
                            <span className="login-danger">*</span>
                          </label>
                          <textarea
                            className="form-control"
                            rows={3}
                            cols={30}
                            defaultValue={
                              "101, Elanxa Apartments, 340 N Madison Avenue"
                            }
                            {...register("biography")}
                          />
                        </div>
                      </div>
                      {/* ------------------- */}

                      <div className="col-12">
                        <div className="form-heading">
                          <h4>Professional Details</h4>
                        </div>
                      </div>
                      {/* Education */}
                      <div style={{ padding: "20px" }}>
                        <div className="col-12">
                          <div
                            className="form-heading"
                            style={{ marginBottom: "20px" }}
                          >
                            <h5>Education</h5>
                          </div>
                        </div>
                        <DynamicField
                          fields={{
                            f1: "Education",
                            f2: "Education Details",
                          }}
                          serviceList={education}
                          setServiceList={setEducation}
                        />
                      </div>
                      {/* Experience */}
                      <div style={{ padding: "20px" }}>
                        <div className="col-12">
                          <div
                            className="form-heading"
                            style={{ margin: "20px 0" }}
                          >
                            <h5>Experience</h5>
                          </div>
                        </div>
                        <DynamicField
                          fields={{
                            f1: "Experience",
                            f2: "Experience Details",
                          }}
                          serviceList={experience}
                          setServiceList={setExperience}
                        />{" "}
                      </div>
                      {/* Certification  */}
                      <div style={{ padding: "20px" }}>
                        <div className="col-12">
                          <div
                            className="form-heading"
                            style={{ margin: "20px 0" }}
                          >
                            <h5>Certification</h5>
                          </div>
                        </div>
                        <DynamicField
                          fields={{
                            f1: "Certification",
                            f2: "Certification Details",
                          }}
                          serviceList={certification}
                          setServiceList={setCertification}
                        />
                      </div>
                      {/* ------------------- */}
                      <div
                        className="col-12 col-md-6 col-xl-6"
                        style={{ marginTop: "30px" }}
                      >
                        <div className="input-block local-top-form">
                          <label className="local-top">
                            Avatar <span className="login-danger">*</span>
                          </label>
                          <div className="settings-btn upload-files-avator">
                            <input
                              type="file"
                              accept="image/*"
                              name="image"
                              id="file"
                              // onchange="if (!window.__cfRLUnblockHandlers) return false; loadFile(event)"
                              className="hide-input"
                              data-cf-modified-f4b406440a9d28b1c089eaf4-=""
                            />
                            <label htmlFor="file" className="upload">
                              Choose File
                            </label>
                          </div>
                          <div className="upload-images upload-size">
                            <img src="assets/img/favicon.png" alt="Image" />
                            <a
                              href="javascript:void(0);"
                              className="btn-icon logo-hide-btn"
                            >
                              <i className="feather-x-circle" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="doctor-submit text-end">
                          <button
                            type="submit"
                            className="btn btn-primary submit-form me-2"
                          >
                            Submit
                          </button>
                          <button
                            type="submit"
                            className="btn btn-primary cancel-form"
                            onClick={handleCancel}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompleteDoctorProfile;

function DynamicField({ fields, serviceList = [{}], setServiceList }) {
  // const [serviceList, setServiceList] = useState([{}]);

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, {}]);
  };

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  return (
    <>
      {serviceList.map((singleService, index) => (
        <div key={index} className="row">
          <div className="col-12 col-md-12 col-xl-4">
            <div className="input-block local-forms">
              <label>
                {fields.f1}
                {index > 0 ? `_${index + 1}` : ""}
                <span className="login-danger">*</span>
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="M.B.B.S, M.S."
                required
                name={fields.f1.toLowerCase()}
                onChange={(e) => handleServiceChange(e, index)}
                value={singleService.duration}
              />
            </div>
          </div>
          <div className="col-12 col-md-12 col-xl-4">
            <div className="input-block local-forms">
              <label>
                {fields.f2} {index > 0 ? `_${index + 1}` : ""}
              </label>
              <input
                className="form-control"
                type="text"
                name={fields.f2.toLowerCase().split(" ").join("_")}
                onChange={(e) => handleServiceChange(e, index)}
                value={singleService.duration}
              />
            </div>
          </div>
          {serviceList.length - 1 === index && (
            <div className="col-12 col-md-6 col-xl-2">
              <div className="doctor-submit">
                <button
                  type="button"
                  onClick={handleServiceAdd}
                  className="btn btn-primary submit-list-form me-2"
                >
                  Add
                </button>
              </div>
            </div>
          )}
          {serviceList.length !== 1 && (
            <div
              className="col-12 col-md-6 col-xl-2"
              style={{ marginBottom: "30px" }}
            >
              <div className="doctor-submit">
                <button
                  type="button"
                  onClick={() => handleServiceRemove(index)}
                  className="btn btn-primary submit-list-form me-2"
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
