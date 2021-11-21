import React from 'react'
import Image from 'next/image'
import { HomeContainer } from './HomeContainer'
import { SocialNetwork } from '../SocialNetwork/SocialNetwork'
import { Sumary } from '../Sumary/Sumary'
import { SkillsContainer } from '../Skills/SkillsContainer'

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
              priority
            />
          </figure>
          <span className='text-primary'>Sauterdev</span>
        </div>
      </article>
      <div className='skills-sumary'>
        <h3>Habilidades</h3>
        <SkillsContainer />
        <h3>Resumen</h3>
        <Sumary />
      </div>
    </HomeContainer>
  )
}
