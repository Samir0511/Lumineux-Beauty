import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star } from 'lucide-react';
import { products, categories, testimonials } from '@/lib/data';
import { Logo } from '@/components/icons';

export default function Home() {
  const bestsellers = products.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
        <Image
          src="https://placehold.co/1800x1000.png"
          alt="Woman applying skincare product"
          fill
          className="object-cover brightness-50"
          data-ai-hint="skincare model"
          priority
        />
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline mb-4 animate-fade-in-down">
            Radiance, Redefined.
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in-up">
            Discover our collection of luxurious, science-backed skincare and makeup essentials.
          </p>
          <Button asChild size="lg" className="animate-fade-in">
            <Link href="/products/luminous-glow-serum">Shop Now</Link>
          </Button>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline text-center mb-12">Our Best Sellers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestsellers.map((product) => (
              <Card key={product.id} className="overflow-hidden group border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="p-0">
                  <Link href={`/products/${product.slug}`}>
                    <Image
                      src={product.images[0].src}
                      alt={product.images[0].alt}
                      width={400}
                      height={400}
                      className="w-full h-auto object-cover aspect-square group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint={product.images[0].hint}
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
                  <Button asChild variant="outline">
                    <Link href={`/products/${product.slug}`}>View</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Brand Philosophy */}
      <section className="bg-secondary py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center max-w-4xl">
           <div className="flex justify-center mb-6">
             <Logo className="h-16 w-16" />
           </div>
          <h2 className="text-3xl md:text-4xl font-headline mb-4">Pure Ingredients, Powerful Results</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Lumineux, we believe in the harmony of nature and science. Our philosophy is rooted in creating products that are as effective as they are gentle, using ethically sourced, high-performance ingredients to bring out your natural radiance. We are committed to clean beauty, transparency, and sustainable practices.
          </p>
        </div>
      </section>

      {/* Shop by Category Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.slice(0, 3).map((category) => (
              <Link key={category.name} href="#" className="block group relative overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={500}
                    height={700}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    data-ai-hint={category.hint}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-headline font-bold">{category.name}</h3>
                  </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Ingredient Feature Section */}
      <section className="bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 py-16 lg:py-24">
            <div className="md:w-1/2">
              <Image
                src="https://placehold.co/600x600.png"
                alt="Hyaluronic Acid structure"
                width={600}
                height={600}
                className="rounded-lg shadow-xl"
                data-ai-hint="hyaluronic acid"
              />
            </div>
            <div className="md:w-1/2">
              <Badge variant="outline" className="mb-4">Key Ingredient</Badge>
              <h2 className="text-3xl md:text-4xl font-headline mb-4">The Power of Hyaluronic Acid</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A hero in hydration, Hyaluronic Acid can hold up to 1000 times its weight in water. We use a multi-molecular weight complex to hydrate every layer of your skin, leaving it plump, dewy, and visibly refreshed.
              </p>
              <Button asChild variant="link" className="p-0 h-auto text-base">
                <Link href="/journal/ingredient-spotlight-hyaluronic-acid">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline text-center mb-12">What Our Customers Say</h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="p-1">
                    <Card className="h-full flex flex-col justify-between">
                      <CardContent className="p-6">
                        <div className="flex mb-2">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'text-primary fill-current' : 'text-muted'}`} />
                            ))}
                        </div>
                        <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                      </CardContent>
                      <CardFooter className="p-6 pt-0">
                        <p className="font-semibold">{testimonial.name}</p>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

    </div>
  );
}
