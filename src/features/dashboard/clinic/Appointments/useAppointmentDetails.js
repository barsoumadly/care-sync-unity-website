import { useQuery } from "@tanstack/react-query";

function useAppointmentDetails() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["appointmentDetails"],
    // queryFn:
  });
  return { data, error, isLoading };
}

export default usePatientList;
