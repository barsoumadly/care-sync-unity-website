import { useQuery } from "@tanstack/react-query";
import { getDoctorProfile } from "../../../../services/doctor";

function useAppointments() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["AppointmentList"],
    // queryFn: ,
  });

  return { data, error, isLoading };
}

export default useAppointments;
