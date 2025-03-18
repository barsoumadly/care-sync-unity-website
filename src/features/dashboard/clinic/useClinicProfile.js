import { useQuery } from "@tanstack/react-query";
import { getClinicProfile } from "../.././../services/clinic";

function useClinicProfile() {
  const { data, isLoading } = useQuery({
    queryKey: ["clinicProfile"],
    queryFn: getClinicProfile,
  });
  return { data, isLoading };
}

export default useClinicProfile;
