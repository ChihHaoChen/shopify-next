import { FC } from 'react'
import style from './Hero.module.css'
import Link from 'next/link'
import { Container } from '@components/ui'

interface Props {
  headline: string
  description: string
}

const Hero: FC<Props> = ({ headline, description }) => {
  return (
    <div>
      <Container el={"div" as any}>
        <div>
          <h2>
            {headline}
          </h2>
          <div>
            <p>
              {description}
            </p>
            <Link href="/">
              <a>
                Read it here
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero
