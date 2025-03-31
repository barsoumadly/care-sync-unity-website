import { useQuery } from "@tanstack/react-query";
import { getMyClinics } from "../../../../../services/doctor";

function useClinicList() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["clinicList"],
    queryFn: getMyClinics,
  });
  return { data, error, isLoading };
}

export default useClinicList;
