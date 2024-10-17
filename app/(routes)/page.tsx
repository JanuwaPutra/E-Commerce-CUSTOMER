import getBanner from "@/actions/get-banner"
import getProducts from "@/actions/get-products"
import Banner from "@/components/banner"
import Container from "@/components/ui/container"
import ProductList from "@/components/ui/product-list"

export const revalidate = 0

const Homepage = async ()=> {
    const products = await getProducts({isFeatured:true})
    const banner = await getBanner("ec5ab728-e94d-4da4-9f00-6d9c76a385f8")


  return (
    <Container>
        <div className="space-y-10 pb-  10">
            <Banner data={banner} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Produk Unggulan" items={products}/>
        </div>
        </div>
    </Container>
  )
}

export default Homepage
