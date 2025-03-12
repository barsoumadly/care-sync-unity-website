import { useQuery } from "@tanstack/react-query";
import { getAnalysisListById } from "../../../../services/analysis";

function useLaboratory(laboratoryId) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["analysis-list", laboratoryId],
    queryFn: () => getAnalysisListById(laboratoryId),
  });

  return {
    data,
    isLoading,
    error,
  };
}

export default useLaboratory;
