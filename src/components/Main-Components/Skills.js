import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="skills-area page-section scroll-to-page" id="skills">
      <div className="custom-container">
        <div className="skills-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-shapes"></i> my skills
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              My <span>Advantages</span>
            </h1>
          </div>

          <div className="row skills text-center">
            <div className="col-md-3 scroll-animation" data-aos="fade-right">
              <div className="skill">
                <div className="skill-inner">
                  <i className="lab la-react" style={{ fontSize: "48px" }}></i>
                  <h1 className="percent">—</h1>
                </div>
                <p className="name">React.js</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-up">
              <div className="skill">
                <div className="skill-inner">
                  <i
                    className="las la-layer-group"
                    style={{ fontSize: "48px" }}
                  ></i>
                  <h1 className="percent">—</h1>
                </div>
                <p className="name">Next.js</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-down">
              <div className="skill">
                <div className="skill-inner">
                  <i className="lab la-js" style={{ fontSize: "48px" }}></i>
                  <h1 className="percent">—</h1>
                </div>
                <p className="name">TypeScript</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-left">
              <div className="skill">
                <div className="skill-inner">
                  <i className="las la-code" style={{ fontSize: "48px" }}></i>
                  <h1 className="percent">—</h1>
                </div>
                <p className="name">JavaScript (ES6+)</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-right">
              <div className="skill">
                <div className="skill-inner">
                  <i
                    className="las la-project-diagram"
                    style={{ fontSize: "48px" }}
                  ></i>
                  <h1 className="percent">—</h1>
                </div>
                <p className="name">Redux</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-up">
              <div className="skill">
                <div className="skill-inner">
                  <i className="las la-sync" style={{ fontSize: "48px" }}></i>
                  <h1 className="percent">—</h1>
                </div>
                <p className="name">React Query</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-down">
              <div className="skill">
                <div className="skill-inner">
                  <i
                    className="las la-palette"
                    style={{ fontSize: "48px" }}
                  ></i>
                  <h1 className="percent">—</h1>
                </div>
                <p className="name">Material-UI (MUI)</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-left">
              <div className="skill">
                <div className="skill-inner">
                  <i className="las la-icons" style={{ fontSize: "48px" }}></i>
                  <h1 className="percent">—</h1>
                </div>
                <p className="name">Chakra UI</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-right">
              <div className="skill">
                <div className="skill-inner">
                  <i
                    className="lab la-bootstrap"
                    style={{ fontSize: "48px" }}
                  ></i>
                  <h1 className="percent">—</h1>
                </div>
                <p className="name">Bootstrap</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-up">
              <div className="skill">
                <div className="skill-inner">
                  <i className="las la-drafting-compass" style={{ fontSize: "48px" }}></i>
                  <h1 className="percent">—</h1>
                </div>
                <p className="name">Design systems</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-down">
              <div className="skill">
                <div className="skill-inner">
                  <i className="lab la-html5" style={{ fontSize: "48px" }}></i>
                  <h1 className="percent">—</h1>
                </div>
                <p className="name">HTML5 &amp; CSS3</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-left">
              <div className="skill">
                <div className="skill-inner">
                  <i className="lab la-git" style={{ fontSize: "48px" }}></i>
                  <h1 className="percent">—</h1>
                </div>
                <p className="name">REST APIs · Git · Agile</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
