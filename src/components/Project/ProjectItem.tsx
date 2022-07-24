import React from 'react'
import * as icon from '../../assets/icons'

const shimmer = (w: any, h: any) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: any) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

export const ProjectItem = ({ description, tags, title, url }: Project) => {
  const github = 'https://github.com/LuiSauter/'
  return (
    <article className='card-item'>
      <div className='card-item__header'>
        <span className='book'>{icon.book}</span>
        <h2>{title}</h2>
        <span className='visibility'>Public</span>
        <img
          src={`https://badgen.net/github/commits/LuiSauter/${url}`}
          title={url}
        />
        <img src='https://badgen.net/badge/Open%20Source%20%3F/Yes%21/blue?icon=github' />
      </div>
      <p className='card-item__description'>{description}</p>
      <ul className='card-item__tags'>
        {tags.map((tag, index: number) => (
          <li key={index}>
            <span className='dot' style={{ color: tag.color }}>
              •
            </span>
            <span className='skill'>{tag.skill}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}
