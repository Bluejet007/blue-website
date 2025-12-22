import '../styling/ArticleGrid.css';
import ArticleCard from './ArticleCard';
import ArticleAPI from '../handlers/ArticleAPIHandler';

function ArticleGrid() {  
  const articlesQuery = ArticleAPI.useArticles();

  if(articlesQuery.isLoading) return 'Loading...';
  if(articlesQuery.error) return 'Error: ' + articlesQuery.error.message;

  return (
    <div className='article-grid-container'>
      {articlesQuery.data && articlesQuery.data.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}

export default ArticleGrid;