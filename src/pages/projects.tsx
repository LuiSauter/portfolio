import type { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import { colorDark } from '../styles/theme'
import * as icons from '../assets/icons'

import projects from '../assets/data/projects'
import { ProjectItem } from '../components/Project/ProjectItem'
import { ProjectContainer } from '../components/Project/style'
import { DownArrow } from '../components/Home/DownArrow'
import { downArrow } from '../assets/icons'
import { useDarkMode } from '../hooks/useDarkMode'

const Projects: NextPage = (): JSX.Element => {
  const projectsReverse = [...projects].reverse()
  const { isDarkMode } = useDarkMode()
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
        <div className='hero'>{icons.projectHeroDev}</div>
        <div className='title'>
          <h2 className='title-h2'>
            Proyectos educativos, personales y profesionales{' '}
            <span>con los que sigo formándome día a día.</span>
          </h2>
        </div>
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
        <div className='stats'>
          <img
            className='current-streak'
            src={`https://github-readme-streak-stats.herokuapp.com/?user=LuiSauter&theme=${
              isDarkMode.isDark ? 'react' : 'default'
            }`}
          />
        </div>
        <div className='stats'>
          <img
            className='current-streak'
            src={`https://github-readme-stats.vercel.app/api?username=LuiSauter&theme=${
              isDarkMode.isDark ? 'react' : 'default'
            }`}
          />
        </div>
        <div className='stats'>
          <img
            className='current-streak'
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=LuiSauter&layout=compact&theme=${
              isDarkMode.isDark ? 'react' : 'default'
            }`}
          />
        </div>
      </ProjectContainer>
    </>
  )
}

export default Projects

const TitleProjects = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  .hero {
    position: relative;
    svg {
      width: 100%;
      height: 100%;
      opacity: 0.9;
    }
  }
  .title {
    .title-h2 {
      font-size: 1.8rem;
      line-height: 1.9rem;
      text-align: center;
      text-shadow: 1px 2px 3px #19191969;
      span {
        color: ${colorDark.colorTextThird};
        font-weight: 900;
      }
    }
  }
  @media screen and (min-width: 768px) {
    position: relative;
    .hero {
      position: relative;
      height: 90vh;
    }
    .title {
      position: absolute;
      top: 50%;
      .title-h2 {
        font-size: 4rem;
        line-height: 3.4rem;
        text-align: center;
      }
    }
  }
`