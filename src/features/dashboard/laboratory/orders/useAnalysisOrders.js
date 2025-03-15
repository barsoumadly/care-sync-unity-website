import { useQuery } from "@tanstack/react-query";
import { getAnalysisOrdersByLaboratoryId } from "../../../../services/analysisOrders";

function useAnalysisOrders() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["analysis-orders"],
    queryFn: getAnalysisOrdersByLaboratoryId,
  });
  return { data, isLoading, error };
}

export default useAnalysisOrders;
