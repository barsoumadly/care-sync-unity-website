import { useQuery } from "@tanstack/react-query";
import { getAppointments } from "../../../../services/doctor";

function useAppointments() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["AppointmentList"],
    queryFn: getAppointments,
  });

  return { data, error, isLoading };
}

export default useAppointments;
