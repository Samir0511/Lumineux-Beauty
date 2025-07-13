
import { products } from '@/lib/data';
import { Button } from '@/components/ui/shadcn/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/shadcn/accordion';
import { Star } from 'lucide-react';
import ProductImageGallery from '@/components/product/product-image-gallery';

export default function ProductPageV2() {
  const product = products[1]; // Using second product for some variety

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-headline text-muted-foreground">Alternate Layout</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
        <ProductImageGallery images={product.images} />
        
        <div className="flex flex-col">
          <h1 className="text-3xl lg:text-4xl font-bold font-headline">{product.name} (V2)</h1>
          <p className="text-lg text-muted-foreground mt-2">{product.shortDescription}</p>
          
          <div className="flex items-center gap-2 mt-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-primary fill-current" />
              ))}
            </div>
            <span className="text-muted-foreground text-sm">(123 reviews)</span>
          </div>

          <p className="text-4xl font-headline mt-6">${product.price.toFixed(2)}</p>

          <div className="mt-8">
            <Button size="lg" className="w-full">Add to Bag</Button>
          </div>

          <div className="mt-8">
            <Accordion type="single" collapsible defaultValue="description">
              <AccordionItem value="description">
                <AccordionTrigger className="text-lg font-semibold">Description</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  {product.description}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="ingredients">
                <AccordionTrigger className="text-lg font-semibold">Ingredients</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  <ul className="list-disc list-inside space-y-1">
                    {product.ingredients.map(ing => <li key={ing}>{ing}</li>)}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="how-to-use">
                <AccordionTrigger className="text-lg font-semibold">How to Use</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  {product.howToUse}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
