import { useQuery } from "@tanstack/react-query";
import { getAnalysisOrdersByUserId } from "../../../../services/analysisOrders";

function useAnalysisOrders() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["analysis-list"],
    queryFn: getAnalysisOrdersByUserId,
  });

  return {
    data,
    isLoading,
    error,
  };
}

export default useAnalysisOrders;
