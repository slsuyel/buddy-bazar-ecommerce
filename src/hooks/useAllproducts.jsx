import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "../baseUrl/baseUrl";
const useAllproducts = () => {
    const { refetch, data: allProducts = [], isLoading } = useQuery({
        queryKey: ["allProducts",],
        queryFn: async () => {
            const res = await fetch(`${baseUrl}/products`)
            return res.json()
        },
    })
    return [allProducts, refetch, isLoading]
};
export default useAllproducts;
