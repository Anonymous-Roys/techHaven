'use client';

import SetColor from "@/app/components/products.tsx/SetColor";
import { Rating } from "@mui/material";
import { useCallback, useState } from "react";




interface ProductDetailsProps{
    product:any;
}

export type CartProductType={
    id : string,
    name: string,
    description: string,
    category: string,
    brand:string,
    selectedImg: SelectedImgType,
    quantity: number,
    price:number
}

export type SelectedImgType={
    color:string,
    colorcode:string,
    image: string
}



const Horizontal = () =>{
    return <hr className="w-[30% my-2]"/>
}


const ProductDetails:React.FC<ProductDetailsProps> = ({ product }) => {

    const [cartProduct,setCartProduct]=
    useState<CartProductType>({
        id : product.id,
        name: product.name,
        description: product.describtion,
        category: product.category,
        brand:product.brand,
        selectedImg: {...product.images[0]},
        quantity: 2,
        price:product.price,     
    });

    //calc product rating
    const productRating = product.reviews.reduce((acc:number, item:any) => item.rating + acc,0)/product.reviews.length;



    cont handleColorSelect = useCallback((value: SelectedImgType) => {
        
    },
[cartProduct.selectedImg])

    return ( 
        <div className="grid grid-cols-1
        md:grid-cols-2 gap-12
        ">
            <div>Images</div>
            <div className="flex flex-col gap-1 
            text-slate-500 text-sm
            ">
                <h2 className="text-3xl font-medium 
                text-slate-700">{ product.name }</h2>
                <div className="flex items-center gap-2">
                    <Rating value={productRating} readOnly/>
                    <div>{ product.reviews.length } reviews</div>
                </div>
                <Horizontal />
                <div className="text-justify">{ product.description }</div>
                <Horizontal />
                <div>
                    <span className="font-semibold">CATEGORY:</span>
                    { product.category}
                </div>
                <div>
                    <span className="font-semibold">BRAND:</span>
                    { product.brand}
                </div>
                <div className={product.inStock? "text-teal-400":"text-rose-400"}>
                    { product.inStock ? 'In Stock':'Out Of Stock' }
                </div>
                <Horizontal />

                <SetColor images={[product.images]} 
                cartProduct={cartProduct}
                 handleColorSelect={ handleColorSelect }/>

                <Horizontal />
                <div>QUANTITY</div>
                <Horizontal />
                <div>Add To Cart</div>
            </div>
        </div>
     );
}
 
export default ProductDetails;