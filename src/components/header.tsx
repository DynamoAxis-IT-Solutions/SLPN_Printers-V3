
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Mail, Phone } from 'lucide-react';
import { Logo } from './logo';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/#portfolio', label: 'Portfolio' },
  { href: '/#contact', label: 'Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Determine if header should be transparent
  // Only transparent on homepage when not scrolled
  const isTransparent = isHome && !scrolled;

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isTransparent ? 'bg-transparent' : 'bg-white shadow-md'
      )}
    >
      {/* Top Bar */}
      <div className={cn('transition-all duration-300', isTransparent ? 'bg-black/20' : 'bg-gray-100 border-b')}>
        <div className="container mx-auto flex h-10 items-center justify-between px-4">
          <div className={cn('flex items-center gap-6 text-sm', isTransparent ? 'text-white' : 'text-gray-600')}>
            <a href="tel:011-2194819" className="flex items-center gap-2 hover:text-primary">
              <Phone size={14} />
              <span>011-2194819</span>
            </a>
            <a href="mailto:slpn.pr@gmail.com" className="flex items-center gap-2 hover:text-primary">
              <Mail size={14} />
              <span>slpn.pr@gmail.com</span>
            </a>
          </div>
          <Button asChild className={cn("hidden h-8 rounded-full px-6 text-sm md:block", isTransparent ? "bg-white text-black hover:bg-gray-200" : "bg-primary text-white hover:bg-primary/90")}>
            <Link href="/#quote">Make Quotation</Link>
          </Button>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto flex items-center justify-between px-4 py-1 h-16">
        <div className="flex items-center">
            <Logo className={cn("h-12 w-40 transition-all", isTransparent && "brightness-0 invert")} />
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-medium transition-colors", 
                isTransparent ? 'text-white hover:text-primary' : 'text-gray-800 hover:text-primary'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn(isTransparent ? 'text-white' : 'text-gray-800')}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-white text-gray-800 border-r border-gray-200">
              <div className="flex flex-col gap-8 p-6">
                <Logo />
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-gray-600 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                 <Button asChild className="rounded-full bg-primary px-6 text-sm text-primary-foreground hover:bg-primary/90">
                    <Link href="/#quote" onClick={() => setIsOpen(false)}>Make Quotation</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
