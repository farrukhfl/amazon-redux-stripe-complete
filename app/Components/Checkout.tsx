"use client";
import Image from "next/image";
import React from "react";
import amazonLogo from "../../public/amazon-logo.png";
import { FaLock } from "react-icons/fa6";
import { useAppSelector } from "@/lib/supabase/hooks/redux";
import { getCart } from "@/redux/cartSlice";
import OrderSummery from "./OrderSummery";
import DeliveryAddress from "./DeliveryAddress";

const Checkout = () => {
  const cart = useAppSelector(getCart);
  let totalPrice = 0;
  cart.forEach((item: any) => {
    totalPrice += item.price * item.quantity;
  });

  return (
    <div className="absolute top-0 w-full p-10 bg-white">
      <div className="w-[70%] mx-auto border-b border-gray-400 pb-5 flex items-center justify-between">
        <div>
          <Image src={amazonLogo} alt="logo" width={150} height={150} />
        </div>
        <div>
          <h1 className="font-bold text-2xl">Checkout</h1>
        </div>
        <div className="text-gray-400">
          <FaLock size={"30px"} />
        </div>
      </div>

      <div className="flex justify-between w-[70%] mx-auto">
        <DeliveryAddress />
        <OrderSummery totalPrice={totalPrice} />
      </div>
    </div>
  );
};

export default Checkout;
