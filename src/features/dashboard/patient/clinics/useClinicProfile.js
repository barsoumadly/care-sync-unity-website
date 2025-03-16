import { useQuery } from "@tanstack/react-query";
import { getClinic } from "../../../../services/clinic";

function useClinicProfile(id) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["clinic", id],
    queryFn: () => getClinic(id),
  });
  return { data, isLoading, error };
}

export default useClinicProfile;
