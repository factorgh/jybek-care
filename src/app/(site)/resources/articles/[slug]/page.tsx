import ArticleDetail from "./ArticleDetail";
import { articles } from "./articles-data";

// Generate static params for static export
export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({
    slug,
  }));
}

export default function ArticleDetailPage() {
  return <ArticleDetail />;
}
