import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/** Brand icons via Simple Icons CDN — [slug, hex color without #] */
const icon = (slug, color) =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

const ADVANTAGES = [
  {
    name: "React.js",
    aos: "fade-right",
    icons: [[ "react", "61DAFB" ]],
  },
  {
    name: "Next.js",
    aos: "fade-up",
    icons: [[ "nextdotjs", "FFFFFF" ]],
  },
  {
    name: "TypeScript",
    aos: "fade-down",
    icons: [[ "typescript", "3178C6" ]],
  },
  {
    name: "JavaScript (ES6+)",
    aos: "fade-left",
    icons: [[ "javascript", "F7DF1E" ]],
  },
  {
    name: "Redux",
    aos: "fade-right",
    icons: [[ "redux", "764ABC" ]],
  },
  {
    name: "React Query",
    aos: "fade-up",
    icons: [[ "reactquery", "FF4154" ]],
  },
  {
    name: "Material-UI (MUI)",
    aos: "fade-down",
    icons: [[ "mui", "007FFF" ]],
  },
  {
    name: "Chakra UI",
    aos: "fade-left",
    icons: [[ "chakraui", "319795" ]],
  },
  {
    name: "Bootstrap",
    aos: "fade-right",
    icons: [[ "bootstrap", "7952B3" ]],
  },
  {
    name: "Design systems",
    aos: "fade-up",
    icons: [[ "storybook", "FF4785" ]],
  },
  {
    name: "HTML5 & CSS3",
    aos: "fade-down",
    icons: [
      [ "html5", "E34F26" ],
      [ "css", "1572B6" ],
    ],
  },
  {
    name: "REST APIs · Git · Agile",
    aos: "fade-left",
    icons: [
      [ "axios", "5A29E4" ],
      [ "git", "F05032" ],
      [ "jira", "0052CC" ],
    ],
  },
];

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
            {ADVANTAGES.map((item) => (
              <div
                key={item.name}
                className="col-md-3 scroll-animation"
                data-aos={item.aos}
              >
                <div className="skill">
                  <div className="skill-inner">
                    {item.icons.length === 1 ? (
                      <img
                        className="skill-brand-icon"
                        src={icon(item.icons[0][0], item.icons[0][1])}
                        alt=""
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div className="skill-brand-icons">
                        {item.icons.map(([slug, color]) => (
                          <img
                            key={slug}
                            src={icon(slug, color)}
                            alt=""
                            loading="lazy"
                            decoding="async"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  <p className="name">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
