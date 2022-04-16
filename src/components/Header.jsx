import React, { useState } from 'react'
import { Link, animateScroll } from "react-scroll";
import NavModal from './NavModal'
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from '../styles/components/Header.module.scss'

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenNav = () => {
        setIsModalOpen(true)
    }
    const handleCloseNav = () => {
        setIsModalOpen(false)
    }
    const handleLogoClick = (e) => {
        e.target.blur()
        animateScroll.scrollToTop({duration: 500})
    }
    const handleLogoKeyPress = (e) => {
        if (e.keyCode === 13) {
            handleLogoClick()
        }
    }

    return (
        <div className={styles.container}>
            <span  
                role="button"
                tabIndex={0}
                className={styles.name} 
                onClick={handleLogoClick}
                onKeyPress={handleLogoKeyPress} 
            > 
                Bryce Byker 
            </span>
            <div className={styles.mobileLinksContainer}>
                {
                    isModalOpen
                    ?
                    <FaTimes 
                        className={styles.menuIcon}
                        size={24} 
                        onClick={handleCloseNav}
                    />
                    :
                    <FaBars 
                        className={styles.menuIcon}
                        size={24} 
                        onClick={handleOpenNav}
                    />
                }
                <NavModal 
                    isModalOpen={isModalOpen}
                    handleCloseNavModal={handleCloseNav}
                />
            </div>
            <div className={styles.desktopLinksContainer}>
                <nav className={styles.navLinks}>
                    
                    <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-90}
                        duration={500}
                    >
                        Projects
                    </Link>
                    <Link
                        activeClass="active"
                        to="resume"
                        spy={true}
                        smooth={true}
                        offset={-90}
                        duration={500}
                    >
                        Resume
                    </Link>
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-90}
                        duration={500}
                    >
                        About
                    </Link>                 
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-90}
                        duration={500}
                    >
                        Contact
                    </Link>
                </nav>

            </div>
        </div>
    )
}

export default Header
