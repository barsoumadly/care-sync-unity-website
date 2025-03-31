import { useQuery } from "@tanstack/react-query";
import { getAppointmentsById } from "../../../../../services/doctor";

function usePatientList(id) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["patientList", id],
    queryFn: () => getAppointmentsById(id),
  });
  return { data, error, isLoading };
}

export default usePatientList;
