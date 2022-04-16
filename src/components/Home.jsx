import React from 'react'
import styles from '../styles/components/Home.module.scss'

const Home = () => {
    return (
        <div className={styles.homeContainer} id='home'>
            <div className={styles.imgOverlay}>
                <img src="https://img.icons8.com/ios/100/000000/circled-b.png" className={styles.circleBIcon} alt="" />
                <div className={styles.imgOverlayText}>
                    <h4>
                        Front-End
                    </h4>
                    <h1 >
                        Software Developer
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Home

// Loop through Icons (which are componets) 
