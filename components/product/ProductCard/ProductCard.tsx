import { Product } from "@common/types/product"
import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import style from './ProductCard.module.css'


interface Props {
  product: Product
  variant?: 'simple' | 'slim'
}


const placeholderImage = '/product-image-placeholder.svg'

const ProductCard: FC<Props> = ({ product, variant = 'simple' }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <a className={style.root}>
        {
          variant === 'slim' ?
          <>
            <div className='absolute inset-0 z-20 flex items-center justify-center'>
              <span className='p-3 text-xl font-bold text-white bg-black'>
                {product.name}
              </span>
            </div>
            {
              product.images && (
                <Image
                  className={style.productImage}
                  alt={product.name ?? "Product Image"}
                  src={product.images[0].url ?? placeholderImage}
                  height={320}
                  width={320}
                  quality="85"
                  layout="fixed"
                />
              )
            }
          </> :
          <>
            <div className={style.productBG}></div>
            <div className={style.productTag}>
              <h3 className={style.productTitle}>
                <span>{product.name}</span>
              </h3>
              <span className={style.productPrice}>
                {product.price.value}{product.price.currencyCode}
              </span>
            </div>
            {
              product.images && (
                <Image
                  className={style.productImage}
                  alt={product.name ?? "Product Image"}
                  src={product.images[0].url ?? placeholderImage}
                  height={540}
                  width={540}
                  quality="85"
                  layout="responsive"
                />
              )
            }
          </>
        }
      </a>
    </Link>
  )
}

export default ProductCard
