import ProductItem from '@/components/products/ProductItem'
import data from '@/lib/data'

export default function Home() {
  return (
    <>
      <h1 className="text-2xl py-2">Latest Products</h1>
      <div className="grid gap-4 md:gird-cols-3 lg:grid-cols-4 gird-cols-1">
        {data.products.map((product) => (
          <ProductItem key={product.slug} product={product} />
        ))}
      </div>
    </>
  )
}
