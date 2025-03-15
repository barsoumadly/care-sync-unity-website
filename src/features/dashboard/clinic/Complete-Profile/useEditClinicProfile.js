import { useMutation } from "@tanstack/react-query";

function useEditClinicProfile() {
  const { mutate: updateClinicProfile, isDataLoading } = useMutation({
    // mutationFn: ({ clinicData }) => updateClinicProfile(doctorData),
    onSuccess: () => {
      toast.success("Your profile successfully saved");
    },
    onError: (err) => toast.error(err.message),
  });

  const { mutate: UpdateProfilePhoto, isPhotoLoading } = useMutation({
    // mutationFn: ({ profilePhoto }) => updateProfilePhoto(profilePhoto),
  });

  return {
    updateClinicProfile,
    UpdateProfilePhoto,
    isDataLoading,
    isPhotoLoading,
  };
}

export default useEditClinicProfile;
