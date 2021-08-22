
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { Trash, Plus, Minus } from '@components/icons'
import { LineItem } from '@common/types/cart'
import React, { ChangeEvent, useState } from 'react'
import { Swatch } from '@components/product'
import useRemoveItem from '@framework/cart/use-remove-item'
import useUpdateItem from '@framework/cart/use-update-item'


const CartItem = ({
  item,
  currencyCode
}: {
  item: LineItem
  currencyCode: string
  }) => {
  const [quantity, setQuantity] = useState(item.quantity)
  const removeItem = useRemoveItem()
  const updateItem = useUpdateItem()
  const price = (item.variant.price! * item.quantity) || 0
  const { options } = item

  const handleQuantityChange = (val: number) => {
    if (Number.isInteger(val) && val >= 0) {
      setQuantity(val)

      updateItem({
        id: item.id,
        variantId: item.variantId,
        quantity: val
      })
    }
  }

  const handleQuantity = async (e: ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value)
    handleQuantityChange(val)
  }

  const incrementQuantity = async (n = 1) => {
    const val = Number(quantity) + n
    handleQuantityChange(val)
  }

  return (
    <li>
      <div>
        <Image
          onClick={() => {}}
          className={s.productImage}
          alt={item.name}
          width={150}
          height={150}
          src={item.variant.image!.url}
          unoptimized
        />
      </div>
      <div>
        <Link href={`/`} passHref>
          <span
            onClick={() => {}}
          >
            {item.name}
          </span>
        </Link>
        <div>
        {
          options && options.length > 0 &&
          (options.map((option) => {
            const value = option.values[0]
            return (
              <Swatch
                key={`${item.id}-${option.displayName}`}
                size='sm'
                onClick={() => { }}
                label={value.label}
                color={value.hexColor}
                variant={option.displayName}
              >
                
              </Swatch>
            )
          }))
        }
        </div>
        <div >
          <button type="button">
            <Minus onClick={() => incrementQuantity(-1)}/>
          </button>
          <label>
            <input
              type="number"
              max={99}
              min={0}
              value={quantity}
              onChange={handleQuantity}
            />
          </label>
          <button type="button">
            <Plus onClick={() => incrementQuantity(+1)}/>
          </button>
        </div>
      </div>
      <div>
        <span>{price} {currencyCode}</span>
        <button
          onClick={ () => {
            removeItem({ id: item.id })
          }}
        >
          <Trash />
        </button>
      </div>
    </li>
  )
}

export default CartItem
