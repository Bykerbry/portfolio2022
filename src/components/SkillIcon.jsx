import React from 'react'
import styles from '../styles/components/SkillIcon.module.scss'

const SkillIcon = ({ skill }) => {
  return (
    <div className={styles.skillContainer}>
      <p>{skill.name}</p>
      <div className={styles.icon}>
        {skill.icon}
      </div>
    </div>
  )
}

export default SkillIcon
