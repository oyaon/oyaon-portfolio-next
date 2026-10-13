import type { Project } from '@/lib/projects';

export function ProjectCard({ project }: { project: Project }) {
  return <article className="project-card">
    <div className="project-topline"><span>{project.number} / SELECTED WORK</span><span className="status">{project.status}</span></div>
    <div className="project-art" aria-hidden="true"><span className="art-index">{project.number}</span><span className="art-orbit orbit-one"/><span className="art-orbit orbit-two"/><span className="art-core"/><span className="art-caption">SYSTEM STUDY</span></div>
    <div className="project-copy"><p className="eyebrow">{project.category}</p><h3>{project.title}</h3><p>{project.summary}</p><ul className="tag-list">{project.stack.map((tag) => <li key={tag}>{tag}</li>)}</ul></div>
  </article>;
}
