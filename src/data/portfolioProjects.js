/**
 * Portfolio project images
 * ------------------------
 * imageUrl: رابط كامل (https) أو مسار من public مثل /assets/...
 * projectUrl: رابط المشروع؛ يفتح في تاب جديد من العنوان/الصورة.
 *
 * tags: تقنيات واجهة أمامية معروضة في البطاقة. الإطار الرئيسي (React.js / Next.js)
 * ثابت حسب السيرة؛ باقي الأدوات مستنتجة بشكل معقول حسب نوع المشروع عند عدم
 * تحديدها صراحةً (بدون افتراضات باكند أو قواعد بيانات).
 */

const u = (id, params = "auto=format&fit=crop&w=1200&q=80") =>
  `https://images.unsplash.com/${id}?ixlib=rb-4.0.3&${params}`;

export const portfolioProjects = [
  {
    id: "jiovani",
    colClass: "col-md-12",
    itemVariant: "portfolio-full",
    aos: "fade-up",
    imageUrl: u("photo-1607082349566-187342175e2f"),
    imageAlt: "Jiovani e-commerce web application",
    title: "Jiovani — E-Commerce Web Application",
    description:
      "Full e-commerce experience for electronics and consumer products: listings, categories, product detail, search, cart, and responsive checkout—plus an admin dashboard for products, categories, orders, and users with authentication and order management. Emphasis on performance, reusable UI, and a scalable architecture.",
    tags: [
      "React.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Query",
      "React Hook Form",
    ],
    projectUrl: "https://jiovani-marketer.vercel.app/",
  },
  {
    id: "fitlab",
    colClass: "col-md-6",
    itemVariant: "portfolio-half",
    aos: "fade-right",
    imageUrl: u("photo-1490645935967-10de6ba17061"),
    imageAlt: "FitLab Middle East healthy meal platform",
    title: "FitLab Middle East",
    description:
      "Revamped healthy meal-plan platform for a smoother end-to-end experience. Built a scalable, high-performance web app with responsive, accessible UI, optimized load times, dynamic interactions, and API integrations for personalized plans and timely updates.",
    tags: [
      "React",
      "Redux Toolkit",
      "Vite",
      "Tailwind CSS",
      "React Query",
    ],
    projectUrl: "https://fitlab-me.com/",
  },
  {
    id: "swft-op",
    colClass: "col-md-6",
    itemVariant: "portfolio-half",
    aos: "fade-left",
    imageUrl: u("photo-1551288049-bebda4e38f71"),
    imageAlt: "Swft OP fintech product desktop demo",
    title: "Fintech Product Desktop Demo — Swft OP",
    description:
      "First desktop demo of the company’s fintech product for partners and stakeholders: high-fidelity UI on the Swft OP design system and Chakra UI, financial charts with Recharts, and guided workflows using Formik and Yup.",
    tags: [
      "React",
      "Chakra UI",
      "Recharts",
      "Formik",
      "Redux",
      "TypeScript",
    ],
    projectUrl: "https://demo.swftmoney.com/",
  },
  {
    id: "hojuzat",
    colClass: "col-md-12",
    itemVariant: "portfolio-half",
    aos: "fade-up",
    imageUrl: u("photo-1436491865332-7a61a109cc05"),
    imageAlt: "Hojuzat travel booking platform",
    title: "Hojuzat — Travel Booking Platform",
    description:
      "Scalable travel booking platform to search, compare, and book hotels and packages worldwide—dynamic search and filtering, responsive high-performance UI, secure booking-oriented flows, and modular components to grow the product.",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "React Query",
      "React Hook Form",
      "REST APIs",
    ],
    projectUrl: "https://hojuzat.com/ar",
  },
  {
    id: "golden-host",
    colClass: "col-md-6",
    itemVariant: "portfolio-half",
    aos: "fade-right",
    imageUrl: u("photo-1600596542815-ffad4c1539a9"),
    imageAlt: "Golden Host property rental marketplace",
    title: "Golden Host — Property Rental Marketplace",
    description:
      "Marketplace for booking private accommodations—apartments, villas, and chalets—across Saudi Arabia, with advanced search and filtering and a responsive UI focused on browsing and booking.",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "React Query",
      "React Hook Form",
      "REST APIs",
    ],
    projectUrl: "https://goldenhost.co",
  },
  {
    id: "cardnet",
    colClass: "col-md-6",
    itemVariant: "portfolio-half",
    aos: "fade-left",
    imageUrl: u("photo-1556742502-ec7c0e9f34b1"),
    imageAlt: "CardNet digital commerce platform",
    title: "CardNet — Digital Cards & E-Commerce Platform",
    description:
      "Multi-category commerce for digital cards and tech products with secure flows; rich product discovery with search, categories, and filters; fast modular checkout; structured purchase paths for instant digital delivery; architecture geared toward merchant and POS integrations.",
    tags: [
      "React.js",
      "Material UI",
      "Redux Toolkit",
      "React Query",
      "React Hook Form",
    ],
    projectUrl: "https://cardnet.sa/ar",
  },
  {
    id: "king-khalid-foundation",
    colClass: "col-md-6",
    itemVariant: "portfolio-half",
    aos: "fade-right",
    imageUrl:
      "https://www.kkf.org.sa/assets/images/kkf-logo.png",
    imageAlt: "King Khalid Foundation enterprise platform",
    title: "King Khalid Foundation — Enterprise Non-Profit Platform",
    description:
      "Scalable, content-rich platform for programs, research, and initiatives—structured content for discoverability, modular UI, performance for high-volume pages, and polished informational and interactive journeys including forms and engagement touchpoints.",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "React Query",
      "React Hook Form",
      "Reusable UI",
    ],
    projectUrl: "https://www.kkf.org.sa",
  },
  {
    id: "zr3i",
    colClass: "col-md-6",
    itemVariant: "portfolio-half",
    aos: "fade-left",
    imageUrl: "https://www.zr3i.com/og/og-default.png",
    imageAlt: "ZR3i climate and agritech SaaS",
    title: "ZR3i — Climate & AgriTech SaaS Platform",
    description:
      "Data-driven SaaS combining AI and satellite analytics for precision agriculture—scalable UI for crop monitoring, land analysis, and environmental metrics; strong UX for heavy data workflows; frontend aligned with GIS, remote sensing, and analytics integrations.",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "React Query",
      "Recharts",
      "TanStack Table",
    ],
    projectUrl: "https://www.zr3i.com/",
  },
];
