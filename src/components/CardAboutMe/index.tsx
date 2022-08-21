import Atropos from 'atropos/react'
import Image from 'next/image'
import Link from 'next/link'
import style from './cardaboutme.module.css'

const CardAboutMe: React.FC = () => {
  return (
    <section className={style.sectionAboutme}>
      <Atropos>
        <Link href='/me'>
          <a>
            <div className={style.aboutmeImg}>
              <figure>
                <Image
                  src='/sauterdev.jpg'
                  alt='Luis Gabriel Janco'
                  layout='fill'
                  objectFit='contain'
                  priority={true}
                  quality={100}
                />
              </figure>
            </div>
            <div data-atropos-offset='5' className={style.aboutmeText}>
              <h3>About me</h3>
              <p>
                Find out about my work, my journey as a programmer, learn about
                my workflow, my achievements and my experience in the open
                source development world.
              </p>
            </div>
            <div className={style.aboutmePointer} />
          </a>
        </Link>
      </Atropos>
    </section>
  )
}

export default CardAboutMe
