import { useMutation } from "@tanstack/react-query";

function useBookAppointment() {
  const { mutate: BookNewAppointment, isLoading } = useMutation({
    // mutationFn: bookAppointment,
    onSuccess: () => {
      toast.success("Appointment successfully deleted");
    },
    onError: (err) => toast.error(err.message),
  });

  return {
    BookNewAppointment,
    isLoading,
  };
}

export default useBookAppointment;
