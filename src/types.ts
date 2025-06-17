export interface Article {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  link: string; // Relative path
  content?: string; // Full article page content
}

export interface GridProps {
  centreDotHandler: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  dotSizeHandler: [number, React.Dispatch<React.SetStateAction<number>>];
  gridSizeHandler: [number, React.Dispatch<React.SetStateAction<number>>];
};