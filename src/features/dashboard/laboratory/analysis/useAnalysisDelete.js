import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { deleteAnalysis } from "../../../../services/analysis";
import toast from "react-hot-toast";

function useMedicineDelete() {
  const queryClient = useQueryClient();
  const { mutate: removeAnalysis, isDataLoading } = useMutation({
    mutationFn: ({ id }) => deleteAnalysis(id),
    onSuccess: () => {
      toast.success("Analysis deleted sucessfully");
      queryClient.invalidateQueries({ queryKey: ["analysisList"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return {
    removeAnalysis,
    isDataLoading,
  };
}

export default useMedicineDelete;
