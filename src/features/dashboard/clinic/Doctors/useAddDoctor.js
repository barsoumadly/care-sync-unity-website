import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addDoctor } from "../../../../services/clinic";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useAddDoctor() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: addNewDoctor, isDataLoading } = useMutation({
    mutationFn: ({ doctorData }) => addDoctor(doctorData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["doctorList"] });

      toast.success("Doctor successfully added");
      navigate("/clinic/doctor-list");
    },
    onError: (err) => toast.error(err.message),
  });

  return {
    addNewDoctor,
    isDataLoading,
  };
}

export default useAddDoctor;
