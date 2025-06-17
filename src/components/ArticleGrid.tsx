import '../styling/ArticleGrid.css';
import ArticleCard from './ArticleCard';
import { Article } from '../types'; // Import the Article interface
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import FetchArticles from './fetchArticles';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function ArticleGrid() {
  // Sample article data with explicit Article type
  const articles: Article[] = [
    {
      id: 1,
      title: 'Getting Started with React Hooks',
      summary: 'A beginner-friendly guide to understanding and using React Hooks for state and side effects.',
      imageUrl: 'https://via.placeholder.com/300x200?text=React+Hooks',
      link: '/articles/react-hooks-guide',
    },
    {
      id: 2,
      title: 'Optimizing Performance in React Applications',
      summary: 'Tips and tricks to make your React app blazing fast, from memoization to lazy loading.',
      imageUrl: 'https://via.placeholder.com/300x200?text=React+Perf',
      link: '/articles/react-performance-optimization',
    },
    {
      id: 3,
      title: 'Building a Responsive Navbar with Flexbox',
      summary: 'Learn how to create a flexible and responsive navigation bar using CSS Flexbox.',
      imageUrl: 'https://via.placeholder.com/300x200?text=Responsive+Navbar',
      link: '/articles/responsive-navbar',
    },
    {
      id: 4,
      title: 'State Management with React Context API',
      summary: 'An in-depth look at using React Context API for global state management without Redux.',
      imageUrl: 'https://via.placeholder.com/300x200?text=Context+API',
      link: '/articles/react-context-api',
    },
    // Add more articles as needed
  ];

  const queryClient = new QueryClient();

  return (
    <div className="article-grid-container">
      {/* {articles.map((article) => (
        // Pass the entire article object as a prop
        <ArticleCard key={article.id} article={article} />
      ))} */}

      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <FetchArticles />
      </QueryClientProvider>
    </div>
  );
};

export default ArticleGrid;