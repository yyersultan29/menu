"use client"

import { useDebounce } from "@/app/utils/hooks/useDebounce";
import { useEffect, useState } from "react";

const CartItem = () => {

  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search);


  useEffect(() => {
    //  TODO: here you can make request 
  }, [debouncedSearch])



  return (
    <div className="h-[1000px] p-10">
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
    </div>
  )
}

export default CartItem;