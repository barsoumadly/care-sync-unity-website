import { useQuery } from "@tanstack/react-query";
import { getClinicProfile } from "../.././../services/clinic";

function useClinicProfile() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["clinicProfile"],
    queryFn: getClinicProfile,
  });
  return { data, error, isLoading };
}

export default useClinicProfile;
