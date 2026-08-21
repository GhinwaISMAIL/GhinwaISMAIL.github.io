import { Award, BookOpen, ExternalLink, FileText, Github, GraduationCap, Linkedin } from "lucide-react";

const experience = [
  {
    period: "2024 — Present",
    role: "PhD Researcher in Telecommunications",
    place: "University of Strasbourg · ICube Laboratory",
    text: "I study trustworthy Network Digital Twins for 5G, with current work on trace-driven traffic generation and reproducible evaluation using OpenAirInterface testbeds.",
  },
  {
    period: "Feb — Aug 2024",
    role: "Research Intern",
    place: "Orange Innovation · Caen, France",
    text: "Designed a secure API for Ethereum smart contracts, managed GitLab and Kubernetes delivery pipelines, and validated the approach through a working distributed-communication prototype.",
  },
  {
    period: "2020 — 2022",
    role: "Teaching Assistant",
    place: "Tishreen University · Syria",
    text: "Delivered tutorials in Electronic Measurements, Network Management, Security, and computer skills, supported by OptiSystem and VMware simulations.",
  },
];

const projects = [
  {
    title: "Video streaming quality prediction",
    label: "Data science · Quality of experience",
    text: "I compared Random Forest, XGBoost, and SVC models for predicting Mean Opinion Scores and analysing which inputs influence perceived video quality.",
  },
  {
    title: "Four-element antenna array",
    label: "RF engineering · Simulation",
    text: "I designed and simulated a four-element 10 GHz antenna array with a −22 dB S11 target, 0.4 GHz bandwidth, and a directional radiation pattern.",
  },
  {
    title: "Sustainable greenhouse automation",
    label: "Embedded systems · IoT",
    text: "I built an agriculture prototype that coordinates sensing, temperature control, lighting, and irrigation inside a greenhouse.",
  },
  {
    title: "Privacy-preserving bed bug detection",
    label: "Computer vision · Federated learning",
    text: "I developed a hotel pest-monitoring concept using YOLOv5 for detection, federated learning to keep data on device, and a Random Forest model for prioritisation.",
  },
  {
    title: "Continuous cardiac monitoring",
    label: "Embedded health · GSM",
    text: "I built a continuous heart-monitoring prototype that sends an emergency alert over GSM when intervention may be needed.",
  },
  {
    title: "NLG evaluation · SHROOM 2024",
    label: "Natural language processing",
    text: "I worked on SemEval-2024 Task 6, which focused on detecting and classifying inaccurate outputs from natural-language-generation systems.",
  },
];

const education = [
  ["2024 — Present", "PhD in Telecommunications", "University of Strasbourg · ICube Lab"],
  ["2023 — 2024", "MSc Data Science & Network Intelligence", "Télécom SudParis · France"],
  ["2022 — 2024", "MSc Telecommunication Engineering", "University of Calabria · Italy"],
  ["2016 — 2020", "BSc Telecommunication Technologies", "Tishreen University · Syria · 90.5%"],
];

const skills = [
  ["Programming", "Python · C++ · MATLAB"],
  ["Network systems", "SDN/NFV · 5G · IoT · Edge · Cloud"],
  ["Research tools", "GitLab · Kubernetes · VMware · OptiSystem · Arduino"],
  ["Protocols", "MQTT · SIP · TCP/IP · VoIP"],
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Ghinwa Ismail, home">
          <span className="brand-mark">GI</span>
          <span>Ghinwa Ismail</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#publications">Publications</a>
          <a href="#contact">Contact</a>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#publications">Publications</a>
            <a href="#contact">Contact</a>
          </nav>
        </details>
      </header>

      <main id="main-content">
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Telecommunications · Research · Engineering</p>
          <h1>Ghinwa Ismail</h1>
          <p className="hero-role">
            Telecommunications Researcher &amp; Engineer<br />
            <span>Strasbourg, France</span>
          </p>
          <p className="hero-lead">
            I am a telecommunications researcher and engineer with a background
            in both software and hardware projects. My work has included network
            experiments, applied data science, a distributed videoconferencing
            service, and university teaching. I am currently pursuing a PhD at
            ICube Laboratory, where I develop traffic models and validation
            methods for trustworthy Network Digital Twins in 5G systems.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#experience">
              View experience
            </a>
            <a className="button button-secondary" href="/assets/documents/resume.pdf" target="_blank">
              View CV <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="social-row" aria-label="Professional profiles">
            <a href="https://github.com/GhinwaISMAIL" target="_blank" rel="noreferrer">
              <Github aria-hidden="true" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/ghinwa-ismail-a14a65249" target="_blank" rel="noreferrer">
              <Linkedin aria-hidden="true" /> LinkedIn
            </a>
            <a href="https://www.researchgate.net/profile/Ghinwa-Ismail-4" target="_blank" rel="noreferrer">
              <BookOpen aria-hidden="true" /> ResearchGate
            </a>
            <a href="https://scholar.google.com/citations?user=uCI4JNcAAAAJ&hl=en" target="_blank" rel="noreferrer">
              <GraduationCap aria-hidden="true" /> Google Scholar
            </a>
          </div>
        </div>

        <div className="hero-profile">
          <div className="hero-portrait">
            <img
              src="/assets/images/profile/portrait-highres.jpg"
              srcSet="/assets/images/profile/portrait-highres-700.jpg 700w, /assets/images/profile/portrait-highres.jpg 1400w"
              sizes="(max-width: 760px) 100vw, 42vw"
              width="1400"
              height="1866"
              fetchPriority="high"
              decoding="async"
              alt="Ghinwa Ismail"
            />
          </div>
          <div className="profile-caption">
            <span>Current position</span>
            <strong>PhD Researcher · ICube Laboratory · University of Strasbourg</strong>
          </div>
        </div>
      </section>

      <section className="about section-shell reveal" id="about">
        <div className="about-copy">
          <p className="section-kicker">About</p>
          <h2>My work combines telecommunications research with practical engineering.</h2>
          <div className="about-columns">
            <p>
              I studied telecommunications engineering before specialising in
              data science and network intelligence. My projects have included
              wireless networks, distributed communication systems, embedded
              prototypes, and applied machine learning.
            </p>
            <p>
              My experience includes a research internship at Orange Innovation,
              two years as a teaching assistant at Tishreen University, and my
              current PhD at ICube. I have studied and worked in Syria, Italy,
              and France.
            </p>
          </div>
        </div>
      </section>

      <section className="experience section-shell reveal" id="experience">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Experience</p>
            <h2>Research, engineering, and teaching.</h2>
          </div>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article key={item.role}>
              <time>{item.period}</time>
              <div>
                <h3>{item.role}</h3>
                <p className="place">{item.place}</p>
                <p>{item.text}</p>
                {item.role === "PhD Researcher in Telecommunications" && (
                  <div className="experience-supervisors" aria-label="Doctoral supervisors">
                    <span>Doctoral supervisors</span>
                    <div className="supervisor-links">
                      <a href="https://fabrice.theoleyre.cnrs.fr/" target="_blank" rel="noreferrer">
                        <strong>Fabrice Théoleyre</strong>
                        <ExternalLink aria-hidden="true" />
                      </a>
                      <a href="https://samirsim.github.io/" target="_blank" rel="noreferrer">
                        <strong>Samir Si-Mohammed</strong>
                        <ExternalLink aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
        <div className="activity-heading">
          <p className="section-kicker">Academic activities</p>
          <h3>Conferences and advanced research training.</h3>
        </div>
        <div className="research-activities-grid">
          <figure>
            <img
              src="/assets/images/activities/netsoft-2026-presentation.jpg"
              srcSet="/assets/images/activities/netsoft-2026-presentation-800.jpg 800w, /assets/images/activities/netsoft-2026-presentation.jpg 1600w"
              sizes="(max-width: 760px) 100vw, 50vw"
              width="1600"
              height="982"
              loading="lazy"
              decoding="async"
              alt="Ghinwa Ismail presenting her trace-driven traffic generation paper at IEEE NetSoft 2026"
            />
            <figcaption>
              <span>Full paper · Presented at IEEE NetSoft 2026</span>
              <strong>Presenting at IEEE NetSoft in Berlin</strong>
              <p>
                Presentation of “Lightweight Trace-Driven Burst Traffic Generation
                for 5G Network Digital Twins.”
              </p>
            </figcaption>
          </figure>
          <figure>
            <img
              src="/assets/images/activities/slices-ri-summer-school-2025.jpg"
              srcSet="/assets/images/activities/slices-ri-summer-school-2025-800.jpg 800w, /assets/images/activities/slices-ri-summer-school-2025.jpg 1600w"
              sizes="(max-width: 760px) 100vw, 50vw"
              width="1600"
              height="1200"
              loading="lazy"
              decoding="async"
              alt="Ghinwa Ismail with participants and mentors at the SLICES-RI and CONVERGE Summer School 2025"
            />
            <figcaption>
              <span>Summer school · 25–27 June 2025</span>
              <strong>SLICES-RI / CONVERGE Summer School</strong>
              <p>
                Three days of hands-on training at INESC TEC in Porto, Portugal,
                exploring 6G, Open RAN, wireless Network Digital Twins,
                OpenAirInterface, and OAIBOX.
              </p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="projects section-shell reveal" id="projects">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Engineering and research projects</p>
            <h2>Projects completed during my studies and engineering work.</h2>
          </div>
          <p>
            These projects come from earlier studies and engineering work in data
            science, RF design, embedded systems, computer vision, and natural language processing.
          </p>
        </div>
        <div className="project-grid">
          {projects.slice(0, 3).map((project, index) => (
            <article key={project.title}>
              <div className="project-topline"><span>{String(index + 1).padStart(2, "0")}</span><span>{project.label}</span></div>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
            </article>
          ))}
        </div>
        <details className="more-projects">
          <summary>
            <span>More projects</span>
            <small>Three additional projects in computer vision, embedded health, and natural language processing</small>
          </summary>
          <div className="project-grid">
            {projects.slice(3).map((project, index) => (
              <article key={project.title}>
                <div className="project-topline"><span>{String(index + 4).padStart(2, "0")}</span><span>{project.label}</span></div>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
              </article>
            ))}
          </div>
        </details>
      </section>

      <section className="publications section-shell reveal" id="publications">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Publications</p>
            <h2>Papers and accepted work.</h2>
          </div>
          <p>Official links and public artifacts are included when available.</p>
        </div>

        <div className="publication-list">
          <article className="publication-row publication-row-featured">
            <div className="publication-kind">
              <span className="status">Full paper · 2026</span>
              <small>IEEE NetSoft · Berlin, Germany</small>
            </div>
            <div>
              <h3>Lightweight Trace-Driven Burst Traffic Generation for 5G Network Digital Twins</h3>
              <p>Ghinwa Ismail · Samir Si-Mohammed · Fabrice Théoleyre</p>
              <small>
                In 2026 IEEE 12th International Conference on Network
                Softwarization (NetSoft), Berlin, Germany, pp. 162–170.
              </small>
            </div>
            <div className="publication-links publication-row-links">
              <a href="https://doi.org/10.1109/NETSOFT70012.2026.11603454" target="_blank" rel="noreferrer">Official DOI ↗</a>
              <a href="https://samirsim.github.io/docs/NetSoft-2026.pdf" target="_blank" rel="noreferrer">Paper PDF ↗</a>
              <a href="https://github.com/GhinwaISMAIL/multimodal-traffic-digital-twins" target="_blank" rel="noreferrer">Code & artifacts ↗</a>
            </div>
          </article>

          <article className="publication-row">
            <div className="publication-kind"><span className="status">Accepted demo · 2026</span></div>
            <div>
              <h3>TwinDash – a Dashboard-Based Traffic Generator for Reproducible 5G Experiments</h3>
              <p>Ghinwa Ismail · Samir Si-Mohammed · Fabrice Théoleyre</p>
              <small>51st IEEE Conference on Local Computer Networks (LCN 2026) · Coimbra, Portugal</small>
            </div>
            <span className="forthcoming">Publication forthcoming</span>
          </article>

          <article className="publication-row">
            <div className="publication-kind"><span className="status">Conference paper · 2024</span></div>
            <div>
              <h3>A Decentralised Videoconferencing Service using Ethereum Smart Contracts</h3>
              <p>Ghinwa Ismail · Julien Hatin · Juliette Cantais · Valentin André</p>
              <small>BRAINS 2024 · Blockchain Research & Applications for Innovative Networks and Services</small>
            </div>
            <a href="https://doi.org/10.1109/BRAINS63024.2024.10732428" target="_blank" rel="noreferrer">DOI ↗</a>
          </article>
        </div>

        <div className="publication-cta">
          <p>Looking for the complete academic record?</p>
          <div className="publication-profile-links">
            <a href="https://scholar.google.com/citations?user=uCI4JNcAAAAJ&hl=en" target="_blank" rel="noreferrer">
              <GraduationCap aria-hidden="true" /> Google Scholar
            </a>
            <a href="https://www.researchgate.net/profile/Ghinwa-Ismail-4" target="_blank" rel="noreferrer">
              <BookOpen aria-hidden="true" /> ResearchGate
            </a>
          </div>
        </div>
      </section>

      <section className="credentials section-shell reveal">
        <div className="education">
          <p className="section-kicker">Education</p>
          <h2>Academic path</h2>
          <div className="education-list">
            {education.map(([year, degree, institution]) => (
              <article key={degree}>
                <time>{year}</time>
                <div><h3>{degree}</h3><p>{institution}</p></div>
              </article>
            ))}
          </div>
          <div className="academic-gallery" aria-label="Graduation milestones">
            <figure className="academic-photo">
              <img
                src="/assets/images/education/tishreen-graduation.jpg"
                srcSet="/assets/images/education/tishreen-graduation-569.jpg 569w, /assets/images/education/tishreen-graduation.jpg 1138w"
                sizes="(max-width: 760px) 100vw, 31vw"
                width="1138"
                height="1383"
                loading="lazy"
                decoding="async"
                alt="Ghinwa Ismail graduating from Tishreen University"
              />
              <figcaption>BSc graduation · Tishreen University, 2020</figcaption>
            </figure>
            <figure className="academic-photo academic-photo-calabria">
              <img
                src="/assets/images/education/calabria-graduation.jpg"
                srcSet="/assets/images/education/calabria-graduation-700.jpg 700w, /assets/images/education/calabria-graduation.jpg 1400w"
                sizes="(max-width: 760px) 100vw, 31vw"
                width="1400"
                height="1866"
                loading="lazy"
                decoding="async"
                alt="Ghinwa Ismail graduating from the University of Calabria"
              />
              <figcaption>MSc graduation · University of Calabria, 2024</figcaption>
            </figure>
            <figure className="academic-photo academic-photo-tsp">
              <img
                src="/assets/images/education/tsp-graduation.jpg"
                srcSet="/assets/images/education/tsp-graduation-700.jpg 700w, /assets/images/education/tsp-graduation.jpg 1400w"
                sizes="(max-width: 760px) 100vw, 31vw"
                width="1400"
                height="1866"
                loading="lazy"
                decoding="async"
                alt="Ghinwa Ismail at her Télécom SudParis graduation"
              />
              <figcaption>MSc graduation · Télécom SudParis, 2024</figcaption>
            </figure>
          </div>
        </div>
        <aside className="skills">
          <p className="section-kicker">Toolkit</p>
          <h2>Skills & systems</h2>
          {skills.map(([title, items]) => (
            <div key={title}><strong>{title}</strong><span>{items}</span></div>
          ))}
          <div className="languages"><strong>Languages</strong><span>Arabic · English · French</span></div>
        </aside>
      </section>

      <section className="supervision section-shell reveal" id="students">
        <div className="supervision-heading">
          <p className="section-kicker">Student supervision</p>
          <h2>Current supervision</h2>
        </div>
        <article className="student-card">
          <div className="student-name">
            <span>Current student · M1 Internship · 2026</span>
            <h3>Jeronimo Herdoïza</h3>
            <p>
              University of Strasbourg · CMI Informatique · Master in Computer
              Engineering, Systems and Networks
            </p>
          </div>
          <div className="student-project">
            <span>Research project</span>
            <h3>Deployment and Benchmarking of a Reproducible 5G Standalone Platform</h3>
            <p>
              The internship focuses on building a reproducible 5G standalone
              platform and establishing a rigorous benchmarking workflow for
              experimental evaluation.
            </p>
          </div>
          <div className="supervisor-line">
            <span>Supervisor</span>
            <strong>Ghinwa Ismail</strong>
          </div>
        </article>
      </section>

      <section className="awards section-shell reveal" id="recognition">
        <p className="section-kicker">Recognition</p>
        <div className="recognition-feature">
          <div className="recognition-copy">
            <span>Best Poster Award · Journée ICube 2026</span>
            <h2>Toward Trustworthy Digital Twins for 5G Networks</h2>
            <p>
              The poster presents my PhD framework, the OpenAirInterface 5G
              testbed used for experiments, and the trace-driven traffic model
              published at NetSoft 2026. It received the Best Poster Award at
              Journée ICube on 2 July 2026.
            </p>
            <div className="recognition-links">
              <a href="/assets/documents/poster-2026.pdf" target="_blank">View poster ↗</a>
              <a href="https://www.linkedin.com/in/ghinwa-ismail-a14a65249" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </div>
          <figure className="recognition-poster">
            <img
              src="/assets/images/publications/poster-presentation-main.jpg"
              srcSet="/assets/images/publications/poster-presentation-main-540.jpg 540w, /assets/images/publications/poster-presentation-main.jpg 1080w"
              sizes="(max-width: 760px) 100vw, 46vw"
              width="1080"
              height="1148"
              loading="lazy"
              decoding="async"
              alt="Ghinwa Ismail presenting her award-winning Network Digital Twins poster"
            />
            <div className="award-seal" aria-label="Best Poster Award 2026">
              <Award aria-hidden="true" />
              <span>Best Poster</span>
              <strong>2026</strong>
            </div>
            <figcaption>Best Poster Award · ICube, 2 July 2026</figcaption>
          </figure>
        </div>
        <div className="recognition-layout">
          <figure className="recognition-photo">
            <img
              src="/assets/images/recognition/al-basil-award.jpg"
              srcSet="/assets/images/recognition/al-basil-award-900.jpg 900w, /assets/images/recognition/al-basil-award.jpg 1800w"
              sizes="(max-width: 760px) 100vw, 45vw"
              width="1800"
              height="2404"
              loading="lazy"
              decoding="async"
              alt="Ghinwa Ismail receiving the AL-Basil Outstanding Graduate recognition"
            />
            <figcaption>
              <strong>AL-Basil Outstanding Graduate</strong>
              <span>Tishreen University · 2020</span>
            </figcaption>
          </figure>
          <div className="award-list">
            <article><span>2020</span><h3>AL-Basil Outstanding Graduate Certificate</h3></article>
            <article><span>2017 · 2018 · 2019</span><h3>AL-Basil First Rank Certificates</h3></article>
            <article><span>2021</span><h3>Al-Basel Fair for Innovation · Honored Participant</h3></article>
          </div>
        </div>
      </section>
      </main>

      <footer id="contact">
        <div className="footer-main">
          <p className="section-kicker">Contact</p>
          <h2>Get in touch.</h2>
          <a className="email-link" href="mailto:gismail@unistra.fr">gismail@unistra.fr <span aria-hidden="true">↗</span></a>
        </div>
        <div className="footer-bottom">
          <span>Ghinwa Ismail · Strasbourg, France</span>
          <nav aria-label="Footer links">
            <a href="https://github.com/GhinwaISMAIL" target="_blank" rel="noreferrer"><Github aria-hidden="true" /> GitHub</a>
            <a href="https://www.linkedin.com/in/ghinwa-ismail-a14a65249" target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" /> LinkedIn</a>
            <a href="https://www.researchgate.net/profile/Ghinwa-Ismail-4" target="_blank" rel="noreferrer"><BookOpen aria-hidden="true" /> ResearchGate</a>
            <a href="https://scholar.google.com/citations?user=uCI4JNcAAAAJ&hl=en" target="_blank" rel="noreferrer"><GraduationCap aria-hidden="true" /> Google Scholar</a>
            <a href="/assets/documents/resume.pdf" target="_blank"><FileText aria-hidden="true" /> CV</a>
          </nav>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
