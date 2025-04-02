import { useQuery } from "@tanstack/react-query";
import { getPatientById } from "../../../../../services/patient";
function usePatientData(id) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["patientData", id],
    queryFn: () => getPatientById(id),
  });
  return { data, error, isLoading };
}

export default usePatientData;
