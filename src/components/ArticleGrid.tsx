import '../styling/ArticleGrid.css';
import ArticleCard from './ArticleCard';
import ArticleAPI from './ArticleAPI';

function ArticleGrid() {  
  const results = ArticleAPI.useArticles();

  if(results.isLoading) return "Loading..."
  if(results.error) return "Error: " + results.error.message

  return (
    <div className="article-grid-container">
      {results.data && results.data.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleGrid;