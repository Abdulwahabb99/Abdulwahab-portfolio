import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Lightbox from 'lightbox2';
import 'lightbox2/dist/css/lightbox.min.css';

export default function Portfolio() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
        Lightbox.option({
          resizeDuration: 200,
          fadeDuration: 600,
          imageFadeDuration: 600,
          wrapAround: true
        });
      }, []);
  return (
    <section className="portfolio-area page-section scroll-to-page" id="portfolio">
        <div className="custom-container">
            <div className="portfolio-content content-width">
                <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                        <i className="las la-grip-vertical"></i> portfolio
                    </h4>
                    <h1 className="scroll-animation">Featured <span>Projects</span></h1>
                </div>

                <div className="row portfolio-items">
                    <div className="col-md-12 scroll-animation" data-aos='fade-up'>
                        <div className="portfolio-item portfolio-full">
                            <div className="portfolio-item-inner">
                                <a href="../assets/images/portfolio1.jpg" data-lightbox="example-1">
                                    <img src="../assets/images/portfolio1.jpg" alt="Jiovani e-commerce web application"/>
                                </a>
                                <ul className="portfolio-categories">
                                    <li><a href="#">React.js</a></li>
                                    <li><a href="#">E-commerce</a></li>
                                    <li><a href="#">REST APIs</a></li>
                                </ul>
                            </div>
                            <h2><a href="#">Jiovani — E-Commerce Web Application</a></h2>
                            <p className="portfolio-desc">Full e-commerce experience for electronics and consumer products: listings, categories, product detail, search, cart, and responsive checkout—plus an admin dashboard for products, categories, orders, and users with authentication and order management. Emphasis on performance, reusable UI, and a scalable architecture.</p>
                        </div>
                    </div>

                    <div className="col-md-6 scroll-animation" data-aos='fade-right'>
                        <div className="portfolio-item portfolio-half">
                            <div className="portfolio-item-inner">
                                <a href="../assets/images/portfolio2.jpg" data-lightbox="example-1">
                                    <img src="../assets/images/portfolio2.jpg" alt="FitLab Middle East healthy meal platform"/>
                                </a>
                                <ul className="portfolio-categories">
                                    <li><a href="#">React</a></li>
                                    <li><a href="#">Redux</a></li>
                                    <li><a href="#">Vite</a></li>
                                </ul>
                            </div>
                            <h2><a href="#">FitLab Middle East</a></h2>
                            <p className="portfolio-desc">Revamped healthy meal-plan platform for a smoother end-to-end experience. Built a scalable, high-performance web app with responsive, accessible UI, optimized load times, dynamic interactions, and API integrations for personalized plans and timely updates.</p>
                        </div>
                    </div>

                    <div className="col-md-6 scroll-animation" data-aos='fade-left'>
                        <div className="portfolio-item portfolio-half">
                            <div className="portfolio-item-inner">
                                <a href="../assets/images/portfolio3.jpg" data-lightbox="example-1">
                                    <img src="../assets/images/portfolio3.jpg" alt="Swft OP fintech product desktop demo"/>
                                </a>
                                <ul className="portfolio-categories">
                                    <li><a href="#">Chakra UI</a></li>
                                    <li><a href="#">Recharts</a></li>
                                    <li><a href="#">Formik</a></li>
                                </ul>
                            </div>
                            <h2><a href="#">Fintech Product Desktop Demo — Swft OP</a></h2>
                            <p className="portfolio-desc">First desktop demo of the company’s fintech product for partners and stakeholders: high-fidelity UI on the Swft OP design system and Chakra UI, financial charts with Recharts, and guided workflows using Formik and Yup.</p>
                        </div>
                    </div>

                    <div className="col-md-12 scroll-animation" data-aos='fade-up'>
                        <div className="portfolio-item portfolio-half">
                            <div className="portfolio-item-inner">
                                <a href="../assets/images/portfolio4.jpg" data-lightbox="example-1">
                                    <img src="../assets/images/portfolio4.jpg" alt="Hojuzat travel booking platform"/>
                                </a>
                                <ul className="portfolio-categories">
                                    <li><a href="#">Next.js</a></li>
                                    <li><a href="#">Travel</a></li>
                                </ul>
                            </div>
                            <h2><a href="#">Hojuzat — Travel Booking Platform</a></h2>
                            <p className="portfolio-desc">Scalable travel booking platform to search, compare, and book hotels and packages worldwide—dynamic search and filtering, responsive high-performance UI, secure booking-oriented flows, and modular components to grow the product.</p>
                        </div>
                    </div>

                    <div className="col-md-6 scroll-animation" data-aos='fade-right'>
                        <div className="portfolio-item portfolio-half">
                            <div className="portfolio-item-inner">
                                <a href="../assets/images/portfolio5.jpg" data-lightbox="example-1">
                                    <img src="../assets/images/portfolio5.jpg" alt="Golden Host property rental marketplace"/>
                                </a>
                                <ul className="portfolio-categories">
                                    <li><a href="#">Next.js</a></li>
                                    <li><a href="#">Marketplace</a></li>
                                </ul>
                            </div>
                            <h2><a href="#">Golden Host — Property Rental Marketplace</a></h2>
                            <p className="portfolio-desc">Marketplace for booking private accommodations—apartments, villas, and chalets—across Saudi Arabia, with advanced search and filtering and a responsive UI focused on browsing and booking.</p>
                        </div>
                    </div>

                    <div className="col-md-6 scroll-animation" data-aos='fade-left'>
                        <div className="portfolio-item portfolio-half">
                            <div className="portfolio-item-inner">
                                <a href="../assets/images/portfolio1.jpg" data-lightbox="example-1">
                                    <img src="../assets/images/portfolio1.jpg" alt="CardNet digital commerce platform"/>
                                </a>
                                <ul className="portfolio-categories">
                                    <li><a href="#">React.js</a></li>
                                    <li><a href="#">E-commerce</a></li>
                                </ul>
                            </div>
                            <h2><a href="#">CardNet — Scalable Digital Commerce Platform</a></h2>
                            <p className="portfolio-desc">Multi-category commerce for digital cards and tech products with secure flows; rich product discovery with search, categories, and filters; fast modular checkout; structured purchase paths for instant digital delivery; architecture geared toward merchant and POS integrations.</p>
                        </div>
                    </div>

                    <div className="col-md-6 scroll-animation" data-aos='fade-right'>
                        <div className="portfolio-item portfolio-half">
                            <div className="portfolio-item-inner">
                                <a href="../assets/images/portfolio2.jpg" data-lightbox="example-1">
                                    <img src="../assets/images/portfolio2.jpg" alt="King Khalid Foundation enterprise platform"/>
                                </a>
                                <ul className="portfolio-categories">
                                    <li><a href="#">Next.js</a></li>
                                    <li><a href="#">Enterprise</a></li>
                                </ul>
                            </div>
                            <h2><a href="#">King Khalid Foundation — Enterprise Non-Profit Platform</a></h2>
                            <p className="portfolio-desc">Scalable, content-rich platform for programs, research, and initiatives—structured content for discoverability, modular UI, performance for high-volume pages, and polished informational and interactive journeys including forms and engagement touchpoints.</p>
                        </div>
                    </div>

                    <div className="col-md-6 scroll-animation" data-aos='fade-left'>
                        <div className="portfolio-item portfolio-half">
                            <div className="portfolio-item-inner">
                                <a href="../assets/images/portfolio3.jpg" data-lightbox="example-1">
                                    <img src="../assets/images/portfolio3.jpg" alt="ZR3i climate and agritech SaaS"/>
                                </a>
                                <ul className="portfolio-categories">
                                    <li><a href="#">Next.js</a></li>
                                    <li><a href="#">SaaS</a></li>
                                    <li><a href="#">Data</a></li>
                                </ul>
                            </div>
                            <h2><a href="#">ZR3i — Climate &amp; AgriTech SaaS Platform</a></h2>
                            <p className="portfolio-desc">Data-driven SaaS combining AI and satellite analytics for precision agriculture—scalable UI for crop monitoring, land analysis, and environmental metrics; strong UX for heavy data workflows; frontend aligned with GIS, remote sensing, and analytics integrations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
