import React from 'react'
// import { CardDescription, CardItemProject, Footer } from './style'
import Image from 'next/image'
import Link from 'next/link'

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

export const ProjectItem = ({
  authors,
  description,
  image,
  tags,
  title,
  url,
}: Project) => {
  return (
    <article className='card-item'>
      <img className='card-item__img' src={image} alt={title} />
      <div className='card-item-info'>
        <Link href={url}>
          <a
            title='repository github'
            target='_blank'
            className='card-item-info__header'
          >
            <h2>{title}</h2>
          </a>
        </Link>
        <ul className='card-item-info__technologies'>
          {tags.map((tag, index: number) => (
            <li key={index} title={tag.skill} style={{ color: tag.color }}>
              {tag.svg}
            </li>
          ))}
        </ul>
        {authors.map((author, index: number) => (
          <Link key={index} href='https://github.com/LuiSauter'>
            <a
              title='github'
              target='_blank'
              className='card-item-info__author'
            >
              <img src={author.image} alt={author.name} />
              <span>{author.name}</span>
            </a>
          </Link>
        ))}
        <p className='card-item-info__description'>{description}</p>
      </div>
    </article>
  )
}
