import { useMutation } from "@tanstack/react-query";

function useEditAppointment() {
  const { mutate: EditPatientAppointment, isLoading } = useMutation({
    // mutationFn: editAppointment,
    onSuccess: () => {
      toast.success("Appointment successfully deleted");
    },
    onError: (err) => toast.error(err.message),
  });

  return {
    EditPatientAppointment,
    isLoading,
  };
}

export default useEditAppointment;
