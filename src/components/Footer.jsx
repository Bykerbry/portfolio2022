import React from 'react'
import styles from '../styles/components/Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <p>Developed & Designed by Bryce Byker</p>
            <p className={styles.icons8}>
                Circle B icon by <a target="_blank" href="https://icons8.com/icon/66723/circled-b" rel="noreferrer">Icons8</a>
            </p>
        </div>
    )
}
export default Footer
