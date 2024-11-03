"use client";
import { useState } from "react";
import "./globals.css";
// @ts-ignore
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

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
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
              <p className="mt-4 text-slate-400">Descripción sobre la carrera profesional y experiencia.</p>
              <p>sdfdsssssssssssssssssssssssssssssssssssssssssssssss
                asdfaf
                asdfafasdf
                ddafsdf
                gfd
                gsfdg
                fsd
                sd
                sgf
                ddafsdf
                gfd
                gsfdg
                fsd
                sd
                sgf
                dfg
                dfg
                dfg
                fdgs
                sdgf
                sdagf
                s
                dsfdasg
                dsfdasgasdgf
                afdg
                ag
                sdgfadg
                agrf
                sdf
                afdgadrgf
                afdgadrgfadg
                dsfdasgasdgf
                sdgfadgfg
                fg
                dfg
                sdgf
                dfg
                ddafsdf
                gfd
                gsfdg
                fsd
                sd
                sgf
                dfg
                dfg
                dfg
                fdgs
                sdgf
                sdagf
                s
                dsfdasg
                dsfdasgasdgf
                afdg
                ag
                sdgfadg
                agrf
                sdf
                afdgadrgf
                afdgadrgfadg
                dsfdasgasdgf
                sdgfadgfg
                fg
                dfg
                sdgf
                dfg
                dfg
                dfg
                dfg
                fdgs
                sdgf
                sdagf
                s
              </p>
            </section>
            <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
              <p className="mt-4 text-slate-400">Descripción de la experiencia profesional.</p>
              <p>sdfdssssssssssssssssssssssssssssssssssssssss
                asdfaf
                asdfafasdf
                ddafsdf
                gfd
                gsfdg
                fsd
                sd
                sgf
                dfg
                dfg
                dfg
                fdgs
                sdgf
                sdagf
                s
                ddafsdf
                gfd
                gsfdg
                fsd
                sd
                sgf
                dfg
                dfg
                dfg
                fdgs
                sdgf
                sdagf
                s
                dsfdasg
                dsfdasgasdgf
                afdg
                ag
                sdgfadg
                agrf
                sdf
                afdgadrgf
                afdgadrgfadg
                dsfdasgasdgf
                sdgfadgfg
                fg
                dfg
                sdgf
                dfgddafsdf
                gfd
                gsfdg
                fsd
                sd
                sgf
                dfg
                dfg
                dfg
                fdgs
                sdgf
                sdagf
                s
                dsfdasg
                dsfdasgasdgf
                afdg
                ag
                sdgfadg
                agrf
                sdf
                afdgadrgf
                afdgadrgfadg
                dsfdasgasdgf
                sdgfadgfg
                fg
                dfg
                sdgf
                dfg
                ddafsdf
                gfd
                gsfdg
                fsd
                sd
                sgf
                dfg
                dfg
                dfg
                fdgs
                sdgf
                sdagf
                s
                dsfdasg
                dsfdasgasdgf
                afdg
                ag
                sdgfadg
                agrf
                sdf
                afdgadrgf
                afdgadrgfadg
                dsfdasgasdgf
                sdgfadgfg
                fg
                dfg
                sdgf
                dfg
              </p>
            </section>
            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
              <p className="mt-4 text-slate-400">Descripción de los proyectos realizados.</p>
              <p>sdfdssssssssssssssssssssssssssssssssssssssssss
                asdfaf
                asdfafasdf
                ddafsdf
                gfd
                gsfdg
                fsd
                sd
                sgf
                dfg
                dfg
                dfg
                fdgs
                sdgf
                sdagf
                s
                dsfdasg
                dsfdasgasdgf
                afdg
                ag
                sdgfadg
                agrf
                sdf
                afdgadrgf
                afdgadrgfadg
                dsfdasgasdgf
                sdgfadgfg
                fg
                dfg
                sdgf
                dfg
                ddafsdf
                gfd
                gsfdg
                fsd
                sd
                sgf
                dfg
                dfg
                dfg
                fdgs
                sdgf
                sdagf
                s
                dsfdasg
                dsfdasgasdgf
                afdg
                ag
                sdgfadg
                agrf
                sdf
                afdgadrgf
                afdgadrgfadg
                dsfdasgasdgf
                sdgfadgfg
                fg
                dfg
                sdgf
                dfg
                ddafsdf
                gfd
                gsfdg
                fsd
                sd
                sgf
                dfg
                dfg
                dfg
                fdgs
                sdgf
                sdagf
                s
                dsfdasg
                dsfdasgasdgf
                afdg
                ag
                sdgfadg
                agrf
                sdf
                afdgadrgf
                afdgadrgfadg
                dsfdasgasdgf
                sdgfadgfg
                fg
                dfg
                sdgf
                dfg
                ddafsdf
                gfd
                gsfdg
                fsd
                sd
                sgf
                dfg
                dfg
                dfg
                fdgs
                sdgf
                sdagf
                s
                dsfdasg
                dsfdasgasdgf
                afdg
                ag
                sdgfadg
                agrf
                sdf
                afdgadrgf
                afdgadrgfadg
                dsfdasgasdgf
                sdgfadgfg
                fg
                dfg
                sdgf
                dfg
                ddafsdf
                gfd
                gsfdg
                fsd
                sd
                sgf
                dfg
                dfg
                dfg
                fdgs
                sdgf
                sdagf
                s
                dsfdasg
                dsfdasgasdgf
                afdg
                ag
                sdgfadg
                agrf
                sdf
                afdgadrgf
                afdgadrgfadg
                dsfdasgasdgf
                sdgfadgfg
                fg
                dfg
                sdgf
                dfg
                
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}