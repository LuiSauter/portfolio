import React from 'react'

interface Props {
  text: string
}

export const Tag = ({text}: Props) => {
  return <li>{text}</li>
}
