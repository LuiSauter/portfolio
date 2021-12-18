import React from 'react'
import { CardDescription, CardItemProject, Footer } from './style'
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
    <Link href={url}>
      <a target='_blank'>
        <CardItemProject className='card-project'>
          <CardDescription className='card-project__description'>
            <h3>{title}</h3>
            <p>{description}</p>
            <article>
              {authors.map((author, index) => (
                <p key={index}>
                  <Image
                    alt={author.name}
                    src={author.image}
                    width={30}
                    height={30}
                  />
                  <span>{author.name}</span>
                </p>
              ))}
            </article>
            <Footer>
              <ul>
                {tags.map((tag, index) => (
                  <li className='border-color-skills' key={index}>
                    <span>{tag}</span>
                  </li>
                ))}
              </ul>
            </Footer>
          </CardDescription>
          <div className='card-project__img'>
            <Image
              alt={title}
              src={image}
              layout='intrinsic'
              width={500}
              height={260}
              placeholder='blur'
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
              // loading='lazy'
              objectFit='cover'
              objectPosition='top center'
              aria-label={title}
              priority={true}
            />
          </div>
        </CardItemProject>
      </a>
    </Link>
  )
}
