import { useQuery } from "@tanstack/react-query";
import { getDoctorList } from "../../../../services/clinic";

function useDoctorList() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["doctorList"],
    queryFn: getDoctorList,
  });
  return { data, error, isLoading };
}

export default useDoctorList;
