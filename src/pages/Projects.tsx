import ProjectCard from '../components/ProjectCard';
import { projectFiles } from '../utils/contentLoader';
import { parseFrontmatter } from '../utils/mdParser';

export default function Projects() {
  const projects = Object.entries(projectFiles).map(([path, fileContent]) => {
    const { data, content } = parseFrontmatter(fileContent);
    const slug = path.split('/').pop()?.replace('.md', '');
    return {
      title: data.title || 'Untitled',
      description: data.description || content.substring(0, 150) + '...',
      link: `/projects/${slug}`,
      imageUrl: data.imageUrl,
      order: parseInt(data.order || '99'),
    };
  }).sort((a, b) => a.order - b.order);

  return (
    <div>
      <h2 style={{ marginBottom: '1.5rem' }}>Selected Projects</h2>
      <div className="project-list">
        {projects.map((proj) => (
          <ProjectCard
            key={proj.link}
            title={proj.title}
            description={proj.description}
            link={proj.link}
            imageUrl={proj.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
