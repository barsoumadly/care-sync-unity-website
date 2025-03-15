import { useMutation } from "@tanstack/react-query";

function useBookAppointment() {
  const { mutate: updateClinicProfile, isDataLoading } = useMutation({
    // mutationFn: ({ appointmentData }) => updateClinicProfile(appointmentData),
    onSuccess: () => {
      toast.success("Appointment successfully deleted");
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

export default useBookAppointment;
