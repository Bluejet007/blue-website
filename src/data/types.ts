export interface ArticleProps {
  id: string;
  title: string;
  date: string;
  authors?: string[];
  description: string;
  'image-url'?: string;
  link: string; // Relative path
  content?: string; // Full article page content
};