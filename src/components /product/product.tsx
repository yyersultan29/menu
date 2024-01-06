// "use client"
import { FC, Fragment, useState } from "react"

import Image from "next/image"

import { ProductProps } from "./types";
import EmptyImg from "@/assets/img/empty-img.png";
import BottomSheet from "../bottom-sheet/bottom-sheet";

export const Product: FC<ProductProps> = ({ product }) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenBottomSheet = () => setIsOpen(true);

  const handleCloseBottomSheet = () => setIsOpen(false);

  const imgSrc = product.image_urls?.[0] || EmptyImg

  return (
    <Fragment>
      <BottomSheet
        open={isOpen}
        onClose={handleCloseBottomSheet}
      >
        <Image width={100} height={100} src={imgSrc} alt="productImg" className="w-full h-[250px]" />

      </BottomSheet>
      <div
        className={`
        w-11/12 flex justify-between 
        mb-5 bg-white rounded-lg cursor-pointer
        hover:bg-gray-100 transition-colors`
        }
        onClick={handleOpenBottomSheet}
      >

        <div className="flex">

          <Image
            alt="empty"
            src={imgSrc}
            width={150}
            height={120}

            className="rounded-lg"
            style={{
              width: "150px",
              height: "120px",
              objectFit: "cover"
            }}
            quality={100}
          />

          <div className="ml-2 mt-1 text-gray-600 font-bold" >
            {product.name[0].value}
          </div>
        </div>

        <div className="flex items-end">
          <div>
            {product.price[0].value}
            {product.price[0].currency_code}
          </div>
        </div>
      </div>
    </Fragment>
  )
}