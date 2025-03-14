import { useQuery } from "@tanstack/react-query";

function useClinicList() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["clinicList"],
    // queryFn:
  });
  return { data, error, isLoading };
}

export default useClinicList;
