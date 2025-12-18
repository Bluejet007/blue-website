export interface ArticleProps {
  id: string;
  title: string;
  date: string;
  authors?: string[];
  description: string;
  imageUrl?: string;
  link: string; // Relative path
  content?: string; // Full article page content
};