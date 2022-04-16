import React from 'react'
import { Link } from "react-scroll";

import styles from '../styles/components/Banner.module.scss'

const Banner = () => {
    return (
        <div className={styles.bannerContainer}>
            <h1>Have a Question?</h1>
            <Link
                className={styles.bannerLink}
                to="contact"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
            >
                Contact Me
            </Link>
        </div>
    )
}

export default Banner
