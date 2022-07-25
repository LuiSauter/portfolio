import React, { useEffect, useState } from 'react'
import { BookIcon } from '../../assets/icons/BookIcon'
import { CoffeIcon } from '../../assets/icons/CoffeIcon'
import { technologiesIcons } from '../../assets/icons/SkillsIcons'
import style from './sumary.module.css'

const frontStack = Object.values(technologiesIcons.frontend).length
const backStack = Object.values(technologiesIcons.backend).length

const Sumary: React.FC = () => {
  const [coffeeCount, setCoffeeCount] = useState('010')
  useEffect(() => {
    const initialDate = new Date("08/01/2021")
    const currentDay = new Date(Date.now())
    const DifferenceInTime = currentDay.getTime() - initialDate.getTime();
    const DifferenceInDays = DifferenceInTime / (1000 * 3600 * 24)
    setCoffeeCount(
      new Intl.NumberFormat('en').format(Math.floor(DifferenceInDays))
    )
    return () => {
    }
  }, [])

  return (
    <section className={style.sumary}>
      <h3 id='sumary'>Summary</h3>
      <div className={style.content}>
        <article className={style.card}>
          <figure>
            <BookIcon />
          </figure>
          <h4>Cursos terminados</h4>
          <span>{frontStack + backStack + 3}</span>
        </article>
        <article className={style.card}>
          <figure>
            <CoffeIcon />
          </figure>
          <h4>Café consumido</h4>
          <span>{coffeeCount}</span>
        </article>
      </div>
    </section>
  )
}

export default Sumary
