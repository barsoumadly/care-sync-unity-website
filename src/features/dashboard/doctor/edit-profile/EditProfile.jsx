import { useEffect, useState } from "react";
import PageWrapper from "../../PageWrapper";
import PageCard from "../../PageCard";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import DashboardPageHeader from "../DashboardPageHeader";
import DoctorPersonalDetails from "../complete-profile/PersonalDetails";
import DoctorProfessionalDetails from "../complete-profile/DoctorProfessionalDetails";
import DoctorProfilePhoto from "../complete-profile/DoctorProfilePhoto";
import useDoctorProfile from "./useDoctorProfile";
import useProfile from "../doctor-profile/useProfile";
import { useAuth } from "../../../../context/AuthContext";
import useEditDoctorProfile from "../complete-profile/useEditDoctorProfile";

function EditProfile() {
  const [profilePhoto, setProfilePhoto] = useState();

  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  const { data: doctorData } = useProfile();
  const { user: userData } = useAuth();
  const { updateDoctor, UpdatePhoto } = useEditDoctorProfile();

  useEffect(() => {
    const education = doctorData?.education.map((doc) => {
      return {
        ...doc,
        startingDate: doc.startingDate?.split("T")[0],
        endingDate: doc.endingDate?.split("T")[0],
      };
    });

    const experience = doctorData?.experience.map((doc) => {
      return {
        ...doc,
        startingDate: doc.startingDate?.split("T")[0],
        endingDate: doc.endingDate?.split("T")[0],
      };
    });

    setValue("biography", doctorData?.biography);
    setValue("gender", doctorData?.gender);
    setValue("phone", doctorData?.phone);
    setValue("dateOfBirth", doctorData?.dateOfBirth?.split("T")[0]);
    setValue("specialization", doctorData?.specialization);
    setValue("certification", doctorData?.certification);
    if (education) setValue("education", education);
    if (experience) setValue("experience", experience);

    if (userData) setProfilePhoto(userData?.profilePhoto);
  }, [doctorData, userData]);

  function handleCancel() {
    setProfilePhoto(
      "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
    );
    reset();
  }

  function onSubmit(data) {
    updateDoctor(data);
    UpdatePhoto(profilePhoto);
  }
  return (
    <PageWrapper>
      {/* /Page Profile */}
      <DashboardPageHeader
        pageList={[{ name: "Dashboard", link: "/doctor/dashboard" }]}
        currentPage="Edit Profile"
      />
      {/* /Page contant */}
      <div className="row">
        <form onSubmit={handleSubmit(onSubmit)}>
          <PageCard>
            <DoctorPersonalDetails
              register={register}
              errors={errors}
              profilePhoto={profilePhoto}
              setProfilePhoto={setProfilePhoto}
              type="edit"
            />
          </PageCard>

          <DoctorProfessionalDetails
            register={register}
            control={control}
            errors={errors}
            type="edit"
          />

          <div className="col-12 mb-5">
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
                Remove
              </button>
            </div>
          </div>
        </form>
      </div>
    </PageWrapper>
  );
}

export default EditProfile;
