import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useEffect, useState } from 'react'
import { SkillsContainer } from '../components/Skills/SkillsContainer'
import { Sumary } from '../components/Sumary/Sumary'
import style from '../styles/pages/index.module.css'

function getRandom(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
let cleanup = true
const HomePage: NextPage = () => {
  const [mounted, setMounted] = useState(false)
  const bgGradient = getRandom(1, 4)

  useEffect(() => {
    cleanup && setMounted(true)
    return () => {
      cleanup = false
    }
  }, [])

  const paps = mounted && `gradient-${bgGradient}` || ''

  return (
    <Fragment>
      <Head>
        <title>Luis Gabriel Janco | FullStack Developer 🧑‍💻</title>
      </Head>
      <section className={style.section}>
        <div className={style.hero}>
          <div aria-label={`gradient-${bgGradient}`} className={style.shadow} />
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
          <h1 aria-label={paps} className={style.meTitle}>
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
            <Link href='/about'>
              <a aria-label={paps} className={style.action}>
                About me
              </a>
            </Link>
            <Link href='/contact'>
              <a className={style.actionExtra}>Contact</a>
            </Link>
            <Link href='/contact'>
              <a className={style.actionExtra}>Stack</a>
            </Link>
          </div>
        </div>
        {/* <SocialNetwork /> */}
      </section>
      {/* <Features></Features> */}
      {/* <div className='skills-sumary'>
        <h3 id='skills'>
          Habilidades
        </h3>
        <SkillsContainer />
        <h3 id='resume'>
          Resumen
        </h3>
        <Sumary />
      </div> */}
    </Fragment>
  )
}

export default HomePage
