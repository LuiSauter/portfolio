import Image from 'next/image'
import React, { MouseEvent, useState } from 'react'
import style from './features.module.css'
type Props = {
  gradient: string,
}

const Features: React.FC<Props> = ({ gradient }) => {
  const [x, setX] = useState(-500)
  const [y, setY] = useState(-500)
  const [leaveMouse, setLeaveMouse] = useState(false)
  const handleMouseMove = (e: MouseEvent) => {
    setLeaveMouse(false)
    setX(e.clientX - 50)
    setY(e.clientY - 50)
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setLeaveMouse(true)}
      className={style.features}
    >
      <div
        id='shadow-gradient'
        aria-label={gradient}
        style={{
          top: y + 'px',
          left: x + 'px',
          transform: leaveMouse ? 'scale(0)' : 'scale(1)',
          opacity: leaveMouse ? 0 : 0.5,
        }}
        className={style.cursor}
      />
      <article>
        <div>
          <figure>
            <div
              id='shadow-gradient'
              aria-label={gradient}
              className={style.shadowIcon}
            />
            <Image
              src='/images/front.png'
              alt='sauterdev - Frontend'
              layout='fill'
              objectFit='cover'
            />
          </figure>
        </div>
        <h2>Fron-End Development</h2>
        <p>
          With more than 1 year of experience, receptive web, semantic web
          analysis and interaction patterns of interface elements.
        </p>
      </article>
      <article>
        <div>
          <figure>
            <div
              id='shadow-gradient'
              aria-label={gradient}
              className={style.shadowIcon}
            />
            <Image
              src='/images/backend.png'
              alt='sauterdev - backend'
              layout='fill'
              objectFit='cover'
            />
          </figure>
        </div>
        <h2>Back-End Development</h2>
        <p>
          Analytical problem solver and developing security adding value focused
          on REST API and relational and non-relational database.
        </p>
      </article>
      <article>
        <div>
          <figure>
            <div
              id='shadow-gradient'
              aria-label={gradient}
              className={style.shadowIcon}
            />
            <Image
              src='/images/design.png'
              alt='sauterdev - Frontend'
              layout='fill'
              objectFit='cover'
            />
          </figure>
        </div>
        <h2>UI/UX Design</h2>
        <p>
          User experience, giving quality and value to the product combined with
          the user interface leading to a better feeling.
        </p>
      </article>
    </div>
  )
}

export default Features