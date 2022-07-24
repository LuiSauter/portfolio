import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import projects from '../assets/data/projects'
import { ProjectItem } from '../components/Project/ProjectItem'

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
      {/* <TitleProjects>
        <div className='hero'>{icons.projectHeroDev}</div>
        <div className='title'>
          <h2 className='title-h2'>
            Proyectos educativos, personales y profesionales{' '}
            <span>con los que sigo formándome día a día.</span>
          </h2>
        </div>
      </TitleProjects> */}
      <div style={{ position: 'relative', transform: 'translateX(-2%)' }}>
        {/* <DownArrow href='#projects'>{downArrow}</DownArrow> */}
      </div>
      <div id='projects'>
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
        {/* <div className='stats'>
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
        </div> */}
      </div>
    </>
  )
}

export default Projects
