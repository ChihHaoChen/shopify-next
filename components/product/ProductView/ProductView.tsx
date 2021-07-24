
import cn from 'classnames'
import { FC, useState } from 'react'
import style from './ProductView.module.css'
import { Container, Button } from '@components/ui'
import Image from "next/image"
import { Product } from '@common/types/product'
import { ProductSlider, Swatch } from '@components/product'
import { getVariant } from '../helpers'
import { useUI } from '@components/ui/context'

interface Props {
  product: Product
}

type AvailableChoices = 'color' | 'size' | string

type Choices = {
  [p in AvailableChoices]: string
}

const ProductView: FC<Props> = ({ product }) => {

  const [choices, setChoices] = useState<Choices>({})
  const { openSidebar } = useUI()
  const variant = getVariant(product, choices)

  const addToCart = () => {
    try {
      const item = {
        productId: String(product.id),
        variantId: variant?.id,
        variantOptions: variant?.options
      }

      alert(JSON.stringify(item))
      openSidebar()
    } catch {

    }
  }
  
  return (
    <Container>
      <div className={cn(style.root, 'fit', 'mb-5')}>
        <div className={cn(style.productDisplay, 'fit')}>
          <div className={style.nameBox}>
            <h1 className={style.name}>{product.name}</h1>
            <div className={style.price}>
              {product.price.value}
              {` `}
              {product.price.currencyCode}
            </div>
          </div>
          <ProductSlider>
            {
              product.images.map(image => 
                <div className={style.imageContainer} key={image.url}>
                  <Image
                    className={style.img}
                    src={image.url}
                    alt={image.alt}
                    width={1050}
                    height={1050}
                    quality="85"
                  />
                </div>   
              )
            }
          </ProductSlider>
        </div>
        <div className={style.sidebar}>
          <section>
            {
              product.options.map(option => 
                <div key={option.id} className="pb-4">
                  <h2 className="font-medium uppercase">{option.displayName}</h2>
                  <div className="flex flex-row py-4">
                  {
                    option.values.map(oValue => {
                      
                      const activeChoice = choices[option.displayName.toLowerCase()]
                      return (
                        <Swatch
                          key={`${option.id}-${oValue.label}`}
                          label={oValue.label}
                          color={oValue.hexColor}
                          variant={option.displayName}
                          active={oValue.label.toLowerCase() === activeChoice}
                          onClick={() => setChoices({
                            ...choices,
                            [option.displayName.toLowerCase()]: oValue.label.toLowerCase()
                          })}
                      />
                      )
                    })
                  }
                  </div>
                </div>
              )
            }
            <div className="w-full max-w-xl text-lg break-words pb-14">
              {product.description}
            </div>
          </section>
          <div>
            <Button
              onClick={addToCart}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ProductView
