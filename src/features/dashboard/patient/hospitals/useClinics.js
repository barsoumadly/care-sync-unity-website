import { useQuery } from "@tanstack/react-query";
import { getClinics } from "../../../../services/clinic";

function useClinics() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["clinics"],
    queryFn: getClinics,
  });
  return { data, isLoading, error };
}

export default useClinics;
