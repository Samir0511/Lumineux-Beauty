'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import { Button } from '@/components/ui/shadcn/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto flex h-[calc(100vh-8rem)] items-center justify-center text-center px-4">
      <div>
        <h1 className="text-8xl md:text-9xl font-bold font-headline text-destructive opacity-50">500</h1>
        <h2 className="mt-4 text-3xl md:text-4xl font-headline">Something went wrong</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          We're sorry, but an unexpected error occurred on our end.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button onClick={() => reset()}>Try again</Button>
          <Button variant="outline" asChild>
            <a href="/">Return to Homepage</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
