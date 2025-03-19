import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addDoctor } from "../../../../services/clinic";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useAddDoctor() {
  const queryClient = useQueryClient();

  const { mutate: addNewDoctor, isDataLoading } = useMutation({
    mutationFn: addDoctor,
    onSuccess: () => {
      toast.success("Doctor successfully added");
      queryClient.invalidateQueries({ queryKey: ["doctorList"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return {
    addNewDoctor,
    isDataLoading,
  };
}

export default useAddDoctor;
