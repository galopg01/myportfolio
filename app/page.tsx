"use client";
import { useState, useEffect } from "react"; 
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
    image: "/portfolio.png",
    label: "Personal Website",
    ariaLabel: "Personal Website (opens in a new tab)",
    description: (
      <>
        Modern, responsive, and fast personal portfolio website using Next.js 14, TypeScript, and Tailwind CSS. 
        The site emphasizes performance and accessibility, providing an engaging user experience across all devices.
      </>
    ),
    techUsed: ["TypeScript","Next.js", "Tailwind CSS"]
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleSetActiveSection = (section: string) => {
    setActiveSection(section);
  };

  useEffect(() => {
    const handleMouseMove = (event : MouseEvent) => { 
      const scrollX = window.scrollX || document.documentElement.scrollLeft; 
      const scrollY = window.scrollY || document.documentElement.scrollTop; 
      setMousePosition({ x: event.clientX + scrollX, y: event.clientY + scrollY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-slate-900 leading-relaxed text-slate-400 selection:bg-teal-300 selection:text-teal-900">
      <div className="group/spootlight relative">
        <div
          className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
          style={{
            background:
              `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
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
                  I love crafting life-changing digital experiences.
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
                    href="https://www.linkedin.com/in/galo-pérez-gallego-26b0381a4"
                    className="block hover:text-slate-200"  
                    target="_blank" 
                    rel="noreferrer noopener" 
                    aria-label="Linkedin (opens in a new tab)" 
                    title="Linkedin">
                      <span className="sr-only">Linkedin</span>
                      <svg xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          fill="currentColor" className="h-6 w-6"
                          aria-hidden="true">
                            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                      </svg>
                  </a>
                </li>
                <li className="mr-5 text-xs shrink-0">
                  <a
                    href="https://github.com/galopg01"
                    className="block hover:text-slate-200"  
                    target="_blank" 
                    rel="noreferrer noopener" 
                    aria-label="GitHub (opens in a new tab)" 
                    title="GitHub">
                      <span className="sr-only">GitHub</span>
                      <svg xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 16 16"
                          target="_blank" 
                          fill="currentColor" 
                          className="h-6 w-6"
                          aria-hidden="true">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                      </svg>
                  </a>
                </li>
                <li className="mr-5 text-xs shrink-0">
                <a
                    href="https://x.com/galomax1"
                    className="block hover:text-slate-200"  
                    target="_blank" 
                    rel="noreferrer noopener" 
                    aria-label="X (opens in a new tab)" 
                    title="X">
                      <span className="sr-only">X</span>
                      <svg xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 1200 1227"
                          target="_blank" 
                          fill="none" 
                          className="h-5 w-5"
                          aria-hidden="true">
                            <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" 
                            fill="currentColor"></path>
                      </svg>
                  </a>
                </li>
              </ul>
            </header>
            <main className="pt-24 lg:w-1/2 lg:py-24">
              <Section id="about" title="About">
                <p>Hello! I`m Galo, a passionate software engineering and artificial intelligence enthusiast. 
                  My goal is to leverage technology to create solutions that are not only cutting-edge but also 
                  have a positive and lasting impact on people&apos;s lives.
                  <br/>
                  <br/>
                  Currently, I&apos;m a Software Engineer at 
                  <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://www.keysight.com/" target="_blank" rel="noreferrer noopener" aria-label="Keysight Technologies (opens in a new tab)"> Keysight Technologies </a>
                  where I contribute to the creation and maintenance of different services, ensuring best practices to deliver an robust user experience.
                  <br/>
                  <br/>
                  In the past, I&apos;ve had the opportunity to develop software across a variety of settings, from research institutions and large corporations to 
                  <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://www.tupl.com/" target="_blank" rel="noreferrer noopener" aria-label="Tupl (opens in a new tab)"> start-ups</a>.
                  <br/>
                  <br/>
                  In my spare time, I&apos;m usually watching series, playing sports or hanging out with friends.</p>             
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
    </div>
  );
}