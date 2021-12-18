import React from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'
import InfiniteScroll from 'react-infinite-scroll-component'
import Image from 'next/image'

import projects from '../assets/data/projects'
import { ProjectItem } from '../components/Project/ProjectItem'
import { ProjectContainer } from '../components/Project/style'
import usePaginationArray from '../hooks/usePaginationArray'
import styled from 'styled-components'

const Projects: NextPage = (): JSX.Element => {
  const projectsReverse = [...projects].reverse()
  const { dataDisplayed, next, currentPage, maxPage } = usePaginationArray(
    projectsReverse,
    4
  )
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
          Proyectos educativos, personales y profesionales con los que me sigo
          formando dia a dia.
        </h2>
      </TitleProjects>
      <ProjectContainer>
        <InfiniteScroll
          dataLength={dataDisplayed.length}
          next={next}
          hasMore={currentPage < maxPage}
          loader={<h4>...Loading</h4>}
          scrollThreshold={0.7}
          style={{
            width: '100%',
            overflow: 'hidden',
          }}
        >
          {dataDisplayed.map((project: Project, index) => (
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
        </InfiniteScroll>
      </ProjectContainer>
    </>
  )
}

export default Projects

const TitleProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  padding: 0 1vw 2rem;
  position: relative;
  width: 100%;
  margin: auto;
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
      filter: drop-shadow(10px 5px 0.2rem #27272773);
      /* box-shadow: 0 20px 25px -5px #000000aa; */
    }
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
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