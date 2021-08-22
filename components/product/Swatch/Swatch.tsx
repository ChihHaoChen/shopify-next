import { FC } from "react"
import style from './Swatch.module.css'
import { Check } from '@components/icons'
import cn from 'classnames'
import { isDark } from '@lib/color'

interface Props {
  size: 'sm' | 'md' | 'lg'
  color?: string
  label?: string
  active?: boolean
  variant: 'size' | 'color' | string
  onClick: () => void
}


const Swatch: FC<Props> = ({
  color,
  label,
  variant,
  active,
  size='md',
  ...rest
}) => {

  label = label?.toLowerCase()
  variant = variant?.toLocaleLowerCase()
  
  return (
    <button
      style={color ? { backgroundColor: color } : {}}
      {...rest}
    >
      {
        variant === 'color' && active && (
          <span>
            <Check />
          </span>
        )
      }
      { variant === 'size' ? label : null }
    </button>
  )
}

export default Swatch
