import React from 'react'
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaAngular,
  FaReact,
  FaNode,
  FaGitAlt
} from 'react-icons/fa'
import { DiJqueryLogo } from 'react-icons/di'
import me from '../assets/me.jpeg'
import SkillIcon from './SkillIcon'
import styles from '../styles/components/About.module.scss'

const About = () => {
  const skills = [
    {
      id: 1,
      name: 'HTML5',
      icon: <FaHtml5 size={48} className={`${styles.skillIcon} ${styles.html5}`} />
    },
    {
      id: 2,
      name: 'CSS3',
      icon: <FaCss3Alt size={48} className={`${styles.skillIcon} ${styles.css3}`} />
    },
    {
      id: 3,
      name: 'JavaScript',
      icon: <FaJsSquare size={48} className={`${styles.skillIcon} ${styles.js}`} />
    },
    {
      id: 4,
      name: 'Angular',
      icon: <FaAngular size={48} className={`${styles.skillIcon} ${styles.angular}`}/>
    },    
    {
      id: 5,
      name: 'React',
      icon: <FaReact size={48} className={`${styles.skillIcon} ${styles.react}`}/>
    },
    {
      id: 6,
      name: 'jQuery',
      icon: <DiJqueryLogo size={48} className={`${styles.skillIcon} ${styles.jquery}`}/>
    },
    {
      id: 7,
      name: 'Node.js',
      icon: <FaNode size={48} className={`${styles.skillIcon} ${styles.node}`}/>
    },    
    {
      id: 8,
      name: 'Git',
      icon: <FaGitAlt size={48} className={`${styles.skillIcon} ${styles.git}`}/>
    }
  ]
  return (
    <section id='about'>
      <h2 className='section-header'>ABOUT</h2>
      <h1 className='section-subheader'>ABOUT ME</h1>
      <div className='section-body'>
        <div className={styles.skillsContainer}>
          {skills.map(skill => <SkillIcon skill={skill} key={skill.id} />)}
        </div>
        <div className={styles.aboutContentContainer}>
          <img className={styles.me} src={me} alt="Bryce Byker"/>
          <div>
            <h3>A Little About Me</h3>
            <p>I am a passionate web developer eager to learn new skills and make a positive impact. With knowledge in HTML, CSS, and JavaScript as well as Angular, React, jQuery, node.js, SQL and Git/GitHub for version control/collaboration, I have crafted many user friendly web applications both individually and with other developers. I am always excited to challenge myself and develop new skills and am constantly learning to be the best developer I can be!</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About