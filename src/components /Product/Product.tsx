import { FC } from "react"
import Image from "next/image"
import EmptyImg from "../../assets/img/empty-img.png";
import { ProductProps } from "./Prodct.Props";
import Link from "next/link";

export const Product: FC<ProductProps> = ({ index }) => {
  return (
    <div className="w-11/12 flex justify-between  mb-5 bg-white  rounded-lg ">
      <div className="flex">
        <Image src={EmptyImg} alt="empty" width={100} height={100} />
        <div>
          <Link href={"/cart"}>
            Product Name {index}
          </Link>
        </div>
      </div>

      <div className="">
        <div>1200тг</div>
      </div>

    </div>
  )
}