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
import ClinicDetails from "./ClinicDetails";
import useEditClinicProfile from "./useEditClinicProfile";
import useUser from "../../useUser";
import PageWrapper from "../../PageWrapper";
import PageCard from "../../PageCard";

function CompleteClinicProfile({ clinicData }) {
  const [images, setImage] = useState([]);
  const [avatar, setAvatar] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
  );

  const [selectedCity, setSelectedCity] = useState();
  const [selectedArea, setSelectedArea] = useState();

  const { userLogout, isProfileCompleted } = useAuth();
  const { data: userData } = useUser(clinicData?.adminId);
  const { updateProfile, UpdateProfilePhoto } = useEditClinicProfile();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    setValue("name", clinicData?.name);
    setValue("phone", clinicData?.phone);
    setValue("founded", clinicData?.founded.split("T")[0]);
    setValue("biography", clinicData?.biography);

    setSelectedCity(clinicData?.address.city);
    setSelectedArea(clinicData?.address.state);
    setValue("street", clinicData?.address.street);

    if (clinicData) setImage(clinicData?.photos);
    if (userData) setAvatar(userData?.profilePhoto?.url);
  }, [clinicData, userData]);

  // Upload Submit Form
  function onSubmit(data) {
    const formData = {
      ...data,
      images,
      city: selectedCity,
      state: selectedArea,
    };
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
      <PageWrapper type={!isProfileCompleted}>
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <PageCard>
              <ClinicDetails
                register={register}
                errors={errors}
                selectedCity={selectedCity}
                setSelectedCity={setSelectedCity}
                selectedArea={selectedArea}
                setSelectedArea={setSelectedArea}
              />
            </PageCard>

            <PageCard>
              <ClinicAvatar avatar={avatar} handleAvatar={setAvatar} />
            </PageCard>

            <PageCard>
              <ClinicImages images={images} setImage={setImage} />
            </PageCard>

            <div className="col-12">
              <div className="doctor-submit text-end mb-4">
                <Button type="submit" name="Sumbit" />
                <Button type="button" name="Cancel" onClick={handleCancel} />
              </div>
            </div>
          </form>
        </div>
      </PageWrapper>
    </>
  );
}

export default CompleteClinicProfile;
