import { useQuery } from "@tanstack/react-query";

function useDoctorList() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["doctorList"],
    // queryFn: ,
  });
  return { data, error, isLoading };
}

export default useDoctorList;
