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
              NEXT_STORE
            </a>
          </Link>
          <nav className="ml-6 space-x-6">
            <Link href='/'>
              <a className={style.link}>
                All
              </a>
            </Link>
            <Link href='/'>
              <a className={style.link}>
                Clothese
              </a>
            </Link>
            <Link href='/'>
              <a className={style.link}>
                Accessories
              </a>
            </Link>
            <Link href='/'>
              <a className={style.link}>
                Shoes
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
