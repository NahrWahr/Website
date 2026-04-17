import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  imageUrl?: string;
}

export default function ProjectCard({ title, description, link, imageUrl }: ProjectCardProps) {
  return (
    <div className="project-item">
      <h3>{title}</h3>
      <div className="project-card-body">
        {imageUrl && (
          <img
            src={imageUrl.startsWith('/') ? `${import.meta.env.BASE_URL}${imageUrl.slice(1)}` : imageUrl}
            alt={`${title} preview`}
            className="project-card-img"
          />
        )}
        <p className="project-description">{description}</p>
      </div>
      <div className="project-card-footer">
        <Link to={link}>View Details ➝</Link>
      </div>
    </div>
  );
}
