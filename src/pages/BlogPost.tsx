import { blogFiles } from '../utils/contentLoader';
import MarkdownPost from '../components/MarkdownPost';

export default function BlogPost() {
  return (
    <MarkdownPost
      backLink="/blog"
      backLabel="Back to Manuscripts"
      contentFiles={blogFiles}
      contentDir="blogs"
    />
  );
}
