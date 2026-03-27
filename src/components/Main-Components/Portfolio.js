import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lightbox from "lightbox2";
import "lightbox2/dist/css/lightbox.min.css";
import { portfolioProjects } from "../../data/portfolioProjects";

/** When imageUrl is empty — neutral placeholder (replace URLs in portfolioProjects.js). */
const PLACEHOLDER_IMAGE =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800"><rect fill="#1a1a1a" width="1200" height="800"/><text x="50%" y="48%" fill="#666" font-family="system-ui,sans-serif" font-size="22" text-anchor="middle">Add image URL in src/data/portfolioProjects.js</text></svg>'
  );

function projectImageSrc(url) {
  if (url == null) return PLACEHOLDER_IMAGE;
  const trimmed = String(url).trim();
  if (!trimmed) return PLACEHOLDER_IMAGE;
  return trimmed;
}

export default function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    Lightbox.option({
      resizeDuration: 200,
      fadeDuration: 600,
      imageFadeDuration: 600,
      wrapAround: true,
    });
  }, []);

  return (
    <section className="portfolio-area page-section scroll-to-page" id="portfolio">
      <div className="custom-container">
        <div className="portfolio-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-grip-vertical"></i> portfolio
            </h4>
            <h1 className="scroll-animation">
              Featured <span>Projects</span>
            </h1>
          </div>

          <div className="row portfolio-items">
            {portfolioProjects.map((project) => {
              const imgSrc = projectImageSrc(project.imageUrl);
              return (
                <div
                  key={project.id}
                  className={`${project.colClass} scroll-animation`}
                  data-aos={project.aos}
                >
                  <div className={`portfolio-item ${project.itemVariant}`}>
                    <div className="portfolio-item-inner">
                      <a href={imgSrc} data-lightbox="example-1">
                        <img src={imgSrc} alt={project.imageAlt} loading="lazy" />
                      </a>
                      <ul className="portfolio-categories">
                        {project.tags.map((tag) => (
                          <li key={tag}>
                            <a href="#">{tag}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <h2>
                      <a href="#">{project.title}</a>
                    </h2>
                    <p className="portfolio-desc">{project.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
