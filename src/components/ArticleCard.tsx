import { Link } from 'react-router-dom';
import { ArticleProps } from '../data/types'; // Import the Article interface

function ArticleCard({ article }: { article: ArticleProps }) {
  return (
    <div className="article-card">
      <Link to={'/articles/' + article.rawTitle}>
        <img src={article.imageUrl} alt={article.title} className="article-card-img" />
        <h3 className="article-card-title">{article.title}</h3>
        <p className="article-card-summary">{article.description}</p>
      </Link>
    </div>
  );
}

export default ArticleCard;