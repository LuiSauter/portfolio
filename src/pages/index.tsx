import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import { SocialNetwork } from '../components/SocialNetwork/SocialNetwork'
// import { SkillsContainer } from '../components/Skills/SkillsContainer'
// import { SocialNetwork } from '../components/SocialNetwork/SocialNetwork'
// import { Sumary } from '../components/Sumary/Sumary'
import style from '../styles/pages/index.module.css'

const HomePage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Luis Gabriel Janco | FullStack Developer 🧑‍💻</title>
      </Head>
      <section className={style.section}>
        <div className={style.hero}>
          <div className={style.shadow} />
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
          <h1 className={style.meTitle}>
            <span className={style.clip}>Luis Gabriel Janco</span>
          </h1>
          <p>
            Full-Stack Web Developer and <span>JS</span> Lover
          </p>
          <h2 className={style.tagline}>
            Apasionado de la tecnología, amante del Open-Source y del trabajo en
            equipo.
          </h2>
        </div>
        <SocialNetwork />
      </section>
      {/* <div className='skills-sumary'>
        <h3 id='skills'>
          <a href='#skills'>{clip}</a>
          Habilidades
        </h3>
        <SkillsContainer />
        <h3 id='resume'>
          <a href='#resume'>{clip}</a>
          Resumen
        </h3>
        <Sumary />
      </div> */}
    </Fragment>
  )
}

export default HomePage
