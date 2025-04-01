import { useQuery } from "@tanstack/react-query";
import { getDoctorById } from "../../../../services/doctor";

function useDoctor(id) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["doctor", id],
    queryFn: () => getDoctorById(id),
  });
  return { data, isLoading, error };
}

export default useDoctor;
