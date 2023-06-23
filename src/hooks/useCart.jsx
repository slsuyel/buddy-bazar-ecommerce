import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProviders';
import { baseUrl } from '../baseUrl/baseUrl';

const useCart = () => {
    const { user } = useContext(AuthContext)
    const { refetch, data: cart = [],isLoading } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`${baseUrl}/carts?email=${user?.email}`)
            return res.json()
        },
    })
    return [cart, refetch,isLoading]

}
export default useCart;