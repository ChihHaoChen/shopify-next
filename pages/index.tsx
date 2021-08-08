
import type { InferGetStaticPropsType } from 'next'

import { getAllProducts } from '@framework/product'
import { getCollection } from '@framework/collection'

import { Grid, Hero, Marquee } from '@components/ui'
import { ProductCard } from '@components/product'
import { ProductSlider } from '@components/product'

import { getConfig } from '@framework/api/config'
import { Layout } from '@components/common'
import React from 'react'
import Image from "next/image"

export const getStaticProps = async () => {
  const config = getConfig()
  const products = await getAllProducts(config)

  const collections = await getCollection(config)

  return {
    props: {
      products,
      collections
    },
    revalidate: 4 * 60 * 60
  }
}


export default function Home({
  products,
  collections
}: InferGetStaticPropsType<typeof getStaticProps>) {


  return (
    <>
      <ProductSlider>
        {
          collections.map((collection) =>
          <div className='mt-10 mb-10' key={collection.image.url}>
            <Image
              src={collection.image.url}
              alt={collection.image.url}
              width={1280}
              height={800}
              quality='85'
            />
        </div>
          )
        }
      </ProductSlider>
      <Grid>
      {
        products.slice(0, 20).map(product =>
        <ProductCard
          key={product.id}
          product={product}
        />)
      }
      </Grid>
      <Hero
        headline='Hi there'
        description='Hello'
      />
      <Marquee>
      {
        products.slice(0, 20).map(product =>
          <ProductCard
            key={product.id}
            variant='slim'
            product={product}
          />
        )
      }
      </Marquee>
    </>
  )
}

Home.Layout = Layout
