import Image from 'next/image'
import React from 'react'
import style from '../styles/pages/page404.module.css'

const Page404 = () => {
  return (
    <div className={style.page404}>
      <figure>
        <Image
          src='/images/page404.svg'
          alt='sauterdev - page 404'
          layout='fill'
        />
      </figure>
    </div>
  )
}

export default Page404
