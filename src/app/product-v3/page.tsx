
import { products } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Star, Truck, ShieldCheck, Leaf } from 'lucide-react';
import ProductImageGallery from '@/components/product/product-image-gallery';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function ProductPageV3() {
  const product = products[2]; // Using third product

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
       <div className="text-center mb-8">
        <h2 className="text-2xl font-headline text-muted-foreground">Third Layout</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
        <ProductImageGallery images={product.images} />
        
        <div className="flex flex-col">
          <Badge variant="secondary" className="w-fit mb-2">{product.category}</Badge>
          <h1 className="text-3xl lg:text-4xl font-bold font-headline">{product.name} (V3)</h1>
          <p className="text-4xl font-headline mt-4">${product.price.toFixed(2)}</p>

           <div className="flex items-center gap-2 mt-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-primary fill-current" />
              ))}
            </div>
            <span className="text-muted-foreground text-sm">(123 reviews)</span>
          </div>
          
          <Separator className="my-6" />

          <p className="text-base text-muted-foreground leading-relaxed">
            {product.description}
          </p>

          <div className="mt-8">
            <Button size="lg" className="w-full">Add to Bag</Button>
          </div>

          <div className="mt-8 space-y-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-primary" />
                <span>Free shipping on orders over $50</span>
            </div>
            <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span>Dermatologist tested & approved</span>
            </div>
             <div className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-primary" />
                <span>Clean, Vegan & Cruelty-Free</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
