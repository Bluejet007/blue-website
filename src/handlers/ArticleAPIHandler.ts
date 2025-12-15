import { useQuery } from "@tanstack/react-query";
import { ArticleProps } from "../data/types";

const staleTime = 1000 * 60 * 10; // 10 minutes

const ArticleAPI = {
  useArticles() {
    return useQuery({
      queryKey: ['articles'],
      queryFn: async (): Promise<Array<ArticleProps>> => {
        const response = await fetch(
          'https://rtarticlesapi.azurewebsites.net/api/Articles'
        );
        return await response.json();
      },
      staleTime: staleTime
    });
  },
  useArticle(articleId: string) {
    return useQuery({
      queryKey: ['article', articleId],
      queryFn: async (): Promise<ArticleProps> => {
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