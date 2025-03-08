import { useMutation } from "@tanstack/react-query";
import { updatePatientProfile } from "../../../../services/patient";
import { updateProfilePhoto } from "../../../../services/user";

function useEditProfile() {
  const { mutate: UpdatePatient, isDataLoading } = useMutation({
    mutationFn: ({ patientData }) => updatePatientProfile(patientData),
  });

  const { mutate: UpdateProfilePhoto, isPhotoLoading } = useMutation({
    mutationFn: ({ profilePhoto }) => updateProfilePhoto(profilePhoto),
  });

  return { UpdatePatient, UpdateProfilePhoto, isDataLoading, isPhotoLoading };
}

export default useEditProfile;
