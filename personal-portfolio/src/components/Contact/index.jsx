import Loader from "react-loaders"
import "./index.scss"
import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useState, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import emailjs from "@emailjs/browser"

console.log(import.meta.env.VITE_TEMPLATE_ID)
console.log(import.meta.env.VITE_SERVICE_ID)
console.log(import.meta.env.VITE_PUBLIC_ID)

export default function Contact() {
const [letterClass, setLetterClass] = useState("text-animate")
const refForm = useRef()

useEffect(() => {
setTimeout(() => {
    setLetterClass('text-animate-hover')
    }, 3000)
}, [])


function sendEmail(event) {
    event.preventDefault()
    emailjs
        .sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            refForm.current,
            {
                publicKey: import.meta.env.VITE_PUBLIC_ID
            }
        )
        .then (
            () => {
            alert('Message succesfully sent!')
            window.location.reload(false)
        },
        () => {
            alert('Failed to send the message, please try again.')
        }
        )
}

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                        strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
                        idx={15}
                        letterClass={letterClass}
                        />
                    </h1>
                    <p>Thank you for your interest in getting in touch!</p>
                    <br />
                    <p>I value open communication and welcome any inquiries, feedback, or collaboration opportunities. Please don't hesitate to get in touch with me by filling out the contact form.</p>
                    <div className="icon-container">
                    <a target="_blank" rel="noreferrer" href="mailto:zoheb.akh1@gmail.com">
                        <FontAwesomeIcon className="email-icon" icon={faEnvelope} color="#ffd700" />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/zoheb-akhtar-593051284/">
                        <FontAwesomeIcon className="linkedin-icon" icon={faLinkedin} color="#ffd700" />
                    </a>
                    </div>
                    
                    
                </div>
                <div className="contact-form">
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                        <li>
                            <input type="text" name="name" placeholder="Name" required />
                        </li>
                        <li>
                            <input type="email" name="email" placeholder="Email" required />
                        </li>
                        <li>
                            <input placeholder="Subject" type="text" name="subject" />
                        </li>
                        <li>
                            <textarea placeholder="Message" name="message" required></textarea>
                        </li>
                        <li>
                            <input type="submit" className="flat-button" value="SEND"/>
                        </li>
                        </ul>  
                    </form>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}