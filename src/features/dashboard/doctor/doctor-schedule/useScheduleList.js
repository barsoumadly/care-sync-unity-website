import { useQuery } from "@tanstack/react-query";

function useScheduleList() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["ScheduleList"],
    // queryFn: getAppointmentList,
  });

  return { data, error, isLoading };
}

export default useScheduleList;
