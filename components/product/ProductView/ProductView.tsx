
import cn from 'classnames'
import { FC, useState } from 'react'
import { Container, Button } from '@components/ui'
import Image from "next/image"
import { Product } from '@common/types/product'
import { ProductSlider, Swatch } from '@components/product'
import { getVariant } from '../helpers'
import { useUI } from '@components/ui/context'
import useAddItem from '@framework/cart/use-add-item'

interface Props {
  product: Product
}


type AvailableChoices = 'color' | 'size' | string

type Choices = {
  [p in AvailableChoices]: string
}

const ProductView: FC<Props> = ({ product }) => {
  const [ choices, setChoices ] = useState<Choices>({})
  const [isLoading, setIsLoading] = useState(false)
  
  const { openSidebar } = useUI()
  const addItem = useAddItem()

  const variant = getVariant(product, choices)

  const addToCart = async () => {
    try {
      const item = {
        productId: String(product.id),
        variantId: String(variant ? variant.id : product.variants[0].id),
        quantity: 1
      }

      setIsLoading(true)
      await addItem(item)
      setIsLoading(false)
      openSidebar()
    } catch {
      setIsLoading(false)
    }
  }

  return (
    <Container>
      <div>
        <div>
          <div>
            <h1>
              {product.name}
            </h1>
            <div>
              {product.price.value}
              {` `}
              {product.price.currencyCode}
            </div>
          </div>
          <ProductSlider>
            { product.images.map(image =>
              <div key={image.url}>
                <Image
                  src={image.url}
                  alt={image.alt}
                  width={1050}
                  height={1050}
                  quality="85"
                />
              </div>
            )}
          </ProductSlider>
        </div>
        <div>
          <section>
            { product.options.map(option =>
              <div key={option.id}>
                <h2>{option.displayName}</h2>
                <div>
                  { option.values.map(optValue => {
                    const activeChoice = choices[option.displayName.toLowerCase()]
                    return (
                      <Swatch
                        key={`${option.id}-${optValue.label}`}
                        label={optValue.label}
                        color={optValue.hexColor}
                        variant={option.displayName}
                        size='md'
                        active={optValue.label.toLowerCase() === activeChoice}
                        onClick={() => {
                          setChoices({
                            ...choices,
                            [option.displayName.toLowerCase()]: optValue.label.toLowerCase()
                          })
                        }}
                      />
                    )}
                  )}
                </div>
              </div>
            )}
            <div>
              { product.description }
            </div>
          </section>
          <div>
            <Button
              onClick={addToCart}
              isLoading={isLoading}
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
