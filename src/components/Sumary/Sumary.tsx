import React from 'react'
import { BookIcon } from '../../assets/icons/BookIcon'
import { CoffeIcon } from '../../assets/icons/CoffeIcon'
import { SumaryContainer } from './SumaryContainer'

export const Sumary = () => {
  return (
    <SumaryContainer>
      <article className='card-sumary'>
        <figure>
          <BookIcon />
        </figure>
        <h4>Cursos terminados</h4>
        <span>13</span>
      </article>
      <article className='card-sumary'>
        <figure>
          <CoffeIcon />
        </figure>
        <h4>Café consumido</h4>
        <span>1286</span>
      </article>
    </SumaryContainer>
  )
}
