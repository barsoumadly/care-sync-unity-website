import { useMutation } from "@tanstack/react-query";

function useEditDoctorProfile() {
  const { mutate: updateDoctorProfile, isDataLoading } = useMutation({
    // mutationFn: ({ doctorData }) => updateDoctorProfile(doctorData),
    onSuccess: () => {
      toast.success("Your profile successfully saved");
    },
    onError: (err) => toast.error(err.message),
  });

  const { mutate: UpdateProfilePhoto, isPhotoLoading } = useMutation({
    // mutationFn: ({ profilePhoto }) => updateProfilePhoto(profilePhoto),
  });

  return {
    updateDoctorProfile,
    UpdateProfilePhoto,
    isDataLoading,
    isPhotoLoading,
  };
}

export default useEditDoctorProfile;
