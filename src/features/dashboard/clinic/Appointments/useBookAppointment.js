import { useMutation } from "@tanstack/react-query";
import { bookAppointment } from "../../../../services/clinic";

function useBookAppointment() {
  const { mutate: BookNewAppointment, isLoading } = useMutation({
    mutationFn: bookAppointment,
    onSuccess: () => {
      toast.success("Appointment successfully booked");
    },
    onError: (err) => toast.error(err.message),
  });

  return {
    BookNewAppointment,
    isLoading,
  };
}

export default useBookAppointment;
