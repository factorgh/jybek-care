export function generateStaticParams() {
  return [];
}

import EditArticleContent from "./EditArticleContent";

export default function EditArticlePage({
  params,
}: {
  params: { id: string };
}) {
  return <EditArticleContent params={params} />;
}
