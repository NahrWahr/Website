import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import PretextHeader from './PretextHeader';
import { parseFrontmatter } from '../utils/mdParser';

interface MarkdownPostProps {
  backLink: string;
  backLabel: string;
  contentFiles: Record<string, string>;
  contentDir: string;
}

export default function MarkdownPost({ backLink, backLabel, contentFiles, contentDir }: MarkdownPostProps) {
  const { id } = useParams();

  const targetPath = `../content/${contentDir}/${id}.md`;
  const rawContent = contentFiles[targetPath];

  if (!rawContent) {
    return (
      <div className="content-box">
        <Link to={backLink} className="back-link">← {backLabel}</Link>
        <p style={{ marginTop: '2rem' }}>Not found.</p>
      </div>
    );
  }

  const { data, content } = parseFrontmatter(rawContent);

  return (
    <div className="content-box">
      <Link to={backLink} className="back-link">
        ← {backLabel}
      </Link>

      <PretextHeader text={data.title || 'Untitled'} />

      <div className="prose">
        <ReactMarkdown
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex, rehypeRaw]}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
