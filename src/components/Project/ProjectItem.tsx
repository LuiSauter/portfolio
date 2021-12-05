import React from 'react'
import { CardItemProject } from './style'
import Image from 'next/image'
import Link from 'next/link'

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
          <div className='card-project__img'>
            <Image
              alt={title}
              src={image}
              layout='fill'
              objectFit='cover'
              objectPosition='top center'
              aria-label={title}
              priority={true}
            />
          </div>
          <div>
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
            <footer>
              <ul>
                {tags.map((tag, index) => (
                  <li className='border-color-skills' key={index}>
                    <span>{tag}</span>
                  </li>
                ))}
              </ul>
            </footer>
          </div>
        </CardItemProject>
      </a>
    </Link>
  )
}
