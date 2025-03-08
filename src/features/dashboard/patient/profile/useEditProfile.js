import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePatientProfile } from "../../../../services/patient";
import { updateProfilePhoto } from "../../../../services/user";

function useEditProfile() {
  const queryClient = useQueryClient();

  const { mutate: UpdatePatient, isDataLoading } = useMutation({
    mutationFn: ({ patientData }) => updatePatientProfile(patientData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["patientData"] });
    },
  });

  const { mutate: UpdateProfilePhoto, isPhotoLoading } = useMutation({
    mutationFn: ({ profilePhoto }) => updateProfilePhoto(profilePhoto),
  });

  return { UpdatePatient, UpdateProfilePhoto, isDataLoading, isPhotoLoading };
}

export default useEditProfile;
