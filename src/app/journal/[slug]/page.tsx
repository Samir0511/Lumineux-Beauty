import { notFound } from 'next/navigation';
import Image from 'next/image';
import { journalPosts } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

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
              <AvatarImage src={`/api/image/author-face`} alt={`Avatar of ${post.author}`} />
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

    