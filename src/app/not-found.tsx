import Link from 'next/link';
import { Button } from '@/components/ui/shadcn/button';

export default function NotFound() {
  return (
    <div className="container mx-auto flex h-[calc(100vh-8rem)] items-center justify-center text-center px-4">
      <div>
        <h1 className="text-8xl md:text-9xl font-bold font-headline text-primary opacity-50">404</h1>
        <h2 className="mt-4 text-3xl md:text-4xl font-headline">Page Not Found</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Return to Homepage</Link>
        </Button>
      </div>
    </div>
  );
}
