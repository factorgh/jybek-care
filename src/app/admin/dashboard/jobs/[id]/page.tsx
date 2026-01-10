export function generateStaticParams() {
  return [];
}

import EditJobContent from "./EditJobContent";

export default function EditJobPage({ params }: { params: { id: string } }) {
  return <EditJobContent params={params} />;
}
