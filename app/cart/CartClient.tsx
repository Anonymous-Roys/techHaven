import Link from "next/link";
import { useCart } from "../hooks/useCart";
import { MdArrowBack } from "react-icons/md";
import Heading from "../components/Heading";

const CartClient = () => {
    const {cartProducts} =  useCart()

    if(!cartProducts || cartProducts.length === 0) {
        <div className="
        flex flex-col items-center">
            <div className="text-2xl">Your cart is empty</div>
            <div>
                <Link href={"/"} className="
                text-slate-500
                flex items-center
                gap-1 mt-2">
                    <MdArrowBack/>
                    <span>Start Shopping</span>
                </Link>
            </div>
        </div>
    }
    return ( <div>
        <Heading title="Shopping Cart" center/>
        <div className="
        grid grid-cols-5
        text-xs
        gap-4
        pb-2
        items-center">
            <div className="span-2">PRODUCT</div>
            <div>PRICE</div>
            <div>QUANTITY</div>
            <div>TOTAL</div>
        </div>
    </div> );
}

export default CartClient;