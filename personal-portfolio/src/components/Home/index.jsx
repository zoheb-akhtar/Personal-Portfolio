import React, {useState, useEffect} from 'react'
import LogoZ from "../../assets/images/logo-z2.png"
import { Link } from "react-router-dom"
import AnimatedLetters from '../AnimatedLetters'
import Logo from "./Logo"
import Loader from "react-loaders"
import "./index.scss"

export default function Home() {
  const [letterClass, setLetterClass] = useState("text-animate")
  const nameArray = ["Z", "o", "h", "e", "b", ","]
  const jobArray = ["s", "o", "f", "t", "w", "a", "r", "e", " ", "e", "n", "g", "i", "n", "e", "e", "r", "."]

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
    <div className="container home-page">
        <div className="text-zone">
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i</span>
              <br />
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>
            
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={18}/>
            </h1>
            <h2>Computer Science, 2028 at Northeastern University</h2>
            <Link to="/contact" className="flat-button">CONTACT ME</Link>
        </div>
        <Logo />
    </div>
    <Loader type="pacman" />
    </>
  )
}
