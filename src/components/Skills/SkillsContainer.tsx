import React from 'react'
import * as skills from '../../assets/icons/SkillsIcons'
import { SkillsStyle } from './SkillsStyle'

export const SkillsContainer = () => {
  return (
    <SkillsStyle>
      {skills.iconstXd.map((svg, index: number) => (
        <li key={index} style={{ color: svg.color }} title={svg.skill}>
          {svg.svg}
        </li>
      ))}
    </SkillsStyle>
  )
}
