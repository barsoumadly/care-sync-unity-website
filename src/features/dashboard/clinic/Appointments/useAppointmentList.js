import { useQuery } from "@tanstack/react-query";

function useAppointmentList() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["AppointmentList"],
    // queryFn:
  });
  return { data, error, isLoading };
}

export default useAppointmentList;
