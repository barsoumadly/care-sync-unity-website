import { useQuery } from "@tanstack/react-query";

function useDoctorProfile() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["doctorProfile"],
    // queryFn:
  });
  return { data, error, isLoading };
}

export default useDoctorProfile;
