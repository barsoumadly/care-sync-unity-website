import { useQuery } from "@tanstack/react-query";
import { getAppointmentList } from "../../../../services/clinic";

function useAppointmentList() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["AppointmentList"],
    queryFn: getAppointmentList,
  });

  return { data, error, isLoading };
}

export default useAppointmentList;
