/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import useSound from '../../hooks/useSound'
import useThemes from '../../hooks/useThemes'
import style from './projectItem.module.css'

export const ProjectItem = ({ description, tags, title, url }: Project) => {
  const [mounted, setMounted] = useState(false)
  const { playSound } = useSound()
  let cleanup = true
  useEffect(() => {
    cleanup && setMounted(true)
    return () => {
      cleanup = false
    }
  }, [])

  const mouseEnter = () => {
    playSound('/sounds/hover.mp3')
  }
  const {checkIfIsDark} = useThemes()

  const handleClick= () => {
    playSound('/sounds/button-2.mp3')
  }

  return (
    <Link href={`https://github.com/LuiSauter/${url}`}>
      <a target='_blank' className={style.figure} onMouseEnter={mouseEnter} onClick={handleClick}>
        {mounted && checkIfIsDark() ? (
          <img
            src={`https://github-readme-stats.vercel.app/api/pin/?username=LuiSauter&repo=${url}&title_color=FFFFFFDE&icon_color=EBEBEB99&text_color=EBEBEB99&bg_color=1f2028&border_color=1f2028&hide_rank=false`}
            alt=''
          />
        ) : (
          <img
            src={`https://github-readme-stats.vercel.app/api/pin/?username=LuiSauter&repo=${url}&title_color=213547&icon_color=3C3C3CB3&text_color=3C3C3CB3&bg_color=ffffff&border_color=3c3c3c1f&hide_rank=false`}
            alt=''
          />
        )}
      </a>
    </Link>
    // <article className={style.article}>
    //   <div className={style.header}>
    //     <div>
    //       <span className={style.bookIcon}>{icon.book}</span>
    //       <h2>{title}</h2>
    //       <span className={style.visibility}>Public</span>
    //     </div>
    //     <img
    //       src={`https://badgen.net/github/commits/LuiSauter/${url}`}
    //       title={url}
    //       alt='Luis Gabriel Janco'
    //     />
    //   </div>
    //   <p className={style.description}>{description}</p>
    //   <ul className={style.languages}>
    //     {tags.map((tag, index: number) => (
    //       <li key={index} className={style.langItem}>
    //         <span className={style.circle} style={{ backgroundColor: tag.color }} />
    //         <span>{tag.skill}</span>
    //       </li>
    //     ))}
    //   </ul>
    // </article>
  )
}
