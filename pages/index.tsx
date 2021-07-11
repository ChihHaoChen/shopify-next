
import type { InferGetStaticPropsType } from 'next'

import getAllProducts from '@framework/product/get-all-products'
import { ProductCard } from '@components/product'

import { getConfig } from '@framework/api/config'
import { Layout } from '@components/common'


export const getStaticProps = async () => {
  const config = getConfig()
  const products = await getAllProducts(config)

  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  }
}


export default function Home({
  products
}: InferGetStaticPropsType<typeof getStaticProps>) {


  return (
    <div>
      {products.slice(0, 3).map(product =>
        <ProductCard
          key={product.id}
          product={product}
        />
      )}
    </div>
  )
}

Home.Layout = Layout
