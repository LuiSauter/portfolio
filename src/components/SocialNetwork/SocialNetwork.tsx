import React from 'react'
import Link from 'next/link'
import { Linkedin } from '../../assets/icons/LinkedinIcon'
import { GithubIcon } from '../../assets/icons/GithubIcon'
import { TwitterIcon } from '../../assets/icons/TwitterIcon'
import style from './social.module.css'

export const SocialNetwork = () => {
  return (
    <div className={style.socialNetwork}>
      <Link href='https://www.linkedin.com/in/luis-gabriel-janco/'>
        <a target='_blank'>
          <Linkedin />
        </a>
      </Link>
      <Link href='https://github.com/LuiSauter'>
        <a target='_blank'>
          <GithubIcon />
        </a>
      </Link>
      <Link href='https://twitter.com/sauterdev'>
        <a target='_blank'>
          <TwitterIcon />
        </a>
      </Link>
    </div>
  )
}
