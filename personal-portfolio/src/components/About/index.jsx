import React, {useState, useEffect} from 'react'
import "./index.scss"
import AnimatedLetters from "../AnimatedLetters"
import { faCss, faGitAlt, faHtml5, faJava, faJsSquare, faPython, faReact } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from "react-loaders"

export default function About() {
  const [letterClass, setLetterClass] = useState("text-animate")

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
            <AnimatedLetters
            letterClass={letterClass}
            strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
            idx={15}
            />
        </h1>
        <p>
        I am a very ambitious software developer with a strong passion for learning and growing in the tech field. I am always eager to dive into new technologies, tackle complex problems, and expand my skill set. Whether it is exploring full-stack development, AI, or emerging technologies, I am committed to continuously improving and applying my knowledge to build impactful, user-focused applications.
        </p>
        

      </div>

      <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
                <FontAwesomeIcon icon={faPython} color="#ffd343" />
            </div>
            <div className="face2">
                <FontAwesomeIcon icon={faReact} color="#61DBFB" />
            </div>
            <div className="face3">
                <FontAwesomeIcon icon={faCss} color="#28A4D9" />
            </div>
            <div className="face4">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>

      </div>
    </div>
    <Loader type="pacman" />
    </>
  )
}
