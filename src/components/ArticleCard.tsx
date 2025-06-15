import { Link } from 'react-router-dom';
import { Article } from '../types'; // Import the Article interface

// Define the props interface for ArticleCard
interface ArticleCardProps {
  article: Article;
}

function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="article-card">
      <Link to={article.link}>
        <img src={article.imageUrl} alt={article.title} className="article-card-img" />
        <h3 className="article-card-title">{article.title}</h3>
      </Link>
      <p className="article-card-summary">{article.summary}</p>
      <Link to={article.link} className="article-card-read-more">Read More</Link>
    </div>
  );
};

export default ArticleCard;