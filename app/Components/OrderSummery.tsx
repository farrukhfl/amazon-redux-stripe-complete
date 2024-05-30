import { useAppSelector } from "@/lib/supabase/hooks/redux";
import { supabase } from "@/lib/supabase/products";
import { getCart } from "@/redux/cartSlice";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import React from "react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY!);

const OrderSummery = ({totalPrice}: {totalPrice: number}) => {
  const cart = useAppSelector(getCart);
  
  

  const createStripeSession = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const stripe = await stripePromise;

    const checkoutSession = await axios.post("/api/checkout-sessions", {
      items: cart,
      email: user?.email,
    });
    const result = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result?.error) {
      console.log(result.error.message);
    }
  };

  return (
    <div className="border border-gray p-4 mt-5 h-fit">
      <div>
        <h1 className="font-bold text-xl mb-5">Order summery</h1>
        <div className="text-xs">
          <div className="flex items-center justify-between">
            <p>items</p>
            <p>7809</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Delivery:</p>
            <p>₹40.00</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Total:</p>
            <p>₹789.00</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Promotion Applied:</p>
            <p>-₹40.00</p>
          </div>
          <div className="flex text-2xl font-bold text-[#B12704] py-2 border-t border-b border-gray-300 my-1">
            <h1>Order Total</h1>
            <h1>{totalPrice}</h1>
          </div>
        </div>
        <button
          onClick={createStripeSession}
          className="bg-[#FFD814] w-full rounded-md px-4 py-1 my-3"
        >
          Place your order now
        </button>
      </div>
    </div>
  );
};

export default OrderSummery;
