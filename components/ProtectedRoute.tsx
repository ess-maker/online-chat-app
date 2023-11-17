'use client'

import { UserAuth } from "@/context/AuthContextProvider";
import { useRouter } from "next/navigation";

const ProtectedRoute = ({ children }:{ children:any }) => {
    const router = useRouter();
    const { user } = UserAuth();

    if (!user) {
        router.push('/')
    }
  return children
}

export default ProtectedRoute