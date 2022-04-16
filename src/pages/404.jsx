import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import styles from '../styles/components/404.module.scss'


const ErrorPage = () => {
    return (
        <Layout>
            <div className={styles.errorPageContainer}>
                <h1 className={styles.errorMsg}>
                    Oops. This page does not exist. Please 
                    click <Link className={styles.homeLink} to='/'>here</Link> to 
                    navigate back to the home page.
                </h1>
            </div>
        </Layout>
    )
}

export default ErrorPage
