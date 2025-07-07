import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Lock } from "lucide-react";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { products } from "@/lib/data";

export default function PaymentPage() {
    const cartItems = products.slice(0, 2);
    const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
    const shipping = 5.0;
    const total = subtotal + shipping;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left side: Payment Info */}
        <div className="lg:pr-12">
          <h1 className="text-3xl font-bold font-headline mb-6">Payment</h1>
          
          <div className="space-y-6">
            <div className="bg-secondary p-4 rounded-lg text-sm text-secondary-foreground">
                <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                        <Lock className="w-5 h-5"/>
                    </div>
                    <p>This is a secure payment. Your details are protected and will not be shared with third parties.</p>
                </div>
            </div>

            <div>
                <h2 className="text-xl font-semibold font-headline mb-4 flex items-center gap-2"><CreditCard/> Credit Card</h2>
                 <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="card-number">Card Number</Label>
                        <Input id="card-number" placeholder="0000 0000 0000 0000" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="card-name">Name on Card</Label>
                        <Input id="card-name" placeholder="John Doe" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="expiry">Expiration (MM/YY)</Label>
                            <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="cvc">CVC</Label>
                            <Input id="cvc" placeholder="123" />
                        </div>
                    </div>
                </div>
            </div>
             <div>
                <h2 className="text-xl font-semibold font-headline mb-4">Billing Address</h2>
                 <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="same-as-shipping" defaultChecked />
                        <Label htmlFor="same-as-shipping">Same as shipping address</Label>
                    </div>
                </div>
             </div>
          </div>
          <div className="mt-8">
            <Button size="lg" className="w-full">
              Pay ${total.toFixed(2)}
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
