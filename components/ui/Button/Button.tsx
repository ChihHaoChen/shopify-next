import { ButtonHTMLAttributes, ComponentType, FC, HTMLAttributes, ReactNode } from 'react';
import { LoadingDots } from '@components/ui'
import style from './Button.module.css'
import cn from 'classnames'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[]
  isLoading?: boolean
  Component?: string | ComponentType<HTMLAttributes<HTMLElement>>
  href?: string
}


const Button: FC<Props> = ({
  children,
  className,
  isLoading = false,
  Component = 'button',
  ...rest
}) => {

  
  return (
    <Component
      type="button"
      {...rest}
    >
      {children}
      {isLoading &&
        <i>
          <LoadingDots />
        </i>
      }
    </Component>
  )
}

export default Button
