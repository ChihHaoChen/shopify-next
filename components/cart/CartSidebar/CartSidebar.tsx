import React, { FC } from 'react'
import { Bag, Cross } from '@components/icons'
import { useUI } from '@components/ui/context'
import cn from "classnames"
import useCart from '@framework/cart/use-cart'
import { LineItem } from '@common/types/cart'
import CartItem from '@components/cart/CartItem'
import { Button } from '@components/ui'


const CartSidebar: FC = () => {
  const { closeSidebar } = useUI()
  const { data, isEmpty } = useCart()

  return (
    <div>
      <header>
        <div>
          <div>
            <button
              onClick={closeSidebar}
            >
              <Cross />
            </button>
          </div>
        </div>
      </header>

      {isEmpty ? (
        <div>
          <span>
            <Bag/>
          </span>
          <h2>
            Your cart is empty
          </h2>
          <p>
            Biscuit oat cake wafer icing ice cream tiramisu pudding cupcake.
          </p>
        </div>
      ) :
      <>
        <div>
          <h2>
            My Cart
          </h2>
          <ul>
            {
              data?.lineItems.map((item: LineItem) =>
              <CartItem
                key={item.id}
                item={item}
                currencyCode={data.currency.code}
              />
              )
            }
          </ul>
        </div>
        <div>
          <div>
            <ul>
            <li>
                <span>Subtotal</span>
                  <span>{data?.lineItemsSubtotalPrice}{data?.currency.code}</span>
              </li>
              <li>
                <span>Taxes</span>
                <span>Calculated at checkout</span>
              </li>
              <li>
                <span>Estimated Shipping</span>
                <span>FREE</span>
              </li>
            </ul>
            <div>
              <span>Total</span>
                <span>{data?.totalPrice}{data?.currency.code}</span>
            </div>
          </div>
            <Button
              Component='a'
              href='/api/checkout'
            >
            Proceed to Checkout
          </Button>
        </div>
      </>
      }
    </div>
  )
}

export default CartSidebar
