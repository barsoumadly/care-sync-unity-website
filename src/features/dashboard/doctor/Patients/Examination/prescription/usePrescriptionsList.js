import { useQuery } from "@tanstack/react-query";
import { getPrescriptionsList } from "../../../../../../services/prescription";

function usePrescriptionsList(id) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["prescriptionsList"],
    queryFn: () => getPrescriptionsList(id),
  });

  return { data, error, isLoading };
}

export default usePrescriptionsList;
