import {NextRequest} from 'next/server';
import {ai} from '@/ai/genkit';
import {notFound} from 'next/navigation';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(
  req: NextRequest,
  {params}: {params: {prompt: string}}
) {
  const prompt = params.prompt.replace(/-/g, ' ');

  const {media} = await ai.generate({
    model: 'googleai/gemini-2.0-flash-preview-image-generation',
    prompt: `a realistic, professional photograph of ${prompt}, for a luxury beauty brand e-commerce website`,
    config: {
      responseModalities: ['TEXT', 'IMAGE'],
    },
  });

  if (!media?.url) {
    return notFound();
  }

  const base64Data = media.url.substring(media.url.indexOf(',') + 1);
  const buffer = Buffer.from(base64Data, 'base64');

  return new Response(buffer, {
    headers: {
      'Content-Type': media.contentType || 'image/png',
      'Content-Length': buffer.length.toString(),
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}

    