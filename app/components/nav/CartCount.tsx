"use client"

import { useCart } from "@/app/hooks/useCart";
import { useRouter } from "next/router";
import { CiShoppingCart } from "react-icons/ci";

const CartCount = () => {
    const {cartTotalQty} = useCart()
    const router = useRouter()
    return ( <div 
    className="relative cursor-pointer"
    onClick={()=>router.push("/cart")}>
        <div>
            <CiShoppingCart/>
        </div>
    </div> );
}
 
export default CartCount;