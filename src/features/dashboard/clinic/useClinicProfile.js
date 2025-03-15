import { useQuery } from "@tanstack/react-query";

function useClinicProfile() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["clinicProfile"],
    // queryFn:
  });
  return { data, error, isLoading };
}

export default useClinicProfile;
