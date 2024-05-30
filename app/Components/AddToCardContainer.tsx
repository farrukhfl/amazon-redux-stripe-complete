'use client'
import React from "react";
import prime from "../../public/prime-logo.png";
import Image from "next/image";
import { useAppDispatch } from "@/lib/supabase/hooks/redux";
import { addToCart } from "@/redux/cartSlice";
import { useRouter } from "next/navigation";
const AddToCardContainer = ({product}: {product: any}) => {

    const dispatch = useAppDispatch()
    const router = useRouter()
  return (
    <div className="border border-gray-300 rounded-md h-fit">
      <div className="p-4">
        <Image src={prime} width={40} height={40} alt="prime" />
      </div>
      <div className="p-4">
        <h1>
          <span className="text-[#147C8F]">FREE delivery</span> Thursday, 21
          March. <span className="text-[#147C8F]">Details</span>
        </h1>
        <h1 className="mt-4">
          Or fastest delivery Tomorrow, 20 March. Order within 15 hrs 53 mins.
          Details
        </h1>
        <p className="text-[#147C8F] my-2">
          Deliver to Surendra - Jalandhar 144411‌
        </p>

        <button className="bg-[#FEDB14] w-full rounded-full py-1" 
        onClick={() => {dispatch(addToCart(product))
            router.push("/cart")
        }}>
          Add to cart
        </button>
        <button className="bg-[#FFA41C] my-2 w-full rounded-full py-1">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default AddToCardContainer;
