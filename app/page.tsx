import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { HeroScene } from '@/components/HeroScene';
import { ProjectCard } from '@/components/ProjectCard';
import { RevealSection } from '@/components/RevealSection';
import { projects } from '@/lib/projects';

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Oyaon Sultan home">
          OS<span>®</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-contact" href="mailto:oyaon.sultan07@gmail.com">
          Let’s talk <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-meta">
          <span>INDEPENDENT BUILDER · DHAKA, BD</span>
          <span>SOFTWARE / AI / B2B GROWTH</span>
        </div>
        <HeroScene />
        <div className="hero-content">
          <p className="eyebrow"><span className="eyebrow-index">01</span> PORTFOLIO / 2026</p>
          <h1>
            Curiosity
            <br />
            into <em>capability.</em>
          </h1>
          <p className="hero-summary">
            I&apos;m Oyaon Sultan, a Computer Science and Engineering graduate working across software
            development, applied AI, and B2B business development.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore selected work <ArrowDownRight size={17} aria-hidden="true" />
            </a>
            <a className="text-link" href="https://github.com/oyaon" target="_blank" rel="noreferrer">
              GitHub profile <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="hero-bottomline">
          <span>RESEARCH <b>×</b> ENGINEERING <b>×</b> GROWTH</span>
          <a href="#work" aria-label="Scroll to selected projects">
            SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <RevealSection id="work" className="work-section section-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow-index">01</span> SELECTED PROJECTS</p>
            <h2>
              Built with
              <br />
              <em>intention.</em>
            </h2>
          </div>
          <p className="section-note">
            Software, search, and applied AI experiments. Explore the source or live demos where
            available.
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
      </RevealSection>

      <RevealSection id="experience" className="experience-section section-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow-index">02</span> PROFESSIONAL EXPERIENCE</p>
            <h2>
              People,
              <br />
              <em>problems, progress.</em>
            </h2>
          </div>
          <p className="section-note">
            Building technical products and helping teams find the people who need them.
          </p>
        </div>
        <div className="experience-list">
          <article className="experience-item">
            <div className="experience-meta">
              <p className="eyebrow">JUL 2026 — PRESENT</p>
              <p>REMOTE</p>
            </div>
            <div className="experience-role">
              <div className="role-heading">
                <h3>Business Development Executive</h3>
                <span>APPIEX</span>
              </div>
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
              <p>REMOTE</p>
            </div>
            <div className="experience-role">
              <div className="role-heading">
                <h3>Sales &amp; Marketing Intern</h3>
                <span>PROSPECT ENGINE LLC</span>
              </div>
              <ul>
                <li>
                  Researched target companies and built prospect lists against ideal customer
                  profile criteria.
                </li>
                <li>Supported personalized LinkedIn and email outreach, including follow-ups.</li>
                <li>Organized prospect data in Apollo and HubSpot CRM and reviewed messaging.</li>
              </ul>
            </div>
          </article>
          <article className="experience-item">
            <div className="experience-meta">
              <p className="eyebrow">JAN 2026 — MAR 2026</p>
              <p>REMOTE</p>
            </div>
            <div className="experience-role">
              <div className="role-heading">
                <h3>Sales Development Intern</h3>
                <span>PROSPECT ENGINE LLC</span>
              </div>
              <ul>
                <li>
                  Built targeted lead lists by researching founders and decision-makers in selected
                  industries.
                </li>
                <li>
                  Assisted with personalized LinkedIn outreach, follow-up messages, and prospect
                  research.
                </li>
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
              <p>DHAKA · ON-SITE</p>
            </div>
            <div className="experience-role">
              <div className="role-heading">
                <h3>Software Engineer Intern</h3>
                <span>SOFTDEFT</span>
              </div>
              <ul>
                <li>
                  Built a PHP and MySQL Library Management System designed for a catalog of 3,500+
                  books and 400+ users.
                </li>
                <li>Designed normalized schemas for inventory, users, and transaction tracking.</li>
                <li>Developed authentication, role-based access control, and server-side validation.</li>
              </ul>
            </div>
          </article>
          <article className="experience-item">
            <div className="experience-meta">
              <p className="eyebrow">2022 — PRESENT</p>
              <p>INDEPENDENT</p>
            </div>
            <div className="experience-role">
              <div className="role-heading">
                <h3>Social Media Manager &amp; Content Creator</h3>
                <span>COMMUNITY PAGES</span>
              </div>
              <p className="experience-detail">Bashundhara Shuvosangho and Gobindaganj Public Library</p>
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
      </RevealSection>

      <RevealSection id="approach" className="approach-section section-shell">
        <div className="approach-heading">
          <p className="eyebrow"><span className="eyebrow-index">03</span> HOW I THINK</p>
          <h2>
            Good work lives
            <br />
            between <em>disciplines.</em>
          </h2>
        </div>
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
              <p>              Map the user, constraints, data and desired outcome before building.</p>
            </div>
          </div>
          <div className="principle">
            <span>02</span>
            <div>
              <h3>Make the work inspectable</h3>
              <p>              Readable code, honest metrics and clear documentation beat vague claims.</p>
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
      </RevealSection>

      <RevealSection id="education" className="education-section section-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow-index">04</span> EDUCATION &amp; LEARNING</p>
            <h2>
              A foundation
              <br />
              for <em>what’s next.</em>
            </h2>
          </div>
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
      </RevealSection>

      <RevealSection id="about" className="about-section section-shell">
        <div className="about-index">
          <p className="eyebrow"><span className="eyebrow-index">05</span> A LITTLE CONTEXT</p>
          <span>BASED IN DHAKA, BANGLADESH</span>
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
              GitHub <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/in/oyaonsultan07" target="_blank" rel="noreferrer">
              LinkedIn <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </RevealSection>

      <RevealSection id="contact" className="contact-section section-shell">
        <div className="contact-grid">
          <div>
            <p className="eyebrow"><span className="eyebrow-index">06</span> HAVE A GOOD PROBLEM?</p>
            <h2>
              Let’s make
              <br />
              <em>something useful.</em>
            </h2>
          </div>
          <div className="contact-details">
            <p>Open to suitable software, AI, data, and business development opportunities.</p>
            <a className="email-link" href="mailto:oyaon.sultan07@gmail.com">
              <Mail size={18} aria-hidden="true" /> oyaon.sultan07@gmail.com{' '}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <div className="contact-socials">
              <a href="https://github.com/oyaon" target="_blank" rel="noreferrer">
                <Github size={17} aria-hidden="true" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/oyaonsultan07" target="_blank" rel="noreferrer">
                <Linkedin size={17} aria-hidden="true" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </RevealSection>

      <footer className="site-footer">
        <a className="wordmark" href="#top" aria-label="Back to top">
          OS<span>®</span>
        </a>
        <span>© 2026 OYAON SULTAN</span>
        <span>MADE WITH INTENTION, NOT NOISE.</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
