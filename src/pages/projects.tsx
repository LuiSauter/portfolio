import React from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'
import InfiniteScroll from 'react-infinite-scroll-component'

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
      <Titleh2>Portafolio</Titleh2>
      <p>
        Proyectos educativos, personales y profesionales con los que me sigo
        formando dia a dia.
      </p>
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

const Titleh2 = styled.h2`
  font-size: 1.8rem;
`