import { useQuery } from "@tanstack/react-query";
import { getAppointmentDetails } from "../../../../services/clinic";

function useAppointmentDetails(appointmentId) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["appointmentDetails", appointmentId],
    queryFn: () => getAppointmentDetails(appointmentId),
  });
  return { data, error, isLoading };
}

export default useAppointmentDetails;
