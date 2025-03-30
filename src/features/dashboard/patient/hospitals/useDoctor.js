import { useQuery } from "@tanstack/react-query";
import { getDoctorProfile } from "../../../../services/doctor";

function useDoctor(id) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["doctor", id],
    queryFn: () => getDoctorProfile(id),
  });
  return { data, isLoading, error };
}

export default useDoctor;
