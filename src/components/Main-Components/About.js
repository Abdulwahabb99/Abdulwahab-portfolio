import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function About() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section className="about-area page-section scroll-to-page" id="about">
        <div className="custom-container">
            <div className="about-content content-width">
                <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                        <i className="lar la-user"></i> About
                    </h4>
                    <h1 className="scroll-animation" data-aos='fade-up'>Every great solution begins with<br/>
                        an even <span>better story</span></h1>
                </div>
                <p className="scroll-animation" data-aos='fade-up'>I am a Frontend Engineer with 4+ years of experience shipping scalable web applications with React.js and Next.js. My work spans fintech dashboards and demos, SaaS and manufacturing operations UIs, edtech platforms, and design-system-driven interfaces where consistency and performance matter.</p>
                <p className="scroll-animation" data-aos='fade-up'>I collaborate closely with product, design, and backend teams, integrate RESTful APIs, and care about accessible, responsive experiences across devices. Strengths I bring to every team include problem solving, communication, teamwork, adaptability, and time management. Based in Cairo, Egypt; military service completed.</p>
            </div>
        </div>
    </section>
  )
}
