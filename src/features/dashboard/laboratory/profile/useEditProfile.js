import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateLaboratoryProfile } from "../../../../services/laboratory";
import { updateProfilePhoto } from "../../../../services/user";

function useEditProfile() {
  const queryClient = useQueryClient();

  const { mutate: UpdateLaboratory, isDataLoading } = useMutation({
    mutationFn: ({ laboratoryData }) => updateLaboratoryProfile(laboratoryData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["laboratoryData"] });
    },
  });

  const { mutate: UpdateProfilePhoto, isPhotoLoading } = useMutation({
    mutationFn: ({ profilePhoto }) => updateProfilePhoto(profilePhoto),
  });

  return {
    UpdateLaboratory,
    UpdateProfilePhoto,
    isDataLoading,
    isPhotoLoading,
  };
}

export default useEditProfile;
