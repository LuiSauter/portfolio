import React from 'react'
import { technologiesIcons } from '../../assets/icons/SkillsIcons'
import { SkillsStyle } from './SkillsStyle'

export const SkillsContainer = () => {

  return (
    <SkillsStyle>
      {Object.values(technologiesIcons).map((svg, index: number) => (
        <li key={index} style={{ color: svg.color }} title={svg.skill}>
          {svg.svg}
        </li>
      ))}
    </SkillsStyle>
  )
}
