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

/* 

import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProviders";
import { useQuery } from "@tanstack/react-query";

const useAddClass = () => {
    const { user } = useContext(AuthContext)
    // console.log(user.email);
    const { refetch, data: addclass = [], isLoading } = useQuery({
        queryKey: ["addclass", user?.email],
        queryFn: async () => {
            const res = await fetch(`https://ass-12-server-eight.vercel.app/addclasses?email=${user.email}`)
            return res.json()
        },
    })
    return [addclass, refetch, isLoading]
};

export default useAddClass;



*/