import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/shadcn/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { NewsletterPopup } from '@/components/layout/newsletter-popup';

export const metadata: Metadata = {
  title: 'Lumineux Beauty',
  description: 'Luxury skincare and beauty products.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" 
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
        <NewsletterPopup />
      </body>
    </html>
  );
}
