import { useMutation } from "@tanstack/react-query";

function useWritingAnalysis() {
  const { mutate, isLoading, error } = useMutation({
    // mutationFn: ({ analysisData }) => writingAnalysis(analysisData),
    onSuccess: () => {
      toast.success("Prescription successfully saved");
    },
    onError: (err) => toast.error(err.message),
  });
  return { mutate, isLoading, error };
}
export default useWritingAnalysis;
