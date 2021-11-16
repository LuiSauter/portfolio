import React from 'react'
import Image from 'next/image'
import skills from '../../assets/data/skills'
import { Tag } from '../Tag/Tag'
import { HomeContainer } from './HomeContainer'

export const Home = (): JSX.Element => {
  return (
    <HomeContainer>
      <figure>
        <Image src='/sauterdev.jpg' alt='sauterdev' width={150} height={150} />
      </figure>
      <span>Sauterdev</span>
      <div></div>
      <h1 className='text-secondary'>
        Apasionado de la tecnología, trabajador, perfeccionista, amante del
        Open-Source y del trabajo en equipo.
      </h1>
      <ul>
        {skills.map((skill: string, index: number) => {
          return <Tag key={index} text={skill} />
        })}
      </ul>
    </HomeContainer>
  )
}
