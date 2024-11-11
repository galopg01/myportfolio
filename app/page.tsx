"use client";
import { useState } from "react";
import "./globals.css";
// @ts-expect-error react-scroll not being detected
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import Section from "@/components/Section";
import ExternalLink from "@/components/ExternalLink";
import WorkCard from "@/components/WorkCard";
import EducationCard from "@/components/EducationCard";
import ProjectCard from "@/components/ProjectCard";

const workCards = [
  {
    period: "Nov 2023 - Present",
    description: (
      <>
        Design and development of different personalized microservices for obtaining, managing and processing test case data, training of machine learning models and reordering of test cases.<br /><br />
        Training machine learning models with the aim of:
        <span style={{ display: 'block', marginLeft: '1em' }}>
          • Obtaining the most influential characteristics on the duration of test cases to optimize execution time.<br />
          • Predicting the execution time of test campaigns.
        </span>
      </>
    ),
    href: "https://www.keysight.com/",
    label: "Software Engineer - Keysight Technologies",
    ariaLabel: "August 2023 to Present",
    workAriaLabel: "Software Engineer at Keysight Technologies.",
    techUsed: ["Python", "TensorFlow", ".NET", "MySQL", "Jenkins", "Git"]
  },
  {
    period: "Aug - Nov 2023",
    description: (
      <>
        Design and development of a custom application for a renowned agricultural company with the purpose of:<br/>
        <span style={{ display: 'block', marginLeft: '1em' }}>
          • Facilitating the digitization of operations on farms, enhancing efficiency and sustainability in food cultivation.<br />
          • Providing a treatment order management system, optimizing decision-making and quality control.<br />
          • Strategic planning through process automation, improving productivity and profitability.
        </span>
        <br />
        Docker cluster management.
      </>
    ),
    href: "https://www.tupl.com/",
    label: "Junior Software Engineer - Tupl",
    ariaLabel: "August to November 2023",
    workAriaLabel: "Junior Software Engineer at Tupl",
    techUsed: ["Python", "Java", "MongoDB", "FastAPI", "Kubernetes", "Git"]
  },
  {
    period: "Feb - Aug 2023",
    description: (
      <>
        Development and maintenance of the TuplOS platform. TuplOS is an Artificial Intelligence engine created by Tupl with the aim of simplifying the development of automation utilities and enabling the creation of a digital knowledge base for complex processes.
        <br/><br />
        Development of components for the retrieval and processing of satellite images, as well as for 
        calculating statistics and histograms from them.<br/><br/>
      </>
    ),
    href: "https://www.tupl.com/",
    label: "Intern Software Engineer - Tupl",
    ariaLabel: "February to August 2023",
    workAriaLabel: "Intern Software Engineer at Tupl",
    techUsed: ["Python", "Java", "Docker", "Git"]
  },
  {
    period: "Feb - Aug 2023",
    description: (
      <>
        Creation of a system capable of recognizing a possible coronary disease from a segmented coronary angiogram in a specified number of windows. This system takes a coronary angiogram as input and provides the level of disease present in it as output. <br /><br />
        Study of the system depending on the dataset, window size, and network architecture.
      </>
    ),
    href: "https://www.uma.es/",
    label: "Researcher - University of Málaga",
    ariaLabel: "February to August 2023",
    workAriaLabel: "Researcher at University of Málaga",
    techUsed: ["Python", "Pytorch", "Deep Neural Networks"]
  }
];

const projectCards = [
  {
    href: "https://riuma.uma.es/xmlui/handle/10630/27595",
    image: "/angiography.png",
    label: "Conorary Disease Detection System",
    ariaLabel: "",
    description: (
      <>
        System capable of recognizing a possible coronary disease from a segmented coronary angiogram in a specified number of windows.  <br />
        Study of the system depending on the dataset, window size, and network architecture.
      </>
    ),
    techUsed: ["Python","Pytorch", "Deep Neural Networks"]
  },
  {
    href: "https://github.com/galopg01/EpilepsyDetection",
    image: "/mask.png",
    label: "Epilepsy Detection System",
    ariaLabel: "Epilepsy Detection System (opens in a new tab)",
    description: (
      <>
        Machine learning-based system for early detection of epileptic seizures utilizing EEG 
        (electroencephalogram) data. Leveraged Convolutional Neural Networks (CNN) and Recurrent Neural 
        Networks (RNN) to analyze EEG signals and identify patterns indicative of epileptic seizures. <br />
        The project aims to create a scalable and reliable system for timely epilepsy diagnosis and treatment in clinical settings.
      </>
    ),
    techUsed: ["Python","Pytorch", "Deep Neural Networks"]
  },
  {
    href: "/",
    image: "/mask.png",
    label: "Personal Website",
    ariaLabel: "Personal Website (opens in a new tab)",
    description: (
      <>
        Modern, responsive, and fast personal portfolio website using Next.js 14, TypeScript, and Tailwind CSS. 
        The site emphasizes performance and accessibility, providing an engaging user experience across all devices.
      </>
    ),
    techUsed: ["Python","Pytorch", "Deep Neural Networks"]
  }
];

const educationCards = [
  {
    period: "2019 - 2023",
    center: "University of Málaga",
    label: "Bachelor's Degree in Software Engineering",
    description: (
      <>
        Extraordinary Award for the best academic record. <br/><br/>
        GPA: 9.01/10
      </>
    ),
    ariaLabel: "Bachelor's Degree in Software Engineering at University of Málaga",
  },
  {
    period: "2023 - 2024",
    center: "University of Málaga",
    label: "Master's Degree in Software Engineering and Artificial Intelligence",
    ariaLabel: "Master's Degree in Software Engineering and Artificial Intelligence at University of Málaga",
    description: (
      <>
      </>
    )
  }
];


export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  const handleSetActiveSection = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="bg-slate-900 leading-relaxed text-slate-400 selection:bg-teal-300 selection:text-teal-900">
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background:
            "radial-gradient(600px circle at 0px 0px, rgba(29, 78, 216, 0.15), transparent 80%)",
        }}
      ></div>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">       
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <Link href="/">
                Galo Pérez Gallego
                </Link>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Software Engineer
              </h2>
              <p className="mt-4 max-w-xs leading-normal">
                I build pixel-perfect, engaging, and accessible digital experiences.
              </p>
              <nav
                className="nav hidden lg:block"
                aria-label="In-page jump links"
              >
                <ul className="mt-16 w-max">
                  <li>
                    <ScrollLink
                      className="group flex items-center py-3 cursor-pointer"
                      to="about"
                      smooth={true}
                      offset={-100}
                      duration={500}
                      spy={true}
                      onSetActive={() => handleSetActiveSection("about")}
                    >
                      <span className={`nav-indicator ${activeSection === "about" ? "w-16 bg-slate-200" : "w-8 bg-slate-600"} mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}>
                      </span>
                      <span className={`nav-text text-xs font-bold uppercase tracking-widest ${activeSection === "about" ? "text-slate-200" : "text-slate-500"} group-hover:text-slate-200 group-focus-visible:text-slate-200`}>
                        About
                      </span>
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      className="group flex items-center py-3 cursor-pointer"
                      to="experience"
                      smooth={true}
                      duration={500}
                      offset={-100}
                      spy={true}
                      onSetActive={() => handleSetActiveSection("experience")}
                    >
                      <span className={`nav-indicator ${activeSection === "experience" ? "w-16 bg-slate-200" : "w-8 bg-slate-600"} mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}>
                      </span>
                      <span className={`nav-text text-xs font-bold uppercase tracking-widest ${activeSection === "experience" ? "text-slate-200" : "text-slate-500"} group-hover:text-slate-200 group-focus-visible:text-slate-200`}>
                        Experience
                      </span>
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      className="group flex items-center py-3 cursor-pointer"
                      to="projects"
                      smooth={true}
                      duration={500}
                      offset={-100}
                      spy={true}
                      onSetActive={() => handleSetActiveSection("projects")}
                    >
                      <span className={`nav-indicator ${activeSection === "projects" ? "w-16 bg-slate-200" : "w-8 bg-slate-600"} mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}>
                      </span>
                      <span className={`nav-text text-xs font-bold uppercase tracking-widest ${activeSection === "projects" ? "text-slate-200" : "text-slate-500"} group-hover:text-slate-200 group-focus-visible:text-slate-200`}>
                        Projects
                      </span>
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      className="group flex items-center py-3 cursor-pointer"
                      to="education"
                      smooth={true}
                      duration={500}
                      offset={-100}
                      spy={true}
                      onSetActive={() => handleSetActiveSection("education")}
                    >
                      <span className={`nav-indicator ${activeSection === "education" ? "w-16 bg-slate-200" : "w-8 bg-slate-600"} mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}>
                      </span>
                      <span className={`nav-text text-xs font-bold uppercase tracking-widest ${activeSection === "education" ? "text-slate-200" : "text-slate-500"} group-hover:text-slate-200 group-focus-visible:text-slate-200`}>
                        Education
                      </span>
                    </ScrollLink>
                  </li>
                </ul>
              </nav>
            </div>
            <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
              <li className="mr-5 text-xs shrink-0">
                <a
                  href="https://twitter.com/galoperezgal"
                  className="text-slate-200 hover:text-slate-100"
                >
                  X
                </a>
              </li>
              <li className="mr-5 text-xs shrink-0">
                <a
                  href=""
                  className="text-slate-200 hover:text-slate-100"
                >
                  GitHub
                </a>
              </li>
              <li className="mr-5 text-xs shrink-0">
                <a
                  href=""
                  className="text-slate-200 hover:text-slate-100"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </header>
          <main className="pt-24 lg:w-1/2 lg:py-24">
            <Section id="about" title="About">
              <p>Hello! I`m Galo, a passionate software engineering and artificial intelligence enthusiast. I studied for a degree in Software Engineering at the University of Málaga, where I received the Extraordinary Award for the best academic record, and a Master`s degree in Software Engineering and Artificial Intelligence at the same university.
                My goal is to contribute to the development of innovative technological solutions that optimize processes and improve efficiency across various industries. During my studies and work experience, I have acquired skills in application design and development, process automation, database management, and machine learning model training.</p>             
            </Section>
            <Section id="experience" title="Experience">
              <div>
                <ol className="group/list">
                {workCards.map((workCard, index) => (
                  <li key={index} className="mb-12">
                    <WorkCard {...workCard} />
                  </li>
                ))}
                </ol>
              </div>
              <div className="mt-12">
                <ExternalLink href="/resume.pdf"
                              ariaLabel="View Full Resume (opens in a new tab)"
                              label="View Full Resume"
                              insideCard={false}
                              >         
                </ExternalLink>
              </div>
            </Section>
            <Section id="projects" title="Projects">
            <div>
                <ol className="group/list">
                {projectCards.map((projectCard, index) => (
                  <li key={index} className="mb-12">
                    <ProjectCard {...projectCard} />
                  </li>
                  ))}
                </ol>
              </div>
            </Section>
            <Section id="education" title="Education">
              <div>
                <ol className="group/list">
                {educationCards.map((educationCard, index) => (
                  <li key={index} className="mb-12">
                    <EducationCard {...educationCard} />
                  </li>
                  ))}
                </ol>
              </div>
            </Section>
          </main>
        </div>
      </div>
    </div>
  );
}