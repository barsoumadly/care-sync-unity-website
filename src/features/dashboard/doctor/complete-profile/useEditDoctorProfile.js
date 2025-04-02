import { useMutation } from "@tanstack/react-query";
import updateDoctorProfile from "../../../../services/doctor";
import toast from "react-hot-toast";
function useEditDoctorProfile() {
  const { mutate: updateDoctor, isDataLoading } = useMutation({
    mutationFn: updateDoctorProfile,
    onSuccess: () => {
      toast.success("Your profile successfully saved");
    },
    onError: (err) => toast.error(err.message),
  });

  const { mutate: UpdateProfilePhoto, isPhotoLoading } = useMutation({
    // mutationFn: ({ profilePhoto }) => updateProfilePhoto(profilePhoto),
  });

  return {
    updateDoctor,
    UpdateProfilePhoto,
    isDataLoading,
    isPhotoLoading,
  };
}

export default useEditDoctorProfile;
