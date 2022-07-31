/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import useSound from '../../hooks/useSound'
import style from './projectItem.module.css'
import * as icon from '../../assets/icons'

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

export const ProjectItem = ({ description, tags, title, url }: Project) => {
  const [mounted, setMounted] = useState(false)
  const { playSound } = useSound()
  let cleanup = true
  useEffect(() => {
    cleanup && setMounted(true)
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      cleanup = false
    }
  }, [])

  const mouseEnter = () => {
    playSound({ audioSrc: '/sounds/hover.mp3', volume: 1, time: 0.2 })
  }

  const handleClick= () => {
    playSound({ audioSrc: '/sounds/button-2.mp3', volume: 0.7, time: 0.25 })
  }

  return (
    <Link href={`https://github.com/${url.split('/development')[0]}`}>
      <a
        target='_blank'
        className={style.article}
        onMouseEnter={mouseEnter}
        onClick={handleClick}
        style={{
          maxWidth: (mounted && getRandomInt(450, 530)) || 450 + 'px',
        }}
      >
        <div className={style.header}>
          <span className={style.bookIcon}>{icon.book}</span>
          <h2>{title}</h2>
          <span className={style.visibility}>Public</span>
          <img
            src={`https://badgen.net/github/commits/${url}`}
            title={url}
            alt='Luis Gabriel Janco'
          />
        </div>
        <p className={style.description}>{description}</p>
        <ul className={style.languages}>
          {tags.map((tag, index: number) => (
            <li key={index} className={style.langItem}>
              <span
                className={style.circle}
                style={{ backgroundColor: tag.color }}
              />
              <span>{tag.skill}</span>
            </li>
          ))}
        </ul>
      </a>
    </Link>
  )
}

{/* {mounted && checkIfIsDark() ? (
  <img
    src={`https://github-readme-stats.vercel.app/api/pin/?username=LuiSauter&repo=${url}&title_color=FFFFFFDE&icon_color=EBEBEB99&text_color=EBEBEB99&bg_color=1f2028&border_color=1f2028&hide_rank=false`}
    alt=''
  />
) : (
  <img
    src={`https://github-readme-stats.vercel.app/api/pin/?username=LuiSauter&repo=${url}&title_color=213547&icon_color=3C3C3CB3&text_color=3C3C3CB3&bg_color=ffffff&border_color=3c3c3c1f&hide_rank=false`}
    alt=''
  />
)} */}
