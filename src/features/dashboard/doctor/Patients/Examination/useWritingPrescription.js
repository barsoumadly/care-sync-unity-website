import { useMutation } from "@tanstack/react-query";

function useWritingPrescription() {
  const { mutate, isLoading, error } = useMutation({
    // mutationFn: ({ prescriptionData }) => writingPrescription(prescriptionData),
    onSuccess: () => {
      toast.success("Prescription successfully saved");
    },
    onError: (err) => toast.error(err.message),
  });
  return { mutate, isLoading, error };
}
export default useWritingPrescription;
