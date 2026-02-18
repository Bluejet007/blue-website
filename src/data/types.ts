export interface ArticleProps {
  id: string,
  title: string,
  rawTitle: string,
  date: string,
  authors?: string[],
  description: string,
  imageUrl?: string,
  content?: string, // Full article page content
  isNotArticle?: boolean
};