import React, { Fragment } from 'react'
import Image from 'next/image'
import style from '../styles/pages/me.module.css'
import Head from 'next/head'
import Atropos from 'atropos/react'
import { certificates, experience } from '../assets/data/experience'

interface Props {
  experience: {
    date: string
    image: string
    title: string
    listTasks: string[]
  }[]
}

const Me: React.FC<Props> = ({ experience }) => {
  return (
    <Fragment>
      <Head>
        <title>About me | Luis Gabriel Janco</title>
      </Head>
      <section className={style.aboutHero}>
        <Atropos
          style={{ width: '100%', height: '100%' }}
          highlight={false}
          shadow={false}
        >
          <figure data-atropos-offset='5'>
            <Image
              src='/images/hack.svg'
              alt='Luis Gabriel Janco | About me'
              layout='fill'
              priority={true}
              objectFit='contain'
            />
          </figure>
        </Atropos>
      </section>
      <section className={style.aboutStatement}>
        <h2>I am Luis Gabriel Janco</h2>
        <article className={style.statementText}>
          <h3 className={style.aboutRole}>
            Full-Stack Developer - Software Engineer
          </h3>
          <p>
            I have been developing products with web technologies since 2021.
            When I finished the{' '}
            <a href='https://fullstackopen.com/es/'>Fullstack Bootcamp</a> I
            discovered that what I liked the most were the frontend
            technologies. So I looked for my first professional opportunity in
            the freelance world. Since then I have dedicated myself to creating
            products based on the business model and the needs of the client.
          </p>
          <p>
            I love coding and delivering quality software and I think {`it's`}
            important to make every decision with the customer first.
          </p>
          <p>
            I like learning new technologies, learning how to use them to create
            quality products. I love working in a team and surrounding myself
            with people who are smarter or more experienced than me, who make me
            constantly improve personally and professionally.
          </p>
          <p>
            I firmly believe that software is a tool to help people create
            solutions.
          </p>
          <p>
            I firmly believe in continuous improvement. I enjoy every
            opportunity I have to learn and I adapt quickly to changes.
          </p>
        </article>
      </section>
      <section className={style.sectionExperience}>
        <div className={style.experience}>
          <h2>My experience</h2>
          <div className={style.experienceContainer}>
            {experience.map((item, index) => (
              <article className={style.experienceItem} key={index}>
                <div className={style.itemContent}>
                  <Atropos key={index} highlight={false} shadow={false}>
                    <figure>
                      <Image
                        src={item.image}
                        alt={item.title}
                        layout='fill'
                        objectFit='contain'
                      />
                    </figure>
                    <div className={style.itemText}>
                      <p>{item.date}</p>
                      <h3>{item.title}</h3>
                      <ul>
                        {item.listTasks.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </Atropos>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className={style.certificates}>
          <h2>Achievements</h2>
          <div className={style.experienceContainer}></div>
        </div>
      </section>
    </Fragment>
  )
}

export default Me

export async function getStaticProps() {
  try {
    return {
      props: {
        experience: experience.reverse(),
        certificates,
      },
    }
  } catch (error) {
    return {
      notFound: true,
      experience: [],
    }
  }
}
