import React from 'react'
import Image from 'next/image'
import style from '../styles/pages/me.module.css'

interface Props {
  experience: {
    date: string
    image: string
    title: string
    list: string[]
  }[]
}

const Me: React.FC<Props> = ({ experience }) => {
  console.log(experience)
  return (
    <section className={style.aboutme}>
      <article className={style.aboutImgHero}>
        <figure>
          <Image
            src='/images/hack.svg'
            alt='Luis Gabriel Janco | About me'
            layout='fill'
            priority={true}
            objectFit='contain'
          />
        </figure>
      </article>
      <h2>I am Luis Gabriel Janco</h2>
      <article>
        <h3>Full-Stack Developer - Software Engineer</h3>
        <p>
          I have been developing products with web technologies since 2021. When
          I finished the{' '}
          <a href='https://fullstackopen.com/es/'>Fullstack Bootcamp</a> I
          discovered that what I liked the most were the frontend technologies.
          So I looked for my first professional opportunity in the freelance
          world. Since then I have dedicated myself to creating products based
          on the business model and the needs of the client.
        </p>
        <p>
          I love coding and delivering quality software and I think {`it's`}
          important to make every decision with the customer first.
        </p>
        <p>
          I like learning new technologies, learning how to use them to create
          quality products. I love working in a team and surrounding myself with
          people who are smarter or more experienced than me, who make me
          constantly improve personally and professionally.
        </p>
        <p>
          I firmly believe that software is a tool to help people create
          solutions.
        </p>
        <p>
          I firmly believe in continuous improvement. I enjoy every opportunity
          I have to learn and I adapt quickly to changes.
        </p>
      </article>
    </section>
  )
}

export default Me

export async function getStaticProps() {
  try {
    const data = [
      {
        date: 'December 2020 to February 2022',
        image: '/images/experience/fiverr.png',
        title: 'Frontend Web Developer',
        list: ['', ''],
      },
      {
        date: 'February 2022 to May 2022',
        image: '/images/experience/professional-rest.png',
        title: 'Professional Rest',
        list: ['', ''],
      },
      {
        date: 'May 2022 - present',
        image: '/images/experience/workana.png',
        title: 'Frontend Web Developer',
        list: ['', ''],
      },
    ]
    return {
      props: {
        experience: data,
      },
    }
  } catch (error) {
    return {
      notFound: true,
      experience: []
    }
  }
}
