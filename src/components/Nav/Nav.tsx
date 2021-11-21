import React from 'react'
import Link from 'next/link'
import { NavBar } from './NavBar'
import { NavButton } from './NavButton/NavButton'
import { ExperienceIcon } from '../../assets/icons/ExperienceIcon'
import * as hrefs from '../../constants/hrefs'
import { ProjectsIcon } from '../../assets/icons/ProjectsIcon'
import { ButtonToggleDarkMode } from './ButtonToggleDarkMode/ButtonToggleDarkMode'

export const Nav = () => {
  return (
    <NavBar>
      <Link href='/'>
        <a className='text-primary underlined'>
          <h1>Luis G. Janco</h1>
        </a>
      </Link>
      <nav>
        {/* <NavButton text='Experiencia' url={hrefs.EXPERIENCE_HREF}>
          <ExperienceIcon className='text-secondary' />
        </NavButton> */}
        <NavButton text='Proyectos' url={hrefs.PROJECTS_HREF}>
          <ProjectsIcon className='text-secondary' />
        </NavButton>
        <ButtonToggleDarkMode />
      </nav>
    </NavBar>
  )
}
