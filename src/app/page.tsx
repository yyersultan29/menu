import { Product } from "@/components /Product/Product";

export default function Home() {
  return (

    <main className='w-full bg-slate-100 '>
      <div className="h-5"></div>
      <div className="flex justify-center items-center flex-col ">
        {Array(40).fill(0).map((_, index) => (
          <Product key={index} index={index} />
        ))}
      </div>

    </main>
  )
}
