"use client";

import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from 'next/image';

export function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Prevent popup on subsequent visits
    if (sessionStorage.getItem('newsletter-seen')) {
      return;
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem('newsletter-seen', 'true');
    }, 5000); // 5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden">
        <div className="relative h-48 w-full">
            <Image
                src="https://placehold.co/600x400.png"
                alt="Skincare products on a shelf"
                layout="fill"
                objectFit="cover"
                data-ai-hint="skincare products"
            />
        </div>
        <DialogHeader className="p-6">
          <DialogTitle className="text-2xl font-headline text-center">Join the Club</DialogTitle>
          <DialogDescription className="text-center">
            Subscribe to our newsletter and get 15% off your first order.
            Be the first to know about new arrivals and special offers.
          </DialogDescription>
        </DialogHeader>
        <div className="p-6 pt-0">
          <form className="flex w-full max-w-sm items-center space-x-2 mx-auto">
            <Input type="email" placeholder="Email" />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
