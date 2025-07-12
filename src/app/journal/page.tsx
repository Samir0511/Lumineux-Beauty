import Link from 'next/link';
import Image from 'next/image';
import { journalPosts } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function JournalPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">The Journal</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Your guide to radiant beauty, inside and out. Explore tutorials, ingredient spotlights, and our brand philosophy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journalPosts.map((post) => (
            <Card key={post.id} className="flex flex-col overflow-hidden group border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="p-0">
                <Link href={`/journal/${post.slug}`} className="block overflow-hidden">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover aspect-[3/2] group-hover:scale-105 transition-transform duration-300"
                    data-ai-hint={post.imageHint}
                  />
                </Link>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <h2 className="text-xl font-bold font-headline leading-tight">
                  <Link href={`/journal/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-between items-center">
                <div className="text-sm text-muted-foreground">
                    <span>By {post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                </div>
                <Button asChild variant="ghost" size="icon">
                  <Link href={`/journal/${post.slug}`} aria-label={`Read more about ${post.title}`}>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
