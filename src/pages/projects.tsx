import React from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'
import Image from 'next/image'

import projects from '../assets/data/projects'
import { ProjectItem } from '../components/Project/ProjectItem'
import { ProjectContainer } from '../components/Project/style'
import styled from 'styled-components'
import { DownArrow } from '../components/Home/DownArrow'
import { downArrow } from '../assets/icons'

const Projects: NextPage = (): JSX.Element => {
  const projectsReverse = [...projects].reverse()
  return (
    <>
      <Head>
        <title>Sauterdev | portafolio</title>
        <meta
          name='description'
          content='Proyectos educativos, personales y profesionales con los que me sigo formando dia a dia'
        />
        <link rel='canonical' href='https://sauterdev.vercel.app/projects' />
      </Head>
      <TitleProjects>
        <Image
          src='/images/portfolio-projects.svg'
          width={100}
          height={100}
          title='Luis G. Janco'
          priority={true}
          aria-label={'xd'}
          alt={'xd'}
        />
        <h2>
          Proyectos educativos, personales y profesionales con los que sigo
          formándome día a día.
        </h2>
      </TitleProjects>
      <div style={{ position: 'relative', transform: 'translateX(-2%)' }}>
        <DownArrow href='#projects'>{downArrow}</DownArrow>
      </div>
      <ProjectContainer id='projects'>
        {projectsReverse.map((project: Project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            url={project.url}
            authors={project.authors}
            tags={project.tags}
          />
        ))}
        {projectsReverse.length % 2 !== 0 && <br />}
        <img
          className='current-streak'
          src='https://github-readme-streak-stats.herokuapp.com/?user=LuiSauter&theme=blue-green'
        />
        <img
          className='current-streak'
          src='https://github-readme-stats.vercel.app/api?username=LuiSauter&theme=blue-green'
        />
      </ProjectContainer>
    </>
  )
}

export default Projects

const TitleProjects = styled.div`
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  height: 100%;
  padding: 2rem;
  width: 100%;
  h2 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 900;
    z-index: 2;
  }
  span {
    img {
      min-width: 300px;
      max-width: 500px;
    }
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    height: 90vh;
    span {
      width: 100%;
      img {
        width: 100%;
        min-width: 400px;
      }
    }
    h2 {
      width: 50%;
      font-size: 2rem;
    }
  }
`