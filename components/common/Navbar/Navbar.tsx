import { FC } from 'react'
import Link from 'next/link'
import { Container } from '@components/ui'
import { Usernav } from '@components/common'
import style from './Navbar.module.css'

const Navbar: FC = () => {
  return (
    <Container>
      <div className={style.root}>
        <div className="flex items-center flex-1">
          <Link href='/'>
            <a className={style.logo}>
              Hokkaido Jerry
            </a>
          </Link>
          <nav className="ml-6 space-x-6">
            <Link href='/'>
              <a className={style.link}>
                所有商品
              </a>
            </Link>
            <Link href='/'>
              <a className={style.link}>
                北海道薰衣草季
              </a>
            </Link>
            <Link href='/'>
              <a className={style.link}>
                含郵福袋
              </a>
            </Link>
            <Link href='/'>
              <a className={style.link}>
                促銷商品
              </a>
            </Link>
          </nav>
          <div className="flex justify-end flex-1 space-x-8">
            <Usernav />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Navbar
