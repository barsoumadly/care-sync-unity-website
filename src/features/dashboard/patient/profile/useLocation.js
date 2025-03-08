import { useQuery } from "@tanstack/react-query";

function useLocation() {
  const { data, isLoading } = useQuery({
    queryKey: ["cities"],
    queryFn: getCities,
  });
  return { data, isLoading };
}

async function getCities() {
  const response = await fetch(
    "https://atfawry.fawrystaging.com/ECommerceWeb/api/lookups/govs"
  );
  return await response.json();
}
export default useLocation;
