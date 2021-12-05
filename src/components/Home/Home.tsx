import React from 'react'
import Image from 'next/image'
import { HomeContainer } from './HomeContainer'
import { SocialNetwork } from '../SocialNetwork/SocialNetwork'
import { Sumary } from '../Sumary/Sumary'
import { SkillsContainer } from '../Skills/SkillsContainer'
import { clip, downArrow } from '../../assets/icons'
import { DownArrow } from './DownArrow'
export const Home = (): JSX.Element => {
  return (
    <HomeContainer>
      <article>
        <div className='home-head'>
          <h2 className='text-secondary'>
            Apasionado de la tecnología, trabajador perfeccionista, amante del
            Open-Source y del trabajo en equipo.
          </h2>
          <button onClick={() => console.log('Hola bobo!')}>
            FrontEnd Developer
          </button>
          <SocialNetwork />
        </div>
        <div className='home-art'>
          <figure>
            <Image
              src='/sauterdev.jpg'
              alt='sauterdev'
              width={200}
              height={200}
              title='Luis G. Janco'
              priority={true}
            />
          </figure>
          <span className='text-primary'>Sauterdev</span>
        </div>
        <DownArrow href='#skills'>{downArrow}</DownArrow>
      </article>
      <div className='skills-sumary'>
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
      </div>
    </HomeContainer>
  )
}
