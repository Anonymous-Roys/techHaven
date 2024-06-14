import Stripe from "stripe";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";
import { CartProductType } from "@/app/product/[productId]/ProductDetails";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2022-11-15",
});

const calculateOrderAmount = (items: CartProductType[]) => {
    const totalPrice = items.reduce((acc, item) => {
        const itemTotal =  item.price * item.quantity;
         return acc + itemTotal
    }, 0);
    return totalPrice
}
// loading a user
export async function POST(reques: Request){
    // const body = await reques.json();
    // const {items} = body;
    // const amount = calculateOrderAmount(items)
    // const paymentIntent = await stripe.paymentIntents.create({
    //     amount,
    //     currency: "usd",
    //     payment_method_types: ["card"],
    //     confirm: true,
    // });
    const currentUser = await getCurrentUser()

    if(!currentUser){
        return NextResponse.json({error: "Unauthorized"}, {status:401});
    }
}
