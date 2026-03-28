import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="about-area page-section scroll-to-page" id="about">
      <div className="custom-container">
        <div className="about-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="lar la-user"></i> About
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              Every great product starts with a better story{" "}
              <span>I build the systems behind it.</span>
            </h1>
          </div>
          <p className="scroll-animation" data-aos="fade-up">
            Frontend Engineer with 4+ years of experience building scalable web
            applications using React.js and Next.js, with a strong focus on
            fintech, SaaS, and data-driven platforms.
          </p>
          <p className="scroll-animation" data-aos="fade-up">
            I specialize in crafting high-performance dashboards, design
            systems, and complex user flows that balance usability, scalability,
            and clean architecture.
          </p>
        </div>
      </div>
    </section>
  );
}
