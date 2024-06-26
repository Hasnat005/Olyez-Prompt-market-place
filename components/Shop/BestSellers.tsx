import { styles } from "@/utils/styles";
import React from "react";
import SellerCard from "./SellerCard";
type Props = {};

export default function BestSellers({}: Props) {
  return (
    <div className="mb-10 cursor-pointer">
      <h1 className={`${styles.heading} p-2 font-Monserrat mb-5`}>
        Top Sellers
      </h1>

      <div className="flex flex-wrap">
        <SellerCard />
        <SellerCard />
        <SellerCard />
      </div>
    </div>
  );
}
