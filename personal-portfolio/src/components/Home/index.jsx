import React from 'react'
import LogoZ from "../../assets/images/logo-z.png"

export default function Home() {
  return (
    <div className="container home-page">
        <div className="text-zone">
            <h1>Hi, <br /> I'm
            <img src={LogoZ} alt="developer" />
            oheb
            <br />
            Software Engineer
            </h1>
            <h2>Computer Science, 2028 at Northeastern University</h2>
            <Link to="/contact" className="flat-button">CONTACT ME</Link>
        </div>
    </div>
  )
}
