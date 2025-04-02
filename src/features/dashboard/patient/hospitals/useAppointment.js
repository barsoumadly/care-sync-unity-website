import { useMutation, useQueryClient } from "@tanstack/react-query";
import { bookAppointment } from "../../../../services/appointment";
import toast from "react-hot-toast";

function useAppointment() {
  const queryClient = useQueryClient();
  const { mutate: bookNewAppointment, isLoading } = useMutation({
    mutationFn: bookAppointment,
    onSuccess: () => {
      toast.success("Appointment successfully booked");
      queryClient.invalidateQueries({ queryKey: ["appointment"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return {
    bookNewAppointment,
    isLoading,
  };
}

export default useAppointment;
