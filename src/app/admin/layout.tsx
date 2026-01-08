import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin | Jybek Home Care',
  description: 'Jybek Home Care Admin Portal',
  robots: 'noindex, nofollow',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

