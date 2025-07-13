import { notFound } from 'next/navigation';
import Image from 'next/image';
import { journalPosts } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/shadcn/avatar';
import { Badge } from '@/components/ui/shadcn/badge';

export async function generateStaticParams() {
  return journalPosts.map((post) => ({
    slug: post.slug,
  }));
}

type JournalPostPageProps = {
  params: {
    slug: string;
  };
};

export default function JournalPostPage({ params }: JournalPostPageProps) {
  const post = journalPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <header className="relative h-[50vh] w-full">
        <Image
          src={post.imageUrl}
          alt={`Header image for journal post titled "${post.title}"`}
          fill
          className="object-cover brightness-50"
          data-ai-hint={post.imageHint}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <Badge variant="secondary" className="mb-4">Journal</Badge>
            <h1 className="text-4xl md:text-6xl font-bold font-headline max-w-4xl mx-auto">
              {post.title}
            </h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhdXRob3IlMjBmYWNlfGVufDB8fHx8MTc1MjMwNDc5M3ww&ixlib=rb-4.1.0&q=80&w=1080" alt={`Avatar of ${post.author}`} data-ai-hint="author face" />
              <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{post.author}</p>
              <p className="text-sm text-muted-foreground">{post.date}</p>
            </div>
          </div>

          <div
            className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-headline prose-p:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </article>
  );
}
