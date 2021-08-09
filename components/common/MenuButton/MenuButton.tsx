import { FC } from "react"
import styled from "styled-components"
import Image from "next/image"
import Link from 'next/link'

type Item = {
  link: string,
  title: string,
  icon: string,
  iconSize: number
}


interface Props {
  item: Item
  onClick?: (event: any) => void
}


const MenuButton: FC<Props> = (props: Props) => {
  const { item, onClick } = props

  return (
    <Link href={item.link}>
      <MenuItem title={item.title} onClick={onClick}>
        <Image
          src={item.icon}
          alt={item.title}
          width={item.iconSize}
          height={item.iconSize}
          quality="85"
        />
        {item.title}
      </MenuItem>
    </Link>
  )
}


export default MenuButton

interface MenuItemProps {
  title?: string
}

const MenuItem = styled.div<MenuItemProps>`
  color: rgba(255, 255, 255, 0.7);
  display: grid;
  grid-template-columns: 24px auto;
  gap: ${props => (props.title ? "10px" : "0px")};
  align-items: center;
  padding: 10px;
  transition: 0.5s ease-out;
  border-radius: 10px;

  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  }
`
