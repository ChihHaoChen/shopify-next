import { FC } from "react"
import style from './Swatch.module.css'
import { Check } from '@components/icons'

interface Props {
  color?: string
  label?: string
  variant: 'size' | 'color' | string
}


const Swatch: FC<Props> = ({color, label, variant}) => {

  label = label?.toLowerCase()
  variant = variant?.toLocaleLowerCase()

  return (
    <button
      className={style.root}
      style={color ? { backgroundColor: color } : {}}
    >
      {/* <span>
        <Check />
      </span> */}
      { variant === 'size' ? label : null }
    </button>
  )
}

export default Swatch
