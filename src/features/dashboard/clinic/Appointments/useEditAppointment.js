import { useMutation } from "@tanstack/react-query";
import { updateAppointment } from "../../../../services/clinic";
import toast from "react-hot-toast";

function useEditAppointment() {
  const { mutate: EditPatientAppointment, isLoading } = useMutation({
    mutationFn: updateAppointment,
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
