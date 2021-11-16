import React from 'react'

interface Props {
  text: string
}

export const Tag = ({text}: Props) => {
  return <li className='border-color'>{text}</li>
}
