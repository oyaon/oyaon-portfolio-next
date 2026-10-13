import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/lib/projects';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-topline">
        <span>{project.number} / SELECTED WORK</span>
        <span className="status">{project.status}</span>
      </div>
      <div className="project-art" aria-hidden="true">
        <span className="art-index">{project.number}</span>
        <span className="art-orbit orbit-one" />
        <span className="art-orbit orbit-two" />
        <span className="art-core" />
        <span className="art-caption">SYSTEM STUDY</span>
      </div>
      <div className="project-copy">
        <p className="eyebrow">{project.category}</p>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <ul className="tag-list" aria-label={`${project.title} technologies`}>
          {project.stack.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="project-links">
          {project.sourceHref && (
            <a
              href={project.sourceHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} source code on GitHub`}
            >
              Source code <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          )}
          {project.demoHref && (
            <a
              href={project.demoHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
            >
              Live demo <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
