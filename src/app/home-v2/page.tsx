
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ArrowRight, ShoppingBag, Truck, ShieldCheck, Gem } from 'lucide-react';
import { products, categories, journalPosts } from '@/lib/data';

export default function HomeV2() {
  const heroSlides = [
    {
      image: "/api/image/skincare-collection",
      hint: "skincare collection",
      title: "New Season, New Skin",
      description: "(Homepage V2) Discover our latest arrivals for a refreshed look.",
      buttonText: "Explore New In",
      href: "#"
    },
    {
      image: "/api/image/makeup-flatlay-2",
      hint: "makeup flatlay",
      title: "20% Off Makeup Essentials",
      description: "Get your glow on with our best-selling makeup. Limited time only.",
      buttonText: "Shop Makeup",
      href: "#"
    }
  ];

  const newArrivals = products.slice(0, 5);
  const featuredCategories = categories.slice(0, 4);

  return (
    <div className="flex flex-col bg-background">
      {/* Hero Carousel Section */}
      <section className="w-full">
        <Carousel
          opts={{ loop: true }}
          className="w-full"
        >
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[70vh] w-full flex items-center justify-center text-center text-white">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover brightness-50"
                    priority={index === 0}
                  />
                  <div className="relative z-10 p-4 max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4 animate-fade-in-down">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl mb-8 animate-fade-in-up">
                      {slide.description}
                    </p>
                    <Button asChild size="lg" className="animate-fade-in">
                      <Link href={slide.href}>{slide.buttonText}</Link>
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
        </Carousel>
      </section>

      {/* Categories Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {featuredCategories.map((category) => (
              <Link key={category.name} href={category.href} className="flex flex-col items-center text-center group">
                <div className="relative w-32 h-32 md:w-48 md:h-48 overflow-hidden rounded-full border-2 border-border group-hover:border-primary transition-all duration-300">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold font-body">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* New Arrivals Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline text-center mb-12">New Arrivals</h2>
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {newArrivals.map((product) => (
                <CarouselItem key={product.id} className="pl-4 md:basis-1/3 lg:basis-1/4">
                  <Card className="h-full overflow-hidden group border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <CardHeader className="p-0">
                      <Link href={`/products/${product.slug}`} className="block aspect-square relative">
                        <Image
                          src={product.images[0].src}
                          alt={product.images[0].alt}
                          fill
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </Link>
                    </CardHeader>
                    <CardContent className="p-4">
                      <CardTitle className="text-lg font-body font-semibold">
                        <Link href={`/products/${product.slug}`}>{product.name}</Link>
                      </CardTitle>
                      <p className="text-muted-foreground text-sm mt-1">{product.category}</p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex justify-between items-center">
                      <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
                      <Button size="icon" variant="outline">
                        <ShoppingBag className="h-5 w-5"/>
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* Featured Collection Section */}
      <section className="relative py-20 lg:py-32 bg-gray-800 text-white">
        <Image
          src="/api/image/abstract-texture"
          alt="Abstract texture background for featured collection"
          fill
          className="object-cover opacity-20"
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-headline mb-4">The Midnight Bloom Collection</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Unveil your skin's nocturnal renewal potential. Powerful botanicals work overnight to repair and rejuvenate.
          </p>
          <Button size="lg" variant="secondary">
            Shop the Collection
          </Button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                    <Truck className="h-10 w-10 mb-4 text-primary"/>
                    <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
                    <p className="text-muted-foreground">On all orders over $50, because you deserve it.</p>
                </div>
                <div className="flex flex-col items-center">
                    <ShieldCheck className="h-10 w-10 mb-4 text-primary"/>
                    <h3 className="text-xl font-semibold mb-2">Quality Promise</h3>
                    <p className="text-muted-foreground">Clean, effective ingredients you can trust.</p>
                </div>
                <div className="flex flex-col items-center">
                    <Gem className="h-10 w-10 mb-4 text-primary"/>
                    <h3 className="text-xl font-semibold mb-2">Exclusive Rewards</h3>
                    <p className="text-muted-foreground">Join our loyalty program for special perks.</p>
                </div>
            </div>
        </div>
      </section>

       {/* From the Journal Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline text-center mb-12">From Our Journal</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {journalPosts.slice(0,3).map((post) => (
              <Link key={post.id} href={`/journal/${post.slug}`} className="block group">
                 <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <CardHeader className="p-0">
                       <div className="aspect-video relative overflow-hidden">
                         <Image
                            src={post.imageUrl}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform"
                         />
                       </div>
                    </CardHeader>
                    <CardContent className="p-6">
                        <h3 className="text-xl font-semibold font-body mb-2">{post.title}</h3>
                        <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                       <span className="text-primary font-semibold text-sm group-hover:underline">Read More <ArrowRight className="inline-block ml-1 h-4 w-4"/></span>
                    </CardFooter>
                 </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

    