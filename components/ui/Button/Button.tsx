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

  const rootClassName = cn(
    style.root,
    className,
    {
      [style.loading]: isLoading,
    }
  )
  
  return (
    <Component
      type="button"
      className={rootClassName}
      {...rest}
    >
      {children}
      {isLoading &&
        <i className="flex pl-2 m-0">
          <LoadingDots />
        </i>
      }
    </Component>
  )
}

export default Button
