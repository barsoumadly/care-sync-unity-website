import { useForm } from "react-hook-form";
import { useAuth } from "../../../context/AuthContext";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { logout } from "../../../services/auth";
import { useEffect, useState } from "react";
import Header from "../../../ui/Header";
import toast from "react-hot-toast";
import useLocation from "../patient/profile/useLocation";

function telephoneCheck(p) {
  var phoneRe = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  var digits = p.replace(/\D/g, "");

  return phoneRe.test(digits) ? true : false;
}

function CompleteClinicProfile() {
  const [images, setImage] = useState([]);
  const [cities, setCities] = useState();
  const [areas, setAreas] = useState();
  const [selectedCity, setSelectedCity] = useState();
  const [selectedArea, setSelectedArea] = useState();
  const { register, handleSubmit, reset, formState, getValues } = useForm();
  const { data, isLoading } = useLocation();
  const { userLogout } = useAuth();
  const { errors } = formState;
  useEffect(
    function () {
      if (data) {
        setCities(data);
      }
    },
    [data]
  );
  function hanbleSelection(event) {
    const seletcity = event.target.value;
    setSelectedCity(seletcity);
    setAreas(cities?.filter((city) => city.code === seletcity));
  }

  // Upload images
  const uploadImage = async (e) => {
    const files = e.target.files;
    setImage((images) => [...images, files[0]]);
  };

  function deleteHandler(image) {
    setImage((images) => images.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  // Upload Submit Form
  function onSubmit(data) {
    const formData = { ...data, images, selectedCity, selectedArea };
    console.log(formData);
    telephoneCheck(data.mobile);
  }

  function handleCancel() {
    setImage([]);
    reset();
  }
  return (
    <>
      <Header />
      <div className="page-wrapper" style={{ marginLeft: "0px" }}>
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-7 col-6">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a>Clinic </a>
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
                          <h4>Clinic Details</h4>
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="input-block local-forms">
                          <label>
                            Clinic Name <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="ex: MedLink"
                            {...register("clinicName", {
                              required: "This field is required",
                            })}
                          />{" "}
                          <span className="error-message ">
                            {errors?.clinicName?.message}
                          </span>
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="input-block local-forms">
                          <label>
                            Mobile <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="ex: +20123456789"
                            {...register("mobile", {
                              required: "This field is required",
                              validate: (value) =>
                                telephoneCheck(value) ||
                                "Your Phone number isn't Vaild",
                            })}
                          />
                          <span className="error-message ">
                            {errors?.mobile?.message}
                          </span>
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="input-block local-forms">
                          <label>
                            Founded <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="ex: 1996"
                            {...register("founded", {
                              required: "This field is required",
                            })}
                          />
                          <span className="error-message ">
                            {errors?.founded?.message}
                          </span>
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-3">
                        <div className="input-block local-forms">
                          <label>
                            City
                            <span className="login-danger">*</span>
                          </label>
                          <select
                            className="form-control select"
                            value={selectedCity}
                            onChange={hanbleSelection}
                          >
                            <option value="Select City" disabled>
                              Select City
                            </option>

                            {cities?.map((city) => (
                              <option value={city.code} key={city.id}>
                                {city.code}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-3">
                        <div className="input-block local-forms">
                          <label>
                            Area
                            <span className="login-danger">*</span>
                          </label>
                          <select
                            className="form-control select"
                            value={selectedArea}
                            onChange={(event) =>
                              setSelectedArea(event.target.value)
                            }
                          >
                            <option value="Select Area" selected disabled>
                              Select Area
                            </option>

                            {areas?.[0].cityDataModels.map((area) => (
                              <option
                                value={area.namePrimaryLang}
                                key={area.id}
                              >
                                {area?.namePrimaryLang}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-6">
                        <div className="input-block local-forms">
                          <label>
                            Address
                            <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder={
                              "101, Elanxa Apartments, 340 N Madison Avenue"
                            }
                            {...register("address", {
                              required: "This field is required",
                            })}
                          />
                          <span className="error-message ">
                            {errors?.address?.message}
                          </span>
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
                            {...register("biography", {
                              required: "This field is required",
                            })}
                          />
                          <span className="error-message ">
                            {errors?.biography?.message}
                          </span>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-6">
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
                              onChange={uploadImage}
                              className="hide-input"
                              data-cf-modified-f4b406440a9d28b1c089eaf4-=""
                            />
                            <label htmlFor="file" className="upload">
                              Choose File
                            </label>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                            }}
                          >
                            {images.map((image, i) => (
                              <ShowImages
                                image={image}
                                key={i}
                                deleteImage={deleteHandler}
                              />
                            ))}
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
    </>
  );
}

export default CompleteClinicProfile;

function ShowImages({ image, deleteImage }) {
  return (
    <div className="upload-images upload-size" style={{ marginLeft: "30px" }}>
      <img src={`${URL.createObjectURL(image)}`} alt="Image" />
      <button
        onClick={() => deleteImage(image)}
        type="button"
        className="btn-icon logo-hide-btn"
        style={{ border: "0", background: "#fff" }}
      >
        <i className="feather-x-circle" />
      </button>
    </div>
  );
}
