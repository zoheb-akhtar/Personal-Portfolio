import React, {useState, useEffect} from 'react'
import "./index.scss"
import AnimatedLetters from "../AnimatedLetters"
import { faCss, faGitAlt, faHtml5, faJava, faJsSquare, faPython, faReact } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from "react-loaders"
import Node from "../../assets/images/nodejs.png"
import VS from "../../assets/images/vscode.png"


export default function About() {
  const [letterClass, setLetterClass] = useState("text-animate")

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const languages = [
    {
      title: "Javascript",
      img: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png"
    },
    {
      title: "Python",
      img: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png"
    },
    {
      title: "Java",
      img: "https://cdn-icons-png.flaticon.com/128/5968/5968282.png"
    },
    {
      title: "HTML",
      img: "https://cdn-icons-png.flaticon.com/128/174/174854.png"
    },
    {
      title: "CSS",
      img: "https://cdn-icons-png.flaticon.com/128/732/732190.png"
    },
    {
      title: "SQL",
      img: "https://cdn-icons-png.flaticon.com/128/4492/4492311.png"
    },
    
  ]

  const frameworks = [
    {
      title: "ReactJS",
      img: "https://cdn-icons-png.flaticon.com/128/875/875209.png"
    },
    {
      title: "NodeJS",
      img: "https://cdn-icons-png.flaticon.com/128/15484/15484303.png"
    },
    {
      title: "PostgreSQL",
      img: "https://cdn-icons-png.flaticon.com/128/5968/5968342.png"
    },
  ]

  const devTools = [
    {
      title: "Git",
      img: "https://cdn-icons-png.flaticon.com/128/15466/15466163.png"
    },
    {
      title: "GitHub",
      img: "https://cdn-icons-png.flaticon.com/128/733/733553.png"
    },
    {
      title: "VSCode",
      img: "https://cdn-icons-png.flaticon.com/128/15713/15713436.png"
    },
  ]

  const languageElements = languages.map((lang) => {
    return (
      <div className="lang-container">
        <img className="lang-img" src={lang.img}/>
        <p className="lang-name">{lang.title}</p>
      </div>
    )
  })

  const frameworkElements = frameworks.map((frame) => {
    return (
      <div className="lang-container">
        <img className="lang-img" src={frame.img}/>
        <p className="lang-name">{frame.title}</p>
      </div>
    )
  })

  const devElements = devTools.map((dev) => {
    return (
      <div className="lang-container">
        <img className="lang-img" src={dev.img}/>
        <p className="lang-name">{dev.title}</p>
      </div>
    )
  })

  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1 className="page-title">
            <AnimatedLetters
            letterClass={letterClass}
            strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
            idx={15}
            />
        </h1>
        <p>
        I am a very ambitious software developer with a strong passion for learning and growing in the tech field. I am always eager to dive into new technologies, tackle complex problems, and expand my skill set. Whether it is exploring full-stack development, AI, or emerging technologies, I am committed to continuously improving and applying my knowledge to build impactful, user-focused applications.
        </p>
        
        <div className="prog-cont">
          <p className="prog-title">Languages</p>
          <div className="prog-langs">
          {languageElements}
          </div>
          </div>

          <div className="prog-cont">
          <p className="prog-title">Frameworks</p>
          <div className="prog-langs">
          {frameworkElements}
          </div>
          </div>

          <div className="prog-cont">
          <p className="prog-title">Development Tools</p>
          <div className="prog-langs">
          {devElements}
          </div>
          </div>

        <div className="prog-frameworks"></div>
        <div className="prog-devtools"></div>

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
