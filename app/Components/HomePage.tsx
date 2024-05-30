"use client";
import { useSupabase } from "@/lib/supabase/hooks/useSupabase";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import CategorywiseProduct from "./CategorywiseProduct";

const HomePage = () => {
  const { mensProduct, getMensClothing, womensProduct, getWomensClothing } =
    useSupabase();

  useEffect(() => {
    getMensClothing();
    getWomensClothing();
  }, [getMensClothing, getWomensClothing]);
  return (
    <div>
      <Image
        style={{
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
        }}
        src={
          "https://images-eu.ssl-images-amazon.com/images/G/31/img24/AmazonPay/Travel/PC_Hero_BAU/IF_PC_Hero_3000x1200._CB583399235_.jpg"
        }
        alt="banner"
        width={10000}
        height={1000}
      />
      <div className="w-[80%] mx-auto grid grid-cols-4 gap-2 relative -top-64">
        {mensProduct.map((product: any) => {
          return (
            <div key={product.id}>
              <CategorywiseProduct product={product} />
            </div>
          );
        })}
        {womensProduct.map((product: any) => {
          return (
            <div key={product.id}>
              <CategorywiseProduct product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
