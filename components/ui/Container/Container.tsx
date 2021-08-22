import { ReactNode, FC, ComponentType, HTMLAttributes } from 'react'

interface Props {
  children: ReactNode[] | ReactNode
  el?: ComponentType<HTMLAttributes<HTMLElement>>
}

const Container: FC<Props> = ({children, el: Component = "div"}) => {
  return (
    <Component>
      {children}
    </Component>
  )
}

export default Container
