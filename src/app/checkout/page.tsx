import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { products } from "@/lib/data";

export default function CheckoutPage() {
  const cartItems = products.slice(0, 2);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const shipping = 5.0;
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left side: Shipping Info */}
        <div className="lg:pr-12">
          <h1 className="text-3xl font-bold font-headline mb-6">Shipping Information</h1>
          
          <div className="space-y-6">
            <div>
                <h2 className="text-xl font-semibold font-headline mb-4">Contact Information</h2>
                 <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="you@example.com" />
                    </div>
                </div>
            </div>

            <div>
                 <h2 className="text-xl font-semibold font-headline mb-4">Shipping Address</h2>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Doe" />
                    </div>
                    <div className="sm:col-span-2 space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" placeholder="123 Luminous Lane" />
                    </div>
                    <div className="sm:col-span-2 space-y-2">
                        <Label htmlFor="apartment">Apartment, suite, etc. (optional)</Label>
                        <Input id="apartment" placeholder="Apt. 5" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="Glow City" />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                         <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a country" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="us">United States</SelectItem>
                                <SelectItem value="ca">Canada</SelectItem>
                                <SelectItem value="uk">United Kingdom</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="state">State / Province</Label>
                        <Input id="state" placeholder="California" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="zip">ZIP / Postal code</Label>
                        <Input id="zip" placeholder="90210" />
                    </div>
                </div>
            </div>
          </div>
          <div className="mt-8">
            <Button asChild size="lg" className="w-full">
                <Link href="/checkout/payment">Continue to Payment</Link>
            </Button>
          </div>
        </div>

        {/* Right side: Order Summary */}
        <div className="bg-secondary p-8 rounded-lg">
          <h2 className="text-2xl font-bold font-headline mb-6">Order Summary</h2>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 rounded-md overflow-hidden">
                    <Image
                      src={item.images[0].src}
                      alt={item.images[0].alt}
                      fill
                      className="object-cover"
                      data-ai-hint={item.images[0].hint}
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-muted-foreground">Quantity: 1</p>
                  </div>
                </div>
                <p className="font-medium">${item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
          <Separator className="my-6" />
          <div className="space-y-2">
            <div className="flex justify-between">
              <p className="text-muted-foreground">Subtotal</p>
              <p className="font-medium">${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-muted-foreground">Shipping</p>
              <p className="font-medium">${shipping.toFixed(2)}</p>
            </div>
          </div>
          <Separator className="my-6" />
          <div className="flex justify-between font-bold text-lg">
            <p>Total</p>
            <p>${total.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
