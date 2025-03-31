import { useQuery } from "@tanstack/react-query";
import { getDoctorSchedule } from "../../../../services/doctor";

function useScheduleList() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["ScheduleList"],
    queryFn: getDoctorSchedule,
  });

  return { data, error, isLoading };
}

export default useScheduleList;
