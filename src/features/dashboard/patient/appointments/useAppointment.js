import { useQuery } from "@tanstack/react-query";
import { getAppointmentsByPatient } from "../../../../services/appointment";

function useAppointment() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["appointment"],
    queryFn: getAppointmentsByPatient,
  });
  return { data, isLoading, error };
}

export default useAppointment;
