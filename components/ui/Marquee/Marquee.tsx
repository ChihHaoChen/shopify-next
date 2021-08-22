import { FC, ReactNode } from "react"
import Ticker from 'react-ticker'
import style from './Marquee.module.css'
import cn from 'classnames'


interface Props {
  children: ReactNode[]
  variant?: 'primary' | 'secondary'
}

const Marquee: FC<Props> = ({ children, variant = 'primary' }) => {
  

  return (
    <div>
      <Ticker offset={80}>
      {
        () => (
            <div>
            {children}
          </div>
        )
      }
      </Ticker>
    </div>
  )
}

export default Marquee
