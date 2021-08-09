
import { FC } from 'react'
import { Footer } from '@components/common'
import { Navbar } from '@components/common'
import { Header } from '@components/common'
import { Sidebar } from '@components/ui'
import { CartSidebar } from '@components/cart'
import { useUI } from '@components/ui/context'
import { ApiProvider } from '@framework'

import style from './Layout.module.css'


const Layout: FC = ({ children }) => {

  const { isSidebarOpen, closeSidebar } = useUI()

  return (
    <ApiProvider>
      <div className={style.root}>
        <Header />
        <Sidebar
          onClose={closeSidebar}
          isOpen={isSidebarOpen}
        >
          <CartSidebar />
        </Sidebar>
        <main className="fit">
          { children }
        </main>
        <Footer />
      </div>
    </ApiProvider>
  )
}


export default Layout