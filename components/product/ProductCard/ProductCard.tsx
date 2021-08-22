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
      <a>
        {
          variant === 'slim' ?
          <>
            <div>
              <span>
                {product.name}
              </span>
            </div>
            {
              product.images && (
                <Image
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
            <div>ProductBackgroundImage</div>
            <div>
              <h3>
                <span>{product.name}</span>
              </h3>
              <span>
                {product.price.value}{product.price.currencyCode}
              </span>
            </div>
            {
              product.images && (
                <Image
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
