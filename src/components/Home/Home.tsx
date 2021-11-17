import React from 'react'
import Image from 'next/image'
import skills from '../../assets/data/skills'
import { Tag } from '../Tag/Tag'
import { HomeContainer } from './HomeContainer'

export const Home = (): JSX.Element => {
  return (
    <HomeContainer>
      <article>
        <div className='home-head'>
          <h1 className='text-secondary'>
            Apasionado de la tecnología, trabajador perfeccionista, amante del
            Open-Source y del trabajo en equipo.
          </h1>
          <button onClick={() => console.log('Hola bobo!')}>FrontEnd Developer</button>
        </div>
        <div className='home-art'>
          <figure>
            <Image
              src='/sauterdev.jpg'
              alt='sauterdev'
              width={200}
              height={200}
              title='Luis G. Janco'
            />
          </figure>
          <span className='text-primary'>Sauterdev</span>
          <div></div>
        </div>
      </article>
      <ul>
        {skills.map((skill: string, index: number) => (
          <Tag key={index} text={skill} />
        ))}
      </ul>
    </HomeContainer>
  )
}
