import { FC, Children, isValidElement, cloneElement, RefObject, useState } from "react"
import { useKeenSlider } from 'keen-slider/react'


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
    <div>
      <div ref={sliderRef as RefObject<HTMLDivElement>}>
      <button
        onClick={slider?.prev}
        />
      <button
        onClick={slider?.next}
      />
      {
        Children.map(children, (child) => {
          if (isValidElement(child)) {
            
            return {
              ...child,
              props: {
                ...child.props
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
