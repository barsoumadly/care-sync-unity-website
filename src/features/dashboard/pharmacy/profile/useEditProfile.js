import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePharmacyProfile } from "../../../../services/pharmacy";
import { updateProfilePhoto } from "../../../../services/user";

function useEditProfile() {
  const queryClient = useQueryClient();

  const { mutate: UpdatePharmacy, isDataLoading } = useMutation({
    mutationFn: ({ pharmacyData }) => updatePharmacyProfile(pharmacyData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pharmacyData"] });
    },
  });

  const { mutate: UpdateProfilePhoto, isPhotoLoading } = useMutation({
    mutationFn: ({ profilePhoto }) => updateProfilePhoto(profilePhoto),
  });

  return {
    UpdatePharmacy,
    UpdateProfilePhoto,
    isDataLoading,
    isPhotoLoading,
  };
}

export default useEditProfile;
