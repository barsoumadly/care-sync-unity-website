import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateClinicProfile } from "../../../../services/clinic";
import { updateProfilePhoto } from "../../../../services/user";

function useEditClinicProfile() {
  const { mutate: updateProfile, isDataLoading } = useMutation({
    mutationFn: ({ clinicData }) => updateClinicProfile(clinicData),
    onSuccess: () => {
      toast.success("Your profile successfully saved");
    },
    onError: (err) => toast.error(err.message),
  });

  const { mutate: UpdateProfilePhoto, isPhotoLoading } = useMutation({
    mutationFn: ({ profilePhoto }) => updateProfilePhoto(profilePhoto),
  });

  return {
    updateProfile,
    UpdateProfilePhoto,
    isDataLoading,
    isPhotoLoading,
  };
}

export default useEditClinicProfile;
