import { useQuery } from "@tanstack/react-query";
import { getPrescriptionsByPatientId } from "../../../../services/prescription";

function usePrescription() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["prescription"],
    queryFn: getPrescriptionsByPatientId,
  });
  return { data, isLoading, error };
}

export default usePrescription;
