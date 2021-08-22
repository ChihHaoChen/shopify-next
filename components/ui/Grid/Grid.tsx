import React, { FC, ReactNode } from 'react'
import style from './Grid.module.css'


const Grid: FC<ReactNode> = ({
  children
}) => {



  return (
    <div>
      {children}
    </div>
  )
}

export default Grid
