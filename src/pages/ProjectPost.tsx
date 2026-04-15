import { projectFiles } from '../utils/contentLoader';
import MarkdownPost from '../components/MarkdownPost';

export default function ProjectPost() {
  return (
    <MarkdownPost
      backLink="/projects"
      backLabel="Back to Projects"
      contentFiles={projectFiles}
      contentDir="projects"
    />
  );
}
