import React, { useEffect, useState } from 'react'
import "./index.scss"
import AnimatedLetters from '../AnimatedLetters'
import Loader from "react-loaders"
import WorkData from "../data/work.json"
import Briefcase from "../../assets/images/briefcase.png"

export default function Work() {

  const [letterClass, setLetterClass] = useState("text-animate")
  const [activeIndex, setActiveIndex] = useState()
  const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
        clearTimeout(timer)
    }
    }, [])

    function handleShowDescription(idx) {
      setActiveIndex(prevIndex => prevIndex === idx ? null : idx)
      setIsActive(prev => !prev)
    }

    function renderWorkExperience(work) {
      return (
        <>
        <div className="work-container">
          {
            work.map((work, idx) => {
              return (
                <div key={idx} onClick={() => handleShowDescription(idx)} className="work-box">
                <h2 className="company-title">{work.company}</h2>
                <p className="work-title">{work.title}</p>
                <p className="work-dates">{work.dates}</p>
                {isActive ? null : <p className="click-for-more">Click for more</p>}
                {activeIndex === idx ? (
                <>
                <br />
                <p className="bullet-1">{work.description1}</p>
                <br />
                <p className="bullet-2">{work.description2}</p>
                <br />
                <p className="bullet-3">{work.description3}</p>
                </> ) : null
                }
                </div>
              )
            })
          }
        </div>
        <img className="briefcase" src={Briefcase} alt="work"/>
        </>
      )
    }

  return (
    <>
    <div className="container work-page">
      <h1 className="page-title">
        <AnimatedLetters 
        letterClass={letterClass}
        idx={15}
        strArray={"Work Experience".split("")}
        />
      </h1>
      <div>{renderWorkExperience(WorkData.work)}</div>
    </div>
    <Loader type="pacman"/>
    </>
  )
}
