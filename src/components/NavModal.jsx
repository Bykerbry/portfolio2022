import React from 'react'
import { Link } from "react-scroll";
import Modal from 'react-modal'
import styles from '../styles/components/NavModal.module.scss'

Modal.setAppElement("#root");

const NavModal = ({isModalOpen, handleCloseNavModal}) => {
    return (
        <Modal 
            isOpen={isModalOpen}
            onRequestClose={handleCloseNavModal}
            className={styles.modal}
            overlayClassName={styles.overlay}
            closeTimeoutMS={250}
        >
            <ul className={styles.navLinks}>
                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    onClick={handleCloseNavModal}
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
                    onClick={handleCloseNavModal}
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
                    onClick={handleCloseNavModal}
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
                    onClick={handleCloseNavModal}
                >
                    Contact
                </Link>
            </ul>   
        </Modal>
    )
}

export default NavModal
