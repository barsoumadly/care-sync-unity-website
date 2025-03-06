import { useState } from "react";
import DynamicField from "./complete-profile/DynamicField";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function EditProfile() {
  const [education, setEducation] = useState();
  const [experience, setExperience] = useState();
  const [certification, setCertification] = useState();
  const [profilePhoto, setProfilePhoto] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
  );

  const { register, handleSubmit, reset } = useForm();

  const handleImage = function (event) {
    const photo = URL.createObjectURL(event.target.files[0]);
    setProfilePhoto(photo);
  };

  function handleCancel() {
    setCertification();
    setExperience();
    setEducation();
    reset();
  }

  function onSubmit(data) {
    console.log({
      ...data,
      profilePhoto,
      education,
      experience,
      certification,
    });
    toast.success("Edit Successfully");
  }
  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="doctors.html">Doctors </a>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right" />
                  </li>
                  <li className="breadcrumb-item active">Edit Doctor</li>
                </ul>
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
                      <div class="col-12">
                        <div class="form-heading">
                          <h4>Doctor Details</h4>
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
                          <select
                            className="form-control"
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
                      <div className="col-12 col-md-6 col-xl-3">
                        <div className="input-block local-forms">
                          <label>
                            Specialization{" "}
                            <span className="login-danger">*</span>
                          </label>
                          <select
                            className="form-control select"
                            {...register("specialization")}
                            required
                          >
                            <option value="Specialization">
                              Specialization
                            </option>
                            <option value="orthopedics">Orthopedics</option>
                            <option value="radiology">Radiology</option>
                            <option>Dentist</option>
                          </select>
                        </div>{" "}
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
                            required
                            {...register("biography")}
                          />
                        </div>
                      </div>

                      {/* ----------------------DoctorProfessionalDetails--------------------------- */}
                      <>
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
                            serviceList={
                              education
                                ? education
                                : [{ education: "", education_details: "" }]
                            }
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
                            serviceList={
                              experience
                                ? experience
                                : [{ experience: "", experience_details: "" }]
                            }
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
                            serviceList={
                              certification
                                ? certification
                                : [
                                    {
                                      certification: "",
                                      certification_details: "",
                                    },
                                  ]
                            }
                            setServiceList={setCertification}
                          />
                        </div>
                      </>

                      {/* ------------------------DoctorProfilePhoto------------------------- */}
                      <div className="row">
                        <div className="col-12" style={{ marginTop: "50px" }}>
                          <div className="form-heading">
                            <h4>
                              <span style={{ fontSize: "15px" }}>
                                Upload Your Profile Photo (optional)
                              </span>
                            </h4>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-5">
                          <div className="input-block local-top-form">
                            <label className="local-top">
                              Avatar <span className="login-danger"></span>
                            </label>
                            <div className="settings-btn upload-files-avator">
                              <input
                                type="file"
                                accept="image/*"
                                name="image"
                                id="file"
                                onChange={handleImage}
                                className="hide-input"
                                data-cf-modified-f4b406440a9d28b1c089eaf4-=""
                              />
                              <label htmlFor="file" className="upload">
                                Choose File
                              </label>
                            </div>
                            <div className="upload-images upload-size">
                              <img src={profilePhoto} alt="Image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ------------------------------------------------- */}

                      <div className="col-12">
                        <div className="doctor-submit text-end">
                          <button
                            type="submit"
                            className="btn btn-primary submit-form me-2"
                          >
                            Submit
                          </button>
                          <button
                            type="button"
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
    </div>
  );
}

export default EditProfile;
