import React, { createContext, ReactNode } from 'react';
import { UseQueryResult } from '@tanstack/react-query';
import ArticleAPI from './ArticleAPIHandler'; // Assuming this is the path to your API file
import { ArticleProps } from '../data/types'; // Import your type

// 2. Create the Context
// The value provided here is a placeholder/default that matches the interface
export const ArticleContext = createContext<UseQueryResult<Array<ArticleProps>, Error> | undefined>(undefined);

// 3. Define the Provider Component
interface ArticleProviderProps {
  children: ReactNode;
}

export const ArticleProvider: React.FC<ArticleProviderProps> = ({ children }) => {
  // Use your TanStack Query hook to fetch the data
  const articleQuery = ArticleAPI.useArticles();

  return (
    <ArticleContext.Provider value={articleQuery}>
      {children}
    </ArticleContext.Provider>
  );
};