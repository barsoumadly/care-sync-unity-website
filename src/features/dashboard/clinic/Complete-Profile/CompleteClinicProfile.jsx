import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { IoArrowBackOutline } from "react-icons/io5";
import { useAuth } from "../../../../context/AuthContext";
import { logout } from "../../../../services/auth";
import Header from "../../../../ui/Header";
import useLocation from "../../useLocation";
import Button from "../reusable/Button";
import ClinicImages from "./ClinicImages";
import ClinicAvatar from "./ClinicAvatar";
import useEditClinicProfile from "./useEditClinicProfile";

function telephoneCheck(p) {
  var phoneRe = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  var digits = p.replace(/\D/g, "");

  return phoneRe.test(digits) ? true : false;
}

function CompleteClinicProfile({ clinicData }) {
  const [images, setImage] = useState([]);
  const [avatar, setAvatar] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
  );
  const [cities, setCities] = useState();
  const [areas, setAreas] = useState();
  const [selectedCity, setSelectedCity] = useState(clinicData?.selectedCity);
  const [selectedArea, setSelectedArea] = useState(clinicData?.selectedArea);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm();
  const { data, isLoading } = useLocation();
  const { userLogout, isProfileCompleted } = useAuth();
  const { updateProfile, UpdateProfilePhoto } = useEditClinicProfile();
  const navigate = useNavigate();

  useEffect(() => {
    setValue("clinicName", clinicData?.clinicName);
    setValue("mobile", clinicData?.mobile);
    setValue("founded", clinicData?.founded);
    setValue("address", clinicData?.address);
  }, [clinicData]);

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

  // Upload Submit Form
  function onSubmit(data) {
    const formData = { ...data, images, selectedCity, selectedArea };
    updateProfile({ clinicData: formData });
    UpdateProfilePhoto({ profilePhoto: avatar });
    console.log(formData);
    navigate("/clinic/dashboard");
  }

  function handleCancel() {
    setImage([]);
    reset();
  }
  return (
    <>
      {!isProfileCompleted && <Header />}
      <div
        className="page-wrapper"
        style={{ marginLeft: `${isProfileCompleted ? "" : "0px"}` }}
      >
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
                  <li className="breadcrumb-item active">
                    {isProfileCompleted ? "Edit " : "Complete "}Profile
                  </li>
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
                          <label>Founded</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="ex: 1996"
                            {...register("founded")}
                          />
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
                            <option value="Select City" selected disabled>
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
                          <label>Start Biography</label>
                          <textarea
                            className="form-control"
                            rows={3}
                            cols={30}
                            {...register("biography")}
                          />
                        </div>
                      </div>

                      <ClinicAvatar avatar={avatar} handleAvatar={setAvatar} />

                      <ClinicImages images={images} setImage={setImage} />

                      <div className="col-12">
                        <div className="doctor-submit text-end">
                          <Button type="submit" name="Sumbit" />
                          <Button
                            type="button"
                            name="Cancel"
                            onClick={handleCancel}
                          />
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
