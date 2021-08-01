import React, { FC, ReactNode } from 'react'
import style from './Grid.module.css'
import cn from 'classnames'

interface Props {
  children: ReactNode[]
  layout?: "A" | "B"
}

const Grid: FC<ReactNode> = ({
  children
}) => {

  // const rootClassName = cn(
  //   style.root,
  //   {
  //     [style.layoutA]: layout === 'A',
  //     [style.layoutB]: layout === 'B'
  //   }
  // )

  return (
    <div className={style.root}>
      {children}
    </div>
  )
}

export default Grid
