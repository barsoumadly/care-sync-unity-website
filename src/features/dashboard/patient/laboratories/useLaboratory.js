import { useQuery } from "@tanstack/react-query";
import { getLaboratoryList } from "../../../../services/laboratory";

function useLaboratory() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["LaboratoryListData"],
    queryFn: getLaboratoryList,
  });

  return {
    data,
    isLoading,
    error,
  };
}

export default useLaboratory;
