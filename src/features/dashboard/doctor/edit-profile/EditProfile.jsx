import { useState } from "react";
import PageWrapper from "../PageWrapper";
import PageCard from "../PageCard";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import DashboardPageHeader from "../DashboardPageHeader";
import DoctorPersonalDetails from "../complete-profile/PersonalDetails";
import DoctorProfessionalDetails from "../complete-profile/DoctorProfessionalDetails";
import DoctorProfilePhoto from "../complete-profile/DoctorProfilePhoto";

function EditProfile() {
  const [profilePhoto, setProfilePhoto] = useState();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      education: [{}],
      experience: [{}],
      certification: [{}],
    },
  });

  function handleCancel() {
    setProfilePhoto(
      "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
    );
    reset();
  }

  function onSubmit(data) {
    console.log({
      ...data,
      profilePhoto,
    });
    toast.success("Edit Successfully");
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
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </PageWrapper>
  );
}

export default EditProfile;
