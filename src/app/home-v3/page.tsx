
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Instagram } from 'lucide-react';
import { products, categories, journalPosts } from '@/lib/data';

export default function HomeV3() {
  const topPicks = products.slice(0, 4);
  const shopTheLookProducts = products.slice(1, 4);
  const socialImages = [
      "https://placehold.co/400x400.png",
      "https://placehold.co/400x400.png",
      "https://placehold.co/400x400.png",
      "https://placehold.co/400x400.png",
      "https://placehold.co/400x400.png",
  ];
  const socialImageHints = [
      "beauty product selfie",
      "beauty product selfie",
      "beauty product selfie",
      "beauty product selfie",
      "beauty product selfie",
  ]

  return (
    <div className="flex flex-col bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-[70vh]">
          <Link href="#" className="lg:col-span-2 relative group overflow-hidden rounded-lg">
            <Image
              src="https://placehold.co/800x800.png"
              alt="Model with elegant makeup posing for a beauty campaign"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
              data-ai-hint="fashion model"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 text-white">
              <h2 className="text-4xl font-headline font-bold mb-2">(Homepage V3) The Art of the Glow</h2>
              <p className="mb-4 text-lg">Effortless essentials for a luminous you.</p>
              <Button variant="secondary" className="w-fit">Shop Bestsellers</Button>
            </div>
          </Link>
          <div className="hidden lg:flex flex-col gap-4">
            <Link href="#" className="relative group overflow-hidden rounded-lg flex-1">
              <Image
                src="https://placehold.co/400x400.png"
                alt="Minimalist arrangement of new skincare products"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                data-ai-hint="serum bottle"
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center p-4 text-white">
                 <h3 className="text-2xl font-headline font-bold text-center">New Skincare</h3>
                 <span className="text-sm mt-2 group-hover:underline">Discover Now</span>
              </div>
            </Link>
            <Link href="#" className="relative group overflow-hidden rounded-lg flex-1">
              <Image
                src="https://placehold.co/400x400.png"
                alt="Flatlay of essential makeup items like lipstick and powder"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                data-ai-hint="lipstick makeup"
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center p-4 text-white">
                 <h3 className="text-2xl font-headline font-bold text-center">Makeup Must-Haves</h3>
                  <span className="text-sm mt-2 group-hover:underline">Shop Now</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Top Picks Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline text-center mb-12">Top Picks For You</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {topPicks.map((product) => (
              <Card key={product.id} className="overflow-hidden group border-transparent shadow-none bg-transparent">
                <CardHeader className="p-0">
                  <Link href={`/products/${product.slug}`} className="block aspect-square relative overflow-hidden rounded-lg">
                    <Image
                      src={product.images[0].src}
                      alt={product.images[0].alt}
                      fill
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint={product.images[0].hint}
                    />
                  </Link>
                </CardHeader>
                <CardContent className="p-4 text-center">
                  <CardTitle className="text-base font-body font-semibold">
                    <Link href={`/products/${product.slug}`} className="hover:underline">{product.name}</Link>
                  </CardTitle>
                  <p className="text-muted-foreground text-sm mt-1">{product.category}</p>
                   <p className="text-base font-semibold mt-2">${product.price.toFixed(2)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Shop the Look Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl md:text-4xl font-headline text-center mb-12">Shop The Look</h2>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                <Image src="https://placehold.co/600x750.png" alt="Model showcasing a complete, radiant makeup look" fill className="object-cover" data-ai-hint="fashion model beauty" />
              </div>
              <div>
                <h3 className="text-2xl font-headline mb-4">The Effortless Radiance</h3>
                <p className="text-muted-foreground mb-6">A complete routine for a natural, dewy finish that enhances your features. Perfect for everyday elegance.</p>
                <div className="space-y-4">
                  {shopTheLookProducts.map(product => (
                    <Link href={`/products/${product.slug}`} key={product.id} className="flex items-center gap-4 group p-2 rounded-lg hover:bg-secondary transition-colors">
                      <Image src={product.images[0].src} alt={product.name} width={80} height={80} className="rounded-md" data-ai-hint={product.images[0].hint} />
                      <div>
                        <p className="font-semibold group-hover:underline">{product.name}</p>
                        <p className="text-sm text-muted-foreground">{product.category}</p>
                        <p className="text-sm font-medium">${product.price.toFixed(2)}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* Philosophy Section */}
       <section className="bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 py-16 lg:py-24">
            <div className="md:w-1/2">
              <Image
                src="https://placehold.co/600x600.png"
                alt="Natural ingredients like leaves and flowers for beauty products"
                width={600}
                height={600}
                className="rounded-lg shadow-xl"
                data-ai-hint="natural ingredients"
              />
            </div>
            <div className="md:w-1/2">
              <Badge variant="outline" className="mb-4">Our Philosophy</Badge>
              <h2 className="text-3xl md:text-4xl font-headline mb-4">Conscious Beauty for the Modern Age</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We bridge the gap between luxurious and responsible. Our formulas are crafted with ethically sourced botanicals and backed by science to deliver visible results without compromise.
              </p>
              <Button asChild variant="link" className="p-0 h-auto text-base">
                <Link href="#">Learn Our Story <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Social Feed Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-headline mb-4">Join Our Community</h2>
            <p className="text-muted-foreground mb-8">Follow us @lumineuxbeauty and share your looks with #LumineuxGlow</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
              {socialImages.map((img, i) => (
                <Link href="#" key={i} className="relative aspect-square group overflow-hidden rounded-lg">
                    <Image src={img} alt={`User generated content post ${i+1}`} fill className="object-cover" data-ai-hint={socialImageHints[i]} />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Instagram className="h-8 w-8 text-white" />
                    </div>
                </Link>
              ))}
            </div>
        </div>
      </section>

    </div>
  );
}
