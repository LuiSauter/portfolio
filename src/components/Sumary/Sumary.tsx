import React from 'react'
import { BookIcon } from '../../assets/icons/BookIcon'
import { CoffeIcon } from '../../assets/icons/CoffeIcon'
import { SumaryContainer } from './SumaryContainer'

export const Sumary = () => {
  const counter = Date.now()
  const day = Number(new Date(counter - 1625358629161)) / 100000000
  const dayFormat = Math.round(day * 8)
  const coffeeNumber = new Intl.NumberFormat('en').format(dayFormat)
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
        <span>{coffeeNumber}</span>
      </article>
    </SumaryContainer>
  )
}
