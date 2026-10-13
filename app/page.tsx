import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/lib/projects';

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Oyaon Sultan home">
          OS<span>®</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#approach">Approach</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-contact" href="#contact">
          Let’s talk <ArrowUpRight size={15} />
        </a>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-meta">
          <span>INDEPENDENT BUILDER · DHAKA, BD</span>
          <span>SOFTWARE / AI / B2B GROWTH</span>
        </div>
        <div className="hero-title-wrap">
          <p className="eyebrow">I BUILD DIGITAL SYSTEMS THAT MAKE SENSE.</p>
          <h1>
            Curiosity
            <br />
            into <em>capability.</em>
          </h1>
          <div className="hero-stamp" aria-hidden="true">
            <span>RESEARCH</span>
            <b>×</b>
            <span>ENGINEERING</span>
            <b>×</b>
            <span>GROWTH</span>
          </div>
        </div>
        <div className="hero-bottom">
          <p>
            I&apos;m Oyaon Sultan, a Computer Science and Engineering graduate working across software
            development, applied AI, and B2B business development.
          </p>
          <a href="#work" className="round-link" aria-label="Explore selected work">
            <ArrowDownRight size={23} />
          </a>
        </div>
        <div className="hero-rule">
          <span>PORTFOLIO / 2026</span>
          <span>BUILD WITH INTENT.</span>
        </div>
      </section>

      <section className="work-section section-shell" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 — SELECTED PROJECTS</p>
            <h2>
              Ideas, made
              <br />
              <em>tangible.</em>
            </h2>
          </div>
          <p className="section-note">
            Five projects across software, search, and applied AI. Source and demo links are included
            where they could be matched to the project.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
        <p className="evidence-note">
          <span className="note-dot" /> Dengue forecasting results are experimental and have not been
          independently reproduced.
        </p>
      </section>

      <section className="experience-section section-shell" id="experience">
        <div className="resume-heading">
          <p className="eyebrow">02 — PROFESSIONAL EXPERIENCE</p>
          <h2>
            Work
            <br />
            <em>experience.</em>
          </h2>
        </div>
        <div className="experience-list">
          <article className="experience-item">
            <div className="experience-meta">
              <p className="eyebrow">JUL 2026 — PRESENT</p>
              <p>Appiex · Remote</p>
            </div>
            <div>
              <h3>Business Development Executive</h3>
              <ul>
                <li>
                  Research and qualify prospective clients for website design and development
                  services.
                </li>
                <li>
                  Personalize LinkedIn outreach and follow-ups around the technical and commercial
                  value of digital solutions.
                </li>
                <li>
                  Maintain structured lead records and prospect status for pipeline visibility and
                  follow-up continuity.
                </li>
              </ul>
            </div>
          </article>
          <article className="experience-item">
            <div className="experience-meta">
              <p className="eyebrow">MAR 2026 — JUN 2026</p>
              <p>Prospect Engine LLC · Remote</p>
            </div>
            <div>
              <h3>Sales &amp; Marketing Intern</h3>
              <ul>
                <li>
                  Researched target companies and built prospect lists against ideal customer
                  profile criteria.
                </li>
                <li>
                  Supported personalized LinkedIn and email outreach, including follow-ups.
                </li>
                <li>Organized prospect data in Apollo and HubSpot CRM and reviewed messaging.</li>
              </ul>
            </div>
          </article>
          <article className="experience-item">
            <div className="experience-meta">
              <p className="eyebrow">JAN 2026 — MAR 2026</p>
              <p>Prospect Engine LLC · Remote</p>
            </div>
            <div>
              <h3>Sales Development Intern</h3>
              <ul>
                <li>
                  Built targeted lead lists by researching founders and decision-makers in selected
                  industries.
                </li>
                <li>Assisted with personalized LinkedIn outreach, follow-up messages, and prospect research.</li>
                <li>
                  Recorded prospect information and supported campaign monitoring and conversation
                  continuity.
                </li>
              </ul>
            </div>
          </article>
          <article className="experience-item">
            <div className="experience-meta">
              <p className="eyebrow">FEB 2025 — JUN 2025</p>
              <p>SOFTDEFT · Dhaka, on-site</p>
            </div>
            <div>
              <h3>Software Engineer Intern</h3>
              <ul>
                <li>
                  Built a PHP and MySQL Library Management System designed for a catalog of 3,500+
                  books and 400+ users.
                </li>
                <li>Designed normalized schemas for inventory, users, and transaction tracking.</li>
                <li>
                  Developed authentication, role-based access control, and server-side validation.
                </li>
              </ul>
            </div>
          </article>
          <article className="experience-item">
            <div className="experience-meta">
              <p className="eyebrow">2022 — PRESENT</p>
              <p>Independent · Community pages</p>
            </div>
            <div>
              <h3>Social Media Manager &amp; Content Creator</h3>
              <p className="experience-detail">
                Bashundhara Shuvosangho and Gobindaganj Public Library
              </p>
              <ul>
                <li>
                  Planned and wrote posts, designed graphics in Canva, and edited short videos in
                  CapCut.
                </li>
                <li>
                  Scheduled content, monitored comments and messages, and reviewed Facebook Page
                  Insights.
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="approach-section section-shell" id="approach">
        <p className="eyebrow">03 — HOW I THINK</p>
        <div className="approach-grid">
          <h2>
            Good work lives
            <br />
            between <em>disciplines.</em>
          </h2>
          <div className="approach-copy">
            <p>
              I like understanding the problem before choosing the tool. Sometimes that means
              building an API. Sometimes it means testing a forecasting approach, studying the data,
              or improving how a digital service reaches people.
            </p>
            <div className="principle">
              <span>01</span>
              <div>
                <h3>Understand the system</h3>
                <p>Map the user, constraints, data and desired outcome before building.</p>
              </div>
            </div>
            <div className="principle">
              <span>02</span>
              <div>
                <h3>Make the work inspectable</h3>
                <p>Readable code, honest metrics and clear documentation beat vague claims.</p>
              </div>
            </div>
            <div className="principle">
              <span>03</span>
              <div>
                <h3>Ship with purpose</h3>
                <p>Build the smallest useful version, test it, then improve it from evidence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="education-section section-shell" id="education">
        <div className="resume-heading">
          <p className="eyebrow">04 — EDUCATION &amp; CERTIFICATIONS</p>
          <h2>
            Keep
            <br />
            <em>learning.</em>
          </h2>
        </div>
        <div className="education-grid">
          <div className="education-column">
            <h3 className="resume-subheading">Education</h3>
            <article className="education-item">
              <p className="eyebrow">2020 — 2025</p>
              <h4>B.Sc. in Computer Science &amp; Engineering</h4>
              <p>
                IUBAT — International University of Business Agriculture and Technology
                <br />
                Dhaka · CGPA 3.00 / 4.00
              </p>
            </article>
            <article className="education-item">
              <p className="eyebrow">HSC · SCIENCE</p>
              <h4>Dhaka City College</h4>
              <p>GPA 4.58 / 5.00</p>
            </article>
          </div>
          <div className="education-column">
            <h3 className="resume-subheading">Certifications</h3>
            <ul className="certification-list">
              <li>
                <span>Internship Completion Certificate</span>
                <span>Prospect Engine LLC · Jun 2026</span>
              </li>
              <li>
                <span>LinkedIn Outreach Training Program</span>
                <span>Prospect Engine LLC · 2026</span>
              </li>
              <li>
                <span>Google Digital Marketing Certificate</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="about-section section-shell" id="about">
        <div className="about-label">
          <p className="eyebrow">05 — A LITTLE CONTEXT</p>
          <span>CSE GRADUATE / DHAKA, BANGLADESH</span>
        </div>
        <div className="about-content">
          <h2>
            Engineer by training.
            <br />
            <em>Builder by curiosity.</em>
          </h2>
          <p>
            My background combines software development and B2B business development. I&apos;m
            interested in thoughtful execution, honest communication, and steady improvement.
          </p>
          <div className="about-links">
            <a href="https://github.com/oyaon" target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight size={15} />
            </a>
            <a href="https://www.linkedin.com/in/oyaonsultan07" target="_blank" rel="noreferrer">
              LinkedIn <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>

      <section className="contact-section section-shell" id="contact">
        <p className="eyebrow">06 — HAVE A GOOD PROBLEM?</p>
        <h2>
          Let’s make
          <br />
          <em>something useful.</em>
        </h2>
        <p className="contact-sub">
          Open to suitable software, AI, data, and business development opportunities.
        </p>
        <a className="email-link" href="mailto:oyaon.sultan07@gmail.com">
          <Mail size={18} /> oyaon.sultan07@gmail.com <ArrowUpRight size={17} />
        </a>
        <div className="contact-socials">
          <a href="https://github.com/oyaon" target="_blank" rel="noreferrer">
            <Github size={17} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/oyaonsultan07" target="_blank" rel="noreferrer">
            <Linkedin size={17} /> LinkedIn
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <span>© 2026 OYAON SULTAN</span>
        <span>MADE WITH INTENTION, NOT NOISE.</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
