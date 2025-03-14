import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePatientProfile } from "../../../../services/patient";
import { updateProfilePhoto } from "../../../../services/user";

function useEditDoctorProfile() {
  const queryClient = useQueryClient();

  const { mutate: updateDoctorProfile, isDataLoading } = useMutation({
    // mutationFn: ({ doctorData }) => updateDoctorProfile(doctorData),
    onSuccess: () => {
      toast.success("Your profile successfully saved");
      queryClient.invalidateQueries({ queryKey: ["doctorProfile"] });
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
