import { useQuery } from "@tanstack/react-query";
import { getDoctorProfile } from "../../../../services/doctor";

function useProfile() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["doctorProfile"],
    queryFn: getDoctorProfile,
  });

  return { data, error, isLoading };
}

export default useProfile;
