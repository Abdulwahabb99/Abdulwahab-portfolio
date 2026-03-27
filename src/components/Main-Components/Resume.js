import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Resume() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section className="resume-area page-section scroll-to-page" id="resume">
        <div className="custom-container">
            <div className="resume-content content-width">
                <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                        <i className="las la-briefcase"></i> Resume
                    </h4>
                    <h1 className="scroll-animation" data-aos='fade-up'>Education & <span>Experience</span></h1>
                </div>

                <div className="resume-timeline">
                    <div className="item scroll-animation" data-aos='fade-right'>
                        <span className="date">Mar 2025 – Present</span>
                        <h2>Frontend Engineer (React.js &amp; Next.js)</h2>
                        <p>SWFT (Fintech) — Cairo, Egypt</p>
                        <p className="resume-detail">Contributed to a scalable component library and design system for faster, consistent delivery. Built secure fintech web applications with React.js, Next.js, Redux, and Chakra UI. Delivered financial dashboards and data visualizations with Recharts and React Charts for real-time business insight. Collaborated with backend and product on RESTful APIs and responsive, user-focused interfaces.</p>
                    </div>
                    <div className="item scroll-animation" data-aos='fade-left'>
                        <span className="date">Jan 2023 – Mar 2024</span>
                        <h2>Frontend Engineer (React.js)</h2>
                        <p>Garment IO (SaaS, Manufacturing Tech) — Sheikh Zayed, Egypt</p>
                        <p className="resume-detail">Built responsive web interfaces for real-time production insights using React.js, Redux-Saga, MUI, and ag-Grid; focused on scalability and performance with Git and Vite. Contributed to Garment IO’s React Native mobile app for factory managers and operators. Supported the company’s mission to optimize factory performance through IoT and SaaS.</p>
                    </div>
                    <div className="item scroll-animation" data-aos='fade-right'>
                        <span className="date">Jan 2022 – Dec 2022</span>
                        <h2>Frontend Engineer</h2>
                        <p>Akhdar (EdTech) — Cairo, Egypt</p>
                        <p className="resume-detail">Developed and maintained Akhdar’s web platform with high-performance, responsive UI. Built and optimized the admin panel for content, users, and analytics. Partnered with designers and backend engineers on scalable features; improved load times and cross-browser compatibility. Integrated RESTful APIs and analytics; participated in Agile sprints, code reviews, and continuous improvement.</p>
                    </div>
                    <div className="item scroll-animation" data-aos='fade-left'>
                        <span className="date">Education</span>
                        <h2>Bachelor of Science in Computer Science</h2>
                        <p>Mansoura University — Mansoura, Egypt (2017 – 2021)</p>
                        <p className="resume-detail">Graduation project grade: Excellent.</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}
