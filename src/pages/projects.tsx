import type { NextPage } from 'next'
import React, { Fragment } from 'react'
import Head from 'next/head'
import projects from '../assets/data/projects'
import { ProjectItem } from '../components/Project/ProjectItem'
import * as icons from '../assets/icons'
import style from '../styles/pages/projects.module.css'
import CardAboutMe from '../components/CardAboutMe'

const Projects: NextPage = (): JSX.Element => {
  const projectsReverse = [...projects].reverse()
  return (
    <Fragment>
      <Head>
        <title>Luis Gabril Janco | Projects</title>
        <meta
          name='description'
          content='Educational, personal and professional projects with which I continue to train day by day'
        />
        <link rel='canonical' href='https://sauterdev.vercel.app/projects' />
      </Head>
      <section className={style.header}>
        <figure className={style.heroImage}>
          <div className={style.heroShadow} />
          {icons.projectHeroDev}
        </figure>
        <h2 className={style.title}>
          <span className={style.normal}>Educational, personal and </span>{' '}
          <span className={style.textAqua}>professional projects</span>
          <span className={style.normal}>with which I </span>{' '}
          <span className={style.textGreen}>continue to train day by day.</span>
        </h2>
      </section>
      <section className={style.contentProjects}>
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
      </section>
      <CardAboutMe />
    </Fragment>
  )
}

export default Projects

/**
 * @alias images of github repository
 * @template https://github-readme-streak-stats.herokuapp.com/?user=LuiSauter&theme=react
 */
