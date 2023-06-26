import { useContext } from "react"
import { AuthContext } from "../provider/AuthProviders"
import { baseUrl } from "../baseUrl/baseUrl"
import { useQuery } from "@tanstack/react-query"

const useOrders = () => {
    const { user } = useContext(AuthContext)
    const { refetch, data: orders = [], isLoading } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(`${baseUrl}/orders?email=${user?.email}`)
            return res.json()
        },
    })
    return [orders, refetch, isLoading]
}

export default useOrders;