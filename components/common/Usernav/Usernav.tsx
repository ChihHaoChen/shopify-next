import { FC } from "react"
import Link from 'next/link'
import { Bag as Cart, Heart } from "@components/icons"
import { useUI } from '@components/ui/context'
import style from './Usernav.module.css'


const Usernav: FC = () => {

  const { openSidebar } = useUI()

  return (
    <nav>
      <ul className={style.list}>
        <li className={style.item}>
          <Cart onClick={openSidebar} />
        </li>
        <li className={style.item}>
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
