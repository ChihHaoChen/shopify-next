import { FC, Children, isValidElement, cloneElement, RefObject, useState } from "react"
import { useKeenSlider } from 'keen-slider/react'
import style from './ProductSlider.module.css'
import cn from 'classnames'

const ProductSlider: FC = ({ children }) => {

  const [currentSlide, setCurrentSlide] = useState(0)
  
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(sChanged) {
      setCurrentSlide(sChanged.details().relativeSlide)
    },
  })

  return (
    <div className={style.root}>
      <div ref={sliderRef as RefObject<HTMLDivElement>} className='h-full transition-opacity keen-slider'>
      <button
        onClick={slider?.prev}
        className={cn(style.leftControl, style.control)}  
        />
      <button
        onClick={slider?.next}
        className={cn(style.rightControl, style.control)}  
      />
      {
        Children.map(children, (child) => {
          if (isValidElement(child)) {
            
            return {
              ...child,
              props: {
                ...child.props,
                className: `${child.props.className ? `${child.props.className}` : ""} keen-slider__slide`
              }
            }
          }

          return child
        })
      }
      </div>
    </div>
  )
}

export default ProductSlider
