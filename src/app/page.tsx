import { Layout } from "@/layout/layout";
import ProductList from "@/components /product-list/product-list";
import Sections from "@/components /sections/sections";

export default function Home() {

  return (
    <Layout>
      <>
        <Sections />
        <main className='w-full '>
          <div className="h-5"></div>
          <ProductList />
        </main>
      </>
    </Layout>
  )
}
