import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'
import Features from '../components/Features/Features'
import Skills from '../components/Skills/Skills'
import style from '../styles/pages/index.module.css'
import Sumary from '../components/Sumary/Sumary'
import useSound from '../hooks/useSound'

function getRandom(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
let cleanup = true
const HomePage: NextPage = () => {
  const [mounted, setMounted] = useState(false)
  const { playSound } = useSound()
  const bgGradient = getRandom(1, 4)

  useEffect(() => {
    cleanup && setMounted(true)
    return () => {
      cleanup = false
    }
  }, [])

  const handleClick = () => {
    playSound({ audioSrc: '/sounds/click.mp3', volume: 0.3, time: 0.8 })
  }

  const gradientLabel = mounted && `gradient-${bgGradient}` || ''

  return (
    <Fragment>
      <Head>
        <title>Luis Gabriel Janco | FullStack Developer 🧑‍💻</title>
      </Head>
      <section className={style.section}>
        <div className={style.hero}>
          <div
            id='shadow-gradient'
            aria-label={gradientLabel}
            className={style.shadow}
          />
          <figure>
            <Image
              src='/sauterdev.jpg'
              alt='Luis Gabriel Janco'
              title='Luis Gabriel Janco'
              layout='fill'
              priority={true}
            />
          </figure>
        </div>
        <div className={style.heroContent}>
          <h1
            id='shadow-gradient'
            aria-label={gradientLabel}
            className={style.meTitle}
          >
            <span title='JavaScript Lover' className={style.clip}>
              Sauterdev
            </span>
          </h1>
          <p>
            Full-Stack Web Developer and <span className={style.js}></span>
            <span className={style.lover}>Lover</span>
          </p>
          <h2 className={style.tagline}>
            Passionate about technology, lover of Open-Source and teamwork.
          </h2>
          <div className={style.actions}>
            <Link href='/'>
              <a
                onClick={handleClick}
                id='shadow-gradient'
                aria-label={gradientLabel}
                className={style.action}
              >
                About me
              </a>
            </Link>
            <Link href='#sumary'>
              <a onClick={handleClick} className={style.actionExtra}>Contact</a>
            </Link>
            <Link href='#sumary'>
              <a onClick={handleClick} className={style.actionExtra}>My Summary</a>
            </Link>
          </div>
        </div>
      </section>
      <section className={style.sectionFeatures}>
        <Features gradient={gradientLabel} />
      </section>
      <section className={style.sectionSkills}>
        <Skills gradient={gradientLabel} />
      </section>
      <Sumary />
    </Fragment>
  )
}

export default HomePage
