"use client";
import { useAppDispatch, useAppSelector } from "@/lib/supabase/hooks/redux";
import {
  clearAllCart,
  decrementQuantity,
  getCart,
  incrementQuantity,
  removeFromTheCart,
} from "@/redux/cartSlice";
import Image from "next/image";
import React from "react";
import Subtotal from "./Subtotal";

const ShoppingCart = ({cart, totalPrice}: {cart: any, totalPrice: number}) => {
const dispatch = useAppDispatch()
  return (
    <div className="w-[70%]">
      <div className="flex items-center justify-between border-b border-gray-300 py-5">
        <h1 className="font-bold text-2xl">Shopping cart</h1>
        <h1 className="font-medium">Price</h1>
      </div>

      {cart.map((product: any) => {
        return (
          <div key={product.id} className="py-4 flex justify-between  border-b border-gray-200">
            <div className="flex">
              <div>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={100}
                  height={100}
                />
              </div>
              <div className="ml-4">
                <h1 className="font-medium">{product.title}</h1>
                <p className="text-[#007600] font-bold my-1 text-xs">
                  In stock
                </p>
                <h1
                  onClick={() => {
                    dispatch(removeFromTheCart(product.id));
                  }}
                  className="font-bold text-red-600 cursor-pointer"
                >
                  Remove
                </h1>
                <div className="flex items-center text-xl my-4 font-medium justify-between bg-gray-200 w-fit rounded-md px-5 py-1">
                  <div
                    className="cursor-pointer mr-4"
                    onClick={() => {
                      product.quantity > 1 &&
                        dispatch(decrementQuantity(product));
                    }}
                  >
                    -
                  </div>
                  <div>{product.quantity}</div>
                  <div
                    className="cursor-pointer ml-4"
                    onClick={() => {
                      dispatch(incrementQuantity(product));
                    }}
                  >
                    +
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h1 className="font-bold text-xl">${product.price}</h1>
              <p className="text-xs py-1">
                M.R.P.: <span className="line-through">3,999</span>
              </p>
            </div>
          </div>
        );
      })}
      <h1 onClick={() => dispatch(clearAllCart())} className="text-red-600 font-bold cursor-pointer py-2">CLEAR ALL</h1>
      <Subtotal left={false} length={cart.length} totalPrice={totalPrice} />
    </div>
  );
};

export default ShoppingCart;
