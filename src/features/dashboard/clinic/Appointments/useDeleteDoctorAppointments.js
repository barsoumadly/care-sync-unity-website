import { useMutation } from "@tanstack/react-query";

function useDeleteDoctorAppointments() {
  const { mutate: updateClinicProfile, isDataLoading } = useMutation({
    // mutationFn: ({ appointmentId }) => updateClinicProfile(appointmentId),
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

export default useDeleteDoctorAppointments;
