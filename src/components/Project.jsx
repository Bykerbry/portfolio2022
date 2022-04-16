import React from 'react'
import ReactPlayer from 'react-player'
import styles from '../styles/components/Project.module.scss'

const Project = ({project}) => {
  return (
    <>
    <div className={styles.projectContainer} >
      <div className={styles.projectHeader}>
        <h3>{project.title}</h3>
        {project.icon}
      </div>
      <p className={styles.projectDesc}>{project.description}</p>
      <div className={styles.playerWrapper}>
        <ReactPlayer 
          className={styles.reactPlayer}
          url={project.video}  
          controls={true} 
          width="100%"
          height="100%"
        />
      </div>
    </div>
    {project.id !== 3 && <hr className={styles.hr}/>}
    </>
  )
}

export default Project
