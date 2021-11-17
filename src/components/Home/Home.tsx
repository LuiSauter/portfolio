import React from 'react'
import Image from 'next/image'

import skills from '../../assets/data/skills'
import { Tag } from '../Tag/Tag'
import { HomeContainer } from './HomeContainer'
import { SocialNetwork } from '../SocialNetwork/SocialNetwork'
import { Sumary } from '../Sumary/Sumary'

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
        <h3>Skills</h3>
        <ul>
          {skills.map((skill: string, index: number) => (
            <Tag key={index} text={skill} />
          ))}
        </ul>
        <h3>Sumary</h3>
        <Sumary />
      </div>
    </HomeContainer>
  )
}
