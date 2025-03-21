import { useQuery } from "@tanstack/react-query";

function useAppointmentDetails(appointmentId) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["appointmentDetails", appointmentId],
    // queryFn:
  });
  return { data, error, isLoading };
}

export default useAppointmentDetails;
