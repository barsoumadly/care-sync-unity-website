import { useQuery } from "@tanstack/react-query";

function usePatientAppointmentList() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["patientAppointmentList"],
    // queryFn:
  });
  return { data, error, isLoading };
}

export default usePatientAppointmentList;
