import { Navbar, Footer } from '@/components/layout';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white dark:bg-gray-950">
      <Navbar />
      <div className="flex-1 flex flex-col min-w-0 lg:pl-80">
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

