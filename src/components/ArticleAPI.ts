import { useQuery } from "@tanstack/react-query";
import { Article } from "../types";

const staleTime = 1000 * 60 * 10; // 10 minutes

const ArticleAPI = {
  useArticles() {
    return useQuery({
      queryKey: ['articles'],
      queryFn: async (): Promise<Array<Article>> => {
        const response = await fetch(
          'https://rtarticlesapi.azurewebsites.net/api/Articles'
        );
        return await response.json();
      },
      staleTime: staleTime
    });
  },
  useArticle(articleId: number) {
    return useQuery({
      queryKey: ['article', articleId],
      queryFn: async (): Promise<Array<Article>> => {
        const response = await fetch(
          `https://rtarticlesapi.azurewebsites.net/api/Articles/${articleId}`
        );
        return await response.json();
      },
      staleTime: staleTime
    });
  }
}

export default ArticleAPI;