import React from 'react'
import { BookIcon } from '../../assets/icons/BookIcon'
import { CoffeIcon } from '../../assets/icons/CoffeIcon'
import { SumaryContainer } from './SumaryContainer'
import { technologiesIcons } from '../../assets/icons/SkillsIcons'
const initialDate = new Date("08/08/2021")
const currentDay = new Date(Date.now())
const DifferenceInTime = currentDay.getTime() - initialDate.getTime(); 
const DifferenceInDays = DifferenceInTime / (1000 * 3600 * 24);

export const Sumary = () => {
  const coffeeNumber = new Intl.NumberFormat('en').format(Math.floor(DifferenceInDays))
  return (
    <SumaryContainer>
      <article className='card-sumary'>
        <figure>
          <BookIcon />
        </figure>
        <h4>Cursos terminados</h4>
        <span>{Object.values(technologiesIcons).length}</span>
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
