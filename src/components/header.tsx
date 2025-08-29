'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Mail, Phone } from 'lucide-react';
import { Logo } from './logo';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full text-white transition-all duration-300',
        scrolled ? 'bg-[#1C1C1C] shadow-md' : 'bg-transparent'
      )}
    >
      {/* Top Bar */}
      <div className={cn('transition-all duration-300', scrolled ? 'bg-[#333333]' : 'bg-black/20')}>
        <div className="container mx-auto flex h-10 items-center justify-between px-4">
          <div className="flex items-center gap-6 text-sm">
            <a href="tel:011-2194819" className="flex items-center gap-2 hover:text-primary">
              <Phone size={16} />
              <span>011-2194819</span>
            </a>
            <a href="mailto:slpn.pr@gmail.com" className="flex items-center gap-2 hover:text-primary">
              <Mail size={16} />
              <span>slpn.pr@gmail.com</span>
            </a>
          </div>
          <Button asChild className="hidden h-8 rounded-full bg-primary px-6 text-sm text-primary-foreground hover:bg-primary/90 md:block">
            <Link href="#quote">Make Quotation</Link>
          </Button>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto flex items-center justify-between px-4 py-1 h-20">
        <div className="flex items-center">
            <Logo className="h-12 w-40" />
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-[#1C1C1C] text-white border-r border-gray-700">
              <div className="flex flex-col gap-8 p-6">
                <Logo />
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                 <Button asChild className="rounded-full bg-primary px-6 text-sm text-primary-foreground hover:bg-primary/90">
                    <Link href="#quote">Make Quotation</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
