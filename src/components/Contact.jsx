import React, { useState, useRef } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import ReCAPTCHA from "react-google-recaptcha";
import styles from '../styles/components/Contact.module.scss'

const Contact = () => {
    const [sending, setSending] = useState(false)
    const [messageSent, setMessageSent] = useState(false)
    const [messageError, setMessageError] = useState(false)
    const [recapchaError, setRecapchaError] = useState(false)
    const recaptchaRef = useRef();

    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const linkedinURL = 'https://www.linkedin.com/in/bryce-byker'
    const githubURL = 'https://www.github.com/Bykerbry'
    const apiGatewayUrl = ' https://jjl6w7c4xg.execute-api.us-east-1.amazonaws.com/prod/send-email'

    const handleSubmitContactForm = (data) => {
        setSending(true)
        if (recaptchaRef.current.getValue()) {
            axios.post(apiGatewayUrl, data)
            .then(response => {
                setSending(false)
                setMessageSent(true)
                setRecapchaError(false)
                reset()
                console.log(response.data)
            })
            .catch (error => {
                setSending(false)
                setMessageSent(true)
                setMessageError(true)
                setRecapchaError(false)
                console.log(error.message)
            })
        } else {
            setSending(false);
            setRecapchaError(true)
        }
    } 

    const handleChangeReCAPTCHA = (data) => {
        if (data) {
            setRecapchaError(false);
        }
    }

    return (
        <section className={styles.contactContainer} id='contact'>
            <h2 className='section-header'>CONTACT</h2>
            <h1 className='section-subheader'>CONTACT ME</h1>
            <div className={styles.contentContainer}>
                <div className={styles.socialLinksContainer}>
                    <div>
                        <a href={linkedinURL} target='_blank' rel="noreferrer">
                            <FaLinkedin className={styles.socialIcon} size={48} />
                        </a>
                        <div className={styles.socialLink}>
                            <a href={linkedinURL} target='_blank' rel="noreferrer">linkedin.com/</a>
                            <a href={linkedinURL} target='_blank' rel="noreferrer">in/bryce-byker</a>
                        </div>
                    </div>
                    <div>
                        <a href={githubURL} target='_blank' rel="noreferrer">
                            <FaGithubSquare className={styles.socialIcon} size={48} />
                        </a>
                        <div className={styles.socialLink}>
                            <a href={githubURL} target='_blank' rel="noreferrer">github.com/</a>
                            <a href={githubURL} target='_blank' rel="noreferrer">Bykerbry</a>
                        </div>
                    </div>
                    <div>
                        <FaEnvelope className={styles.socialIcon} size={48} />
                        <div><p className={styles.socialLink}>bryce1492@gmail.com</p></div>
                    </div>
                </div>
                <form className={styles.contactForm} onSubmit={handleSubmit(handleSubmitContactForm)}>
                    <div className={styles.inputContainer}>
                        <input 
                            type='text' 
                            placeholder='Full Name*' 
                            {...register("name", {required: true})}
                        />
                        {errors.name && <span className={styles.errorMsg}>Please include your name.</span>}
                    </div>
                    <div className={styles.inputContainer}>
                        <input 
                            type='text'
                            aria-label='Email'
                            placeholder='Email*' 
                            {...register("email", {required: true})} 
                        />
                        {errors.email && <span className={styles.errorMsg}>Please include your email.</span>}
                    </div>
                    <div className={styles.inputContainer}>
                        <input 
                            type='text'
                            name='business' 
                            aria-label='Business Name'
                            placeholder='Business Name' 
                            {...register("business")}
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <input 
                            type='text'
                            name='subject' 
                            aria-label='Subject'
                            placeholder='Subject*' 
                            {...register("subject", {required: true})} 
                        />
                        {errors.subject && <span className={styles.errorMsg}>Please include a subject for your message.</span>}
                    </div>
                    <div className={styles.textAreaContainer}>
                        <textarea 
                            type='text'
                            aria-label='Message'
                            placeholder='Message*' 
                            {...register("message", { required: true })}
                        />
                        {errors.message && <span className={styles.errorMsg}>Please include the message you'd like to send me.</span>}
                    </div>
                    { messageSent && !messageError && <h3 className={styles.thankYouMsg}>Thank you! Your message has been sent.</h3>}
                    { messageSent && messageError && <p>Sorry, there was an error. Please try again later or try reaching out to me via email or via one of my social media links.</p>}
                    { recapchaError && <p>Please complete ReCAPTCHA below</p>}
                    <div className={styles.submitBtnContainer}>
                        <ReCAPTCHA 
                            sitekey='6LespXsfAAAAAHyM-Ap2Npv-Mut0Lj8Tj4r0_w-b' 
                            onChange={handleChangeReCAPTCHA}
                            ref={recaptchaRef}
                        />
                        <button type='submit' disabled={sending}>
                            { sending ? 'Sending...' : 'Send Message' }
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact


// https://nb8cyvt6a4.execute-api.us-east-1.amazonaws.com/production = url to post to API Gateway