import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { deleteMedicine } from "../../../../services/medicine";
import toast from "react-hot-toast";

function useMedicineDelete() {
  const queryClient = useQueryClient();
  const { mutate: removeMedicine, isDataLoading } = useMutation({
    mutationFn: ({ id }) => deleteMedicine(id),
    onSuccess: () => {
      toast.success("Medicine deleted sucessfully");
      queryClient.invalidateQueries({ queryKey: ["medicineList"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return {
    removeMedicine,
    isDataLoading,
  };
}

export default useMedicineDelete;
