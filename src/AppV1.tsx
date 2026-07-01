import { useEffect, useRef, useState } from 'react'
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Calendar,
  Code2,
  FileText,
  Layers3,
  Mail,
  MapPin,
  Network,
  Phone,
  Search,
  Sparkles,
  Users,
  Wrench,
} from 'lucide-react'
import profileImage from './assets/portfolio-profile.png'
import profileIcon from './assets/brand/profile-icon2.png'
import resumePdf from './assets/resume/Jubil Villaruel - Portfolio Resume.pdf'

const featuredWork = [
  {
    title: 'Small House Solutions',
    type: 'WordPress / SEO',
    link: 'http://buyasmallhouse.com/',
    summary: 'Page maintenance, SEO support, content improvements, and WordPress workflows.',
    tags: ['WordPress', 'RankMath', 'SEO'],
    status: 'Screenshot soon',
  },
  {
    title: 'PersonaCheck',
    type: 'WordPress / SEO',
    link: 'https://personacheck.com.ph/',
    summary: 'Website improvements, SEO implementation, and WordPress customization.',
    tags: ['WordPress', 'CSS', 'SEO'],
    status: 'Screenshot soon',
  },
  {
    title: 'PeopleSoft ERP Work',
    type: 'Enterprise / QA',
    summary: 'Built, tested, and supported ERP features without exposing confidential details.',
    tags: ['PeopleCode', 'SQL', 'UAT'],
    status: 'Case study',
  },
  {
    title: 'SYMPH Internship',
    type: 'Frontend / Full Stack',
    summary: 'Figma-to-code implementation with React, Next.js, Firebase, and TypeScript.',
    tags: ['React', 'Next.js', 'Firebase'],
    status: 'Case study',
  },
  {
    title: 'Remedy Mobile Application',
    type: 'Thesis',
    summary: 'A religious meditation app for everyone, built as a mobile thesis project.',
    tags: ['React Native', 'Firebase', 'Node.js'],
    status: 'Thesis',
  },
]

const skillGroups = [
  {
    title: 'Software',
    icon: Code2,
    skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Python', 'SQL'],
  },
  {
    title: 'WordPress',
    icon: Wrench,
    skills: ['Elementor', 'Avia Builder', 'WPForms', 'Estatik', 'WooCommerce', 'PHP'],
  },
  {
    title: 'SEO',
    icon: Search,
    skills: ['RankMath', 'Ahrefs', 'Site audits', 'Metadata', 'Internal linking', 'On-page SEO'],
  },
  {
    title: 'Testing',
    icon: Layers3,
    skills: ['Unit testing', 'System testing', 'UAT support', 'Issue documentation'],
  },
]

const timeline = [
  {
    role: 'Associate Software Engineer',
    company: 'Accenture',
    period: 'Jul 2024 - Present',
  },
  {
    role: 'WordPress Developer & SEO Specialist',
    company: 'Skiptro Digital',
    period: 'Nov 2021 - Jul 2025',
  },
  {
    role: 'Developer Intern',
    company: 'SYMPH',
    period: 'Jan 2024 - May 2024',
  },
  {
    role: 'Lead / President',
    company: 'Google Developer Student Clubs UNO-R',
    period: '2022 - 2024',
  },
]

const certifications = [
  'DICT ICT Proficiency Certification - 91.20 rating',
  'TOPCIT Level 2 Practical Competency in ICT',
  'Google Data Analytics coursework via Coursera',
  'Google Developer Student Clubs Lead certificate',
]

export default function AppV1() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const isNearTop = currentScrollY < 24
      const isScrollingUp = currentScrollY < lastScrollY.current

      setIsHeaderVisible(isNearTop || isScrollingUp)
      lastScrollY.current = currentScrollY
    }

    lastScrollY.current = window.scrollY
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main>
      <nav
        className={`topbar ${isHeaderVisible ? '' : 'topbar-hidden'}`}
        aria-label="Primary navigation"
      >
        <a className="brand" href="#home" aria-label="Jubil Reign Villaruel home">
          <img src={profileIcon} alt="" />
        </a>
        <div className="nav-links">
          <a href="#work">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero-section site-shell" id="home">
        <div className="hero-copy reveal">
          <p className="eyebrow">
            <MapPin size={16} aria-hidden="true" />
            Cebu, Philippines
          </p>
          <h1>Jubil Reign Villaruel</h1>
          <div className="hero-actions">
            <a className="button primary" href="#work">
              <BriefcaseBusiness size={18} aria-hidden="true" />
              View projects
            </a>
            <a className="button secondary" href={resumePdf} download>
              <FileText size={18} aria-hidden="true" />
              Resume
            </a>
            <a className="button ghost" href="mailto:jubvillaruel@gmail.com">
              <Mail size={18} aria-hidden="true" />
              Contact
            </a>
          </div>
        </div>

        <aside className="portrait-card reveal delay-1" aria-label="Profile portrait">
          <img src={profileImage} alt="Jubil Reign Villaruel" />
        </aside>
      </section>

      <section className="intro-section site-shell" aria-label="Professional introduction">
        <div className="intro-kicker">
          <Sparkles size={17} aria-hidden="true" />
          <span>Open to software, WordPress, SEO, QA, and web roles</span>
        </div>
        <div className="intro-copy">
          <p className="role-line">
            Software Engineer, WordPress Developer, and SEO Specialist.
          </p>
          <p className="hero-text">
            I build, test, and improve web and business systems through software
            development, WordPress implementation, SEO, and practical problem solving.
          </p>
        </div>
      </section>

      <section className="proof-strip site-shell" aria-label="Professional highlights">
        <span>PeopleSoft ERP</span>
        <span>WordPress + SEO</span>
        <span>React / Next.js</span>
        <span>Testing + UAT</span>
      </section>

      <section className="section site-shell tonal-section work-section" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <p className="eyebrow">
            <Layers3 size={16} aria-hidden="true" />
            Featured work
          </p>
          <h2 id="work-title">Proof without the clutter.</h2>
        </div>

        <div className="project-grid" aria-label="Scrollable featured projects">
          {featuredWork.map((project, index) => (
            <article
              className="project-card reveal"
              style={{ '--delay': `${index * 80}ms` } as React.CSSProperties}
              key={project.title}
            >
              <div className={`project-preview preview-${index + 1}`}>
                <span>{project.status}</span>
              </div>
              <div className="project-body">
                <div>
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                </div>
                <p>{project.summary}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                {project.link ? (
                  <a className="text-link" href={project.link} target="_blank" rel="noreferrer">
                    Visit site
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="section site-shell split-section tonal-section dark-section skills-section"
        id="skills"
        aria-labelledby="skills-title"
      >
        <div className="section-heading sticky-heading">
          <p className="eyebrow">
            <Wrench size={16} aria-hidden="true" />
            Skills
          </p>
          <h2 id="skills-title">A practical mix of build, improve, and verify.</h2>
        </div>

        <div className="skill-grid">
          {skillGroups.map(({ title, icon: Icon, skills }) => (
            <article className="skill-card" key={title}>
              <div className="skill-title">
                <Icon size={19} aria-hidden="true" />
                <h3>{title}</h3>
              </div>
              <div className="tag-row">
                {skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="section site-shell split-section tonal-section dark-section experience-section"
        id="experience"
        aria-labelledby="experience-title"
      >
        <div className="section-heading sticky-heading">
          <p className="eyebrow">
            <Calendar size={16} aria-hidden="true" />
            Experience
          </p>
          <h2 id="experience-title">Career path, kept scannable.</h2>
        </div>

        <div className="timeline">
          {timeline.map((item) => (
            <article className="timeline-item" key={`${item.company}-${item.role}`}>
              <p>{item.period}</p>
              <h3>{item.role}</h3>
              <span>{item.company}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section site-shell credibility-grid" aria-label="Certifications and community">
        <article className="quiet-panel">
          <p className="eyebrow">
            <Award size={16} aria-hidden="true" />
            Certifications
          </p>
          <ul>
            {certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="quiet-panel leadership-panel">
          <p className="eyebrow">
            <Users size={16} aria-hidden="true" />
            Leadership
          </p>
          <div className="leadership-list">
            <div>
              <h3>GDSC UNO-R + community work</h3>
              <p>
                Led student developer initiatives, grew membership by 5x, and helped
                organize workshops, outreach, and community activities.
              </p>
            </div>
            <div>
              <h3>ATCP Games Cebu Lead</h3>
              <p>
                Led community engagement for mobile and tabletop gaming activities,
                supporting planning, coordination, and participant experience.
              </p>
            </div>
          </div>
        </article>
      </section>

      <section className="section site-shell resume-section" id="resume" aria-labelledby="resume-title">
        <div>
          <p className="eyebrow">Resume</p>
          <h2 id="resume-title">One clean resume slot for hiring teams.</h2>
        </div>
        <p>
          Download a public-safe resume prepared for portfolio visitors and hiring teams.
        </p>
        <a className="button secondary" href={resumePdf} download>
          <FileText size={18} aria-hidden="true" />
          Download resume
        </a>
      </section>

      <section className="contact-section site-shell tonal-section contact-paper-section" id="contact" aria-labelledby="contact-title">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Open to practical web and software opportunities.</h2>
          <p>
            Software engineering, WordPress development, SEO, QA/testing, and web development.
          </p>
        </div>
        <div className="contact-list">
          <a href="mailto:jubvillaruel@gmail.com">
            <Mail size={18} aria-hidden="true" />
            jubvillaruel@gmail.com
          </a>
          <a href="tel:+639120530615">
            <Phone size={18} aria-hidden="true" />
            09120530615
          </a>
          <a href="https://linkedin.com/in/jubil-villaruel" target="_blank" rel="noreferrer">
            <Network size={18} aria-hidden="true" />
            LinkedIn
          </a>
          <a href="https://github.com/jubilvillaruel" target="_blank" rel="noreferrer">
            <Code2 size={18} aria-hidden="true" />
            GitHub
          </a>
        </div>
      </section>

      <footer className="site-footer site-shell">
        <p>Made with care, curiosity, and a tiny bit of sparkle.</p>
        <a href="/v2" aria-label="View portfolio version 2">View V2</a>
        <a href="#home" aria-label="Back to top">Back to top</a>
      </footer>
    </main>
  )
}
