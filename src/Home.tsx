import ArticleCard from "./components/ArticleCard";
import menuData from "./data/homeMenuData";

function App() {
  return (
    <div className="main-content">
      <h2>From old roots<br />To new heights, to new horizons, to new skies<br />Spring new leaves</h2>
      <div className='article-grid-container'>
        {menuData.map(article => <ArticleCard key={article.id} article={article} />)}
      </div>
    </div>
  );
}

export default App;