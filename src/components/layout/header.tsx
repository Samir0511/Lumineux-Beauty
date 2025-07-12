"use client";

import Link from 'next/link';
import Image from 'next/image';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, ShoppingBag, User } from "lucide-react";
import { cn } from '@/lib/utils';
import { categories } from '@/lib/data';
import { Logo } from '@/components/icons';
import React from 'react';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background text-foreground">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block font-headline">
              Lumineux
            </span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild active={pathname === '/'}>
                   <Link href="/" className={cn(navigationMenuTriggerStyle())}>Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              {categories.map((category) => (
                <NavigationMenuItem key={category.name}>
                  <NavigationMenuTrigger>
                    {category.name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] grid-cols-1 gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <div className="relative h-full w-full min-h-[300px] select-none overflow-hidden rounded-md p-6 no-underline outline-none focus:shadow-md">
                        <Image
                          src={category.image}
                          alt={`Promotional image for ${category.name} category`}
                          fill
                          className="object-cover brightness-75"
                          data-ai-hint={category.hint}
                        />
                      </div>
                      <ul className="flex flex-col gap-2">
                        {category.subcategories.map((item) => (
                          <ListItem
                            key={item.name}
                            title={item.name}
                            href={item.href}
                          >
                            {item.description}
                          </ListItem>
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                 <NavigationMenuLink asChild active={pathname.startsWith('/journal')}>
                  <Link href="/journal" className={cn(navigationMenuTriggerStyle())}>Journal</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
               <NavigationMenuItem>
                <NavigationMenuTrigger>More Pages</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        <ListItem href="/home-v2" title="Home Page v2">
                            A different layout for the homepage.
                        </ListItem>
                        <ListItem href="/home-v3" title="Home Page v3">
                            Another variation of the homepage design.
                        </ListItem>
                        <ListItem href="/product-v2" title="Product Page v2">
                            An alternate product page layout.
                        </ListItem>
                         <ListItem href="/product-v3" title="Product Page v3">
                            A third product page design.
                        </ListItem>
                    </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <Link href="/" className="flex items-center space-x-2 mb-6">
                  <Logo className="h-6 w-6" />
                  <span className="font-bold font-headline">Lumineux</span>
                </Link>
                <nav className="flex flex-col space-y-4">
                  <Link href="/" className="font-semibold">Home</Link>
                  {categories.map((category) => (
                    <div key={category.name}>
                      <h3 className="font-semibold">{category.name}</h3>
                      <div className="flex flex-col space-y-2 mt-2 pl-2">
                        {category.subcategories.map((sub) => (
                          <Link key={sub.name} href={sub.href} className="text-muted-foreground hover:text-foreground">{sub.name}</Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  <Link href="/journal" className="font-semibold">Journal</Link>
                  <div>
                      <h3 className="font-semibold">More Pages</h3>
                      <div className="flex flex-col space-y-2 mt-2 pl-2">
                        <Link href="/home-v2" className="text-muted-foreground hover:text-foreground">Home Page v2</Link>
                        <Link href="/home-v3" className="text-muted-foreground hover:text-foreground">Home Page v3</Link>
                        <Link href="/product-v2" className="text-muted-foreground hover:text-foreground">Product Page v2</Link>
                        <Link href="/product-v3" className="text-muted-foreground hover:text-foreground">Product Page v3</Link>
                      </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          
          <Link href="/" className="flex items-center space-x-2 md:hidden">
            <Logo className="h-6 w-6" />
            <span className="font-bold font-headline">Lumineux</span>
          </Link>

          <nav className="flex items-center">
            <Button asChild variant="ghost" size="icon">
              <Link href="/account">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <Link href="/checkout">
                <ShoppingBag className="h-5 w-5" />
                <span className="sr-only">Shopping Bag</span>
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href || '#'}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
