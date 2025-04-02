import { useMutation } from "@tanstack/react-query";
import { updateDoctorProfile } from "../../../../services/doctor";
import { updateProfilePhoto } from "../../../../services/user";
import toast from "react-hot-toast";

function useEditDoctorProfile() {
  const { mutate: updateDoctor, isDataLoading } = useMutation({
    mutationFn: updateDoctorProfile,
    onSuccess: () => {
      toast.success("Your profile successfully saved");
    },
    onError: (err) => toast.error(err.message),
  });

  const { mutate: UpdatePhoto, isPhotoLoading } = useMutation({
    mutationFn: updateProfilePhoto,
  });

  return {
    updateDoctor,
    UpdatePhoto,
    isDataLoading,
    isPhotoLoading,
  };
}

export default useEditDoctorProfile;
