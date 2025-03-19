import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteDoctor } from "../../../../services/clinic";
import toast from "react-hot-toast";

function useDeleteDoctor() {
  const queryClient = useQueryClient();

  const { mutate: deleteDoctorData } = useMutation({
    mutationFn: deleteDoctor,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["doctorList"] });
      toast.success("Doctor successfully added");
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteDoctorData };
}

export default useDeleteDoctor;
