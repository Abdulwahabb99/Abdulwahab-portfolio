import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Service() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section className="services-area page-section scroll-to-page" id="services">
        <div className="custom-container">
            <div className="services-content content-width">
                <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                        <i className="las la-stream"></i> Services
                    </h4>
                    <h1 className="scroll-animation" data-aos='fade-up'>My <span>Specializations</span></h1>
                </div>

                <div className="services-items">
                    <div className="service-item scroll-animation" data-aos='fade-up'>
                        <i className="las la-code"></i>
                        <h2>React &amp; Next.js applications</h2>
                        <p>SPAs and multi-page experiences with React.js and Next.js, Redux and React Query, Bootstrap, MUI, and Chakra UI—optimized for performance and maintainability</p>
                        <span className="projects">Frontend · SPA</span>
                    </div>
                    <div className="service-item scroll-animation" data-aos='fade-up'>
                        <i className="las la-drafting-compass"></i>
                        <h2>Design systems &amp; UI architecture</h2>
                        <p>Component libraries and design-system-aligned UIs that speed delivery and keep products visually consistent at scale</p>
                        <span className="projects">Design systems</span>
                    </div>
                    <div className="service-item scroll-animation" data-aos='fade-up'>
                        <i className="las la-chart-line"></i>
                        <h2>Fintech, SaaS &amp; data-heavy UIs</h2>
                        <p>Dashboards and demos with charts (e.g. Recharts), complex forms (e.g. Formik and Yup), RESTful API integration, and Agile workflows with Git</p>
                        <span className="projects">Fintech · SaaS</span>
                    </div>
                </div>    
            </div>
        </div>
    </section>
  )
}
