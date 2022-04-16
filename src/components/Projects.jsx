import React from 'react'
import { FaRecycle, FaUsers } from 'react-icons/fa'
import { GiBoxingGlove } from 'react-icons/gi'
import Project from './Project'
import styles from '../styles/components/Projects.module.scss'


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'BEST',
      description: <span>BEST stands for Boxing Event Supervisory Tool. It is a tool built for boxing event coordinators to simplify the managment of boxers, officials, bouts and much more. It is an <strong>electron app</strong> built using <strong>Bootstrap 4</strong> & <strong>jQuery</strong>. <strong>Git</strong> was used to collaborate with another develper right here in Grand Rapids, MI.</span>, 
      icon: <GiBoxingGlove size={48} className={styles.bestIcon} />,
      video: 'https://vimeo.com/498111169'
    },
    {
      id: 2,
      title: 'GReen',
      description: <span>Using <strong>Angular 9</strong> & <strong>Google Maps</strong> with Refuse & Recycle data from the City of Grand Rapids, GReen is a responsive web app that makes recycling easy. The user can find their next pickup date with the click of a button, find what can & can't be recycled in their bin, locate nearby recycle centers & connect with city resources.</span>,
      icon: <FaRecycle size={48} className={styles.greenIcon} />,
      video: 'https://vimeo.com/498151129'
    },
    {
      id: 3,
      title: 'Postr',
      description: <span>Postr is a simple social media application built completly from scratch out of an urge to learn. I built out the back-end using <strong>Node.js</strong> & <strong>MongoDB</strong> and the front-end is built with <strong>React</strong> & <strong>Redux</strong>. Users are able to create their account, post content, change their profile pictures, interact with other users' posts & have their sessions persisted for 7 days using the endpoints I created.</span>,
      icon: <FaUsers size={48} className={styles.postrIcon} />,
      video: 'https://vimeo.com/498206871'
    }
  ]

  return (
    <section id='projects' className={styles.projectsContainer}>
      <h2 className='section-header'>PROJECTS</h2>
      <h1 className='section-subheader'>MY PROJECTS</h1>
      <div className='section-body'>
        {projects.map(project => <Project project={project} key={project.id}/>)}
      </div>
    </section>
  )
}

export default Projects
