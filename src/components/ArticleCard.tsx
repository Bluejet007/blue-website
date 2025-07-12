import { Link } from 'react-router-dom';
import { Article } from '../data/types'; // Import the Article interface

interface ArticleCardProps {
  article: Article;
}

function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="article-card">
      <Link to={article.link}>
        <img src={article.imageUrl} alt={article.title} className="article-card-img" />
        <h3 className="article-card-title">{article.title}</h3>
        <p className="article-card-summary">{article.description}</p>
      </Link>
    </div>
  );
}

export default ArticleCard;