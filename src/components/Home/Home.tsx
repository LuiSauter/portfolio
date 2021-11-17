import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import skills from '../../assets/data/skills'
import { Tag } from '../Tag/Tag'
import { HomeContainer } from './HomeContainer'
import { Linkedin } from '../../assets/icons/LinkedinIcon'
import { GithubIcon } from '../../assets/icons/GithubIcon'
import { TwitterIcon } from '../../assets/icons/TwitterIcon'

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
          <div>
            <Link href='https://www.linkedin.com/in/luis-gabriel-janco/'>
              <a target='_blank'>
                <Linkedin />
              </a>
            </Link>
            <GithubIcon />
            <TwitterIcon />
          </div>
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
