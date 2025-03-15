import { useQuery } from "@tanstack/react-query";

function useDoctorData(doctorId) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["doctorDetails", doctorId],
    // queryFn: ,
  });
  return { data, error, isLoading };
}

export default useDoctorData;
