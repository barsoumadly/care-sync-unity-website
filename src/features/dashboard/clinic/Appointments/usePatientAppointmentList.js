import { useQuery } from "@tanstack/react-query";
import { getPatientList } from "../../../../services/clinic";

function usePatientAppointmentList(doctorId) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["patientAppointmentList", doctorId],
    queryFn: () => getPatientList(doctorId),
  });
  return { data, error, isLoading };
}

export default usePatientAppointmentList;
