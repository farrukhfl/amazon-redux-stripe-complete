import Image from "next/image";
import React from "react";
import Ratings from "./shared/Ratings";
import { useAppDispatch } from "@/lib/supabase/hooks/redux";
import { addToCart } from "@/redux/cartSlice";
import { useRouter } from "next/navigation";

const CategorywiseProduct = ({ product }: { product: any }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  return (
    <div className="border border-gray-300 p-2 bg-white">
      <h1 className="font-bold">{product.category}</h1>
      <div className="mt-2 h-[250px] overflow-hidden flex items-center justify-center">
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className="p-6"
        />
      </div>
      <div>
        <h1>{product.title}</h1>
        <Ratings ratings={product.rating} />
      </div>
      <div className="my-2">
        <button
          onClick={() => {
            dispatch(addToCart(product));
            router.push("/cart");
          }}
          className="w-full py-2 rounded-md bg-[#FFD814]"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default CategorywiseProduct;
