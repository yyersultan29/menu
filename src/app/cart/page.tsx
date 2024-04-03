import CartItem from "@/components /cart/CartItem";
import { Layout } from "@/layout/layout";
import { useDebounce } from "../utils/hooks/useDebounce";
import { useEffect, useState } from "react";

export default function Page() {

  return (
    <Layout>
      <div>



        <CartItem />

      </div>
    </Layout>
  )
}