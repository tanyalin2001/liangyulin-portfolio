import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Liang Yu Lin - Portfolio',
  description: 'Software Engineer | Full-Stack Developer | TCG Enthusiast',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-32 pb-16">
          <div className="max-w-5xl mx-auto px-6 md:px-10">
            {children}
          </div>
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
