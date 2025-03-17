import { useMutation, useQueryClient } from "@tanstack/react-query";

function useDeleteDoctor() {
  const queryClient = useQueryClient();

  const { mutate: addNewDoctor, isDataLoading } = useMutation({
    // mutationFn: ({ doctorId }) => deleteDoctor(doctorId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["doctorList"] });
      toast.success("Doctor successfully added");
    },
    onError: (err) => toast.error(err.message),
  });

  return {
    addNewDoctor,
    isDataLoading,
  };
}

export default useDeleteDoctor;
