import { useQuery } from "@tanstack/react-query";
const useAllproducts = () => {
    const { refetch, data: allProducts = [], isLoading } = useQuery({
        queryKey: ["allProducts",],
        queryFn: async () => {
            const res = await fetch(`dakeDb.json`)
            return res.json()
        },
    })
    return [allProducts, refetch, isLoading]
};
export default useAllproducts;
