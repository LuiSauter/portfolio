import React from 'react'
import { CardItemProject } from './style'
import Image from 'next/image'

export const ProjectItem = ({
  authors,
  description,
  image,
  tags,
  title,
  url,
}: Project) => {
  return (
    <CardItemProject className='card-project'>
      <figure>
        <Image
          alt={title}
          src={image}
          width={400}
          height={290}
          layout='responsive'
          objectFit='cover'
          objectPosition='top'
          aria-label={title}
          priority={true}
        />
      </figure>
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
                {tag}
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </CardItemProject>
  )
}
