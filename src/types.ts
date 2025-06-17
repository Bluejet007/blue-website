export interface Article {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  link: string; // The path to the individual article page
  content?: string; // Optional: for the full article page content
}