import Link from 'next/link'
import React, { Fragment, MouseEvent, useState } from 'react'
import { technologiesIcons } from '../../assets/icons/SkillsIcons'
import useSound from '../../hooks/useSound'
import style from './skills.module.css'

type Props = {
  gradient: string
}

const Skills: React.FC<Props> = ({ gradient }) => {
  const [x, setX] = useState(-500)
  const [y, setY] = useState(-500)
  const [leaveMouse, setLeaveMouse] = useState(false)
  const { playSound } = useSound()

  const handleMouseMove = (e: MouseEvent) => {
    setLeaveMouse(false)
    setX(e.clientX - 50)
    setY(e.clientY - 50)
  }

  const mouseEnter = () => {
    playSound({ audioSrc: '/sounds/hover.mp3', volume: 1, time: 0.2 })
  }

  const handleClick = () => {
    playSound({ audioSrc: '/sounds/click.mp3', volume: 0.3, time: 0.8 })
  }

  return (
    <Fragment>
      <header className={style.header}>
        <h2>
          Since I began my career as a developer, I have accumulated extensive
          experience in designing as a development products with testing and
          improving applications.
        </h2>
      </header>
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setLeaveMouse(true)}
        className={style.skillStack}
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
        <div className={style.skillsFrontend}>
          <h3>Front-End Stack</h3>
          {Object.values(technologiesIcons.frontend).map(
            (svg, index: number) => (
              <Link href={svg.link} key={index}>
                <a
                  onClick={handleClick}
                  onMouseEnter={mouseEnter}
                  target='_blank'
                  style={{ color: svg.color }}
                  title={svg.skill}
                >
                  {svg.svg}
                </a>
              </Link>
            )
          )}
        </div>
        <div className={style.skillsBackend}>
          <h3>Back-End Stack</h3>
          {Object.values(technologiesIcons.backend).map(
            (svg, index: number) => (
              <Link href={svg.link} key={index}>
                <a
                  onClick={handleClick}
                  onMouseEnter={mouseEnter}
                  target='_blank'
                  style={{ color: svg.color }}
                  title={svg.skill}
                >
                  {svg.svg}
                </a>
              </Link>
            )
          )}
        </div>
      </div>
    </Fragment>
  )
}

export default Skills
