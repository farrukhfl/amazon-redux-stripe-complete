'use client'
import React from "react";
import Subtotal from "./Subtotal";
import { useRouter } from "next/navigation";


const ProceedToBuy = ({
  length,
  totalPrice,
}: {
  length: number;
  totalPrice: number;
}) => {
    const router = useRouter()
  return (
    <div className="w-[20%] h-fit border border-gray-300 ml-4">
      <div className="p-4">
        <p>
          <span className="text-[#007600] font-medium">
            Your order is eligible for free delivery.
          </span>
          Choose Free delivery option at checkout
        </p>
        <Subtotal left={true} length={length} totalPrice={totalPrice} />
        <button onClick={()=> {
            router.push("/checkout")
        }} className="bg-[#FFD814] w-full py-1 rounded-md shadow-md my-3">
          Proceed to Buy
        </button>
      </div>
    </div>
  );
};

export default ProceedToBuy;
