import { useQuery } from "@tanstack/react-query";

function usePatientData() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["patientData"],
    // queryFn:
  });
  return { data, error, isLoading };
}

export default usePatientData;
