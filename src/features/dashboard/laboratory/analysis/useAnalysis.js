import { useQuery } from "@tanstack/react-query";
import { getAnalysisList } from "../../../../services/analysis";

function useAnalysis() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["analysisList"],
    queryFn: getAnalysisList,
  });
  return { data, isLoading, error };
}

export default useAnalysis;
