import { FC } from "react"
import Link from 'next/link'
import { Bag as Cart, Heart } from "@components/icons"
import { useUI } from '@components/ui/context'
import style from './Usernav.module.css'
import useCart from "@common/cart/use-cart"
import { LineItem } from "@common/types/cart"


const Usernav: FC = () => {

  const { openSidebar } = useUI()
  const { data } = useCart()

  const itemsCount = data?.lineItems.reduce((count: number, item: LineItem) => {
    return count + item.quantity
  }, 0) ?? 0

  return (
    <nav>
      <ul >
        <li >
          <Cart onClick={openSidebar} />
          {
            itemsCount > 0 &&
            <span >
              { itemsCount }
            </span>
          }
        </li>
        <li>
          <Link href="/wishlist">
            <a>
              <Heart />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Usernav
