import { FC } from 'react'
import Link from 'next/link'
import { Container } from '@components/ui'
import { Usernav } from '@components/common'
import style from './Navbar.module.css'

const Navbar: FC = () => {
  return (
    <Container>
      <div>
        <div>
          <Link href='/'>
            <a>
              Hokkaido Jerry
            </a>
          </Link>
          <nav>
            <Link href='/'>
              <a>
                所有商品
              </a>
            </Link>
            <Link href='/'>
              <a>
                北海道薰衣草季
              </a>
            </Link>
            <Link href='/'>
              <a>
                含郵福袋
              </a>
            </Link>
            <Link href='/'>
              <a>
                促銷商品
              </a>
            </Link>
          </nav>
          <div>
            <Usernav />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Navbar
