import { Link } from 'react-router-dom';
import { blogFiles } from '../utils/contentLoader';
import { parseFrontmatter } from '../utils/mdParser';

export default function BlogList() {
  const posts = Object.entries(blogFiles).map(([path, fileContent]) => {
    const { data } = parseFrontmatter(fileContent);
    const slug = path.split('/').pop()?.replace('.md', '');
    return {
      id: slug,
      title: data.title || 'Untitled',
      date: data.date || '',
    };
  });

  return (
    <div>
      <h2 style={{ marginBottom: '1.5rem' }}>Manuscripts</h2>
      <div className="blog-list">
        {posts.map(post => (
          <Link to={`/blog/${post.id}`} className="blog-item" key={post.id}>
            <h3>{post.title}</h3>
            <p className="blog-date">{post.date}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
