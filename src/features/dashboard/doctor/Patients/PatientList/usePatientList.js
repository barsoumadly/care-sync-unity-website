import { useQuery } from "@tanstack/react-query";

function usePatientList() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["patientList"],
    // queryFn:
  });
  return { data, error, isLoading };
}

export default usePatientList;
