import Loader from "react-loaders"
import "./index.scss"
import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faBriefcase } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        emailjs.init('QNMnKQ8bWgjw3c35P');
    }, []);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timerId);
        };
    }, []);

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_v5wr4yd',
                'template_wbo0i9z',
                refForm.current
            )
            .then(
                () => {
                    alert("Message successfully sent! I will get back to you within 1 to 2 business days.")
                    window.location.reload(false)
                },
                () => {
                    alert("Failed to send the message, please try again")
                }
            )
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <div className="contact-grid">
                        <div className="left-side">
                            <h1>
                                <AnimatedLetters letterClass={letterClass} strArray={"Contact me".split("")} idx={15} />
                            </h1>
                            <p>
                                <br />
                                Thank you for your interest in getting in touch!
                                <br />
                                <br />I value open communication and welcome any inquiries, feedback, or collaboration opportunities. Please don't hesitate to get in touch with me by filling out the contact form.
                                <br />
                                <br />
                                <div className="contact-actions">
                                    <Link to="/projects" className="portfolio-btn">
                                        <FontAwesomeIcon icon={faBriefcase} /> View My Projects
                                    </Link>
                                    <div className="social-icons">
                                        <a target="_blank" rel="noreferrer" href="https://github.com/waleed-kn" className="social-icon">
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>
                                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/muhammadwaleed111/" className="social-icon">
                                            <FontAwesomeIcon icon={faLinkedin} />
                                        </a>
                                        <a target="_blank" rel="noreferrer" href="mailto:muhammadwaleed.se@gmail.com" className="social-icon">
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </a>
                                    </div>
                                </div>
                            </p>
                        </div>
                        <div className="right-side">
                            <div className="contact-form">
                                <form ref={refForm} onSubmit={sendEmail}>
                                    <ul>
                                        <li className="half">
                                            <input type="text" name="name" placeholder="Name" required />
                                        </li>
                                        <li className="half">
                                            <input type="email" name="email" placeholder="Email" required />
                                        </li>
                                        <li>
                                            <input placeholder="Subject" type="text" name="title" required />
                                        </li>
                                        <li>
                                            <textarea placeholder="Message" name="message" required></textarea>
                                        </li>
                                        <li>
                                            <input type="submit" className="flat-button" value="SEND" />
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact