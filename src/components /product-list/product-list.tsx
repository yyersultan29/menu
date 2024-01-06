"use client"

import { motion } from "framer-motion"

import { sections } from "@/mock/data"
import { Product } from "../product/product"


export default function ProductList() {

  return (

    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >

      {sections.map((section, index) => (
        <div
          key={`${section.id}_${index}`}
          className="w-full flex justify-center flex-col items-center gap-[10px]"
        >
          <div id={section.id} className="">
            {section.name}
          </div>

          {section.products.map((product, index) => (
            <Product
              key={`${product.id}_${index}`}
              product={product}
            />
          ))}
        </div>
      ))}

    </motion.div>

  )
}