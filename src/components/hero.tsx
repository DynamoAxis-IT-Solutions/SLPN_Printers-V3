'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";

const carouselItems = [
  { url: "/slider/1.webp", alt: "SLPN Printers - Quality Offset Printing", hint: "printing press" },
  { url: "/slider/2.webp", alt: "High-end Packaging Solutions", hint: "packaging design" },
  { url: "/slider/3.webp", alt: "Vibrant Marketing Materials", hint: "marketing prints" },
];

export function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      <Carousel
        className="w-full h-full"
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-screen ml-0">
          {carouselItems.map((item, index) => (
           <CarouselItem key={index} className="relative h-screen pl-0">
             <Image
               src={item.url}
               alt={item.alt}
               fill
               className="object-cover"
               priority={index === 0}
               data-ai-hint={item.hint}
               onError={(e) => {
                 const target = e.target as HTMLImageElement;
                 target.src = `https://picsum.photos/seed/slpn-hero-${index}/1920/1080`;
                 target.onerror = null;
               }}
             />
             <div className="absolute inset-0 bg-black/40" />
           </CarouselItem>         
          ))}
        </CarouselContent>
        
        <div className="absolute inset-0 flex items-center justify-center pt-24 pointer-events-none">
            <div className="container px-4 md:px-6 pointer-events-auto">
                <div className="flex flex-col items-start max-w-3xl text-left space-y-6">
                    <h1 className="animate-fade-in-up text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-lg" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
                        Let's be Bold with <br /> Print for <span className="text-primary">SLPN Printers</span>
                    </h1>
                    <p className="animate-fade-in-up max-w-2xl text-lg md:text-xl text-white/90 drop-shadow-md" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
                        High quality offset printing solutions tailored to elevate your business. From flyers and brochures to packaging and large format prints we deliver precision, consistency, and vibrant results.
                    </p>
                    <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 pt-4" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
                        <Button asChild size="lg" className="rounded-full bg-primary px-8 py-6 text-lg text-primary-foreground hover:bg-primary/90 shadow-xl transition-all hover:scale-105">
                            <Link href="#quote">Make Quotation</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="rounded-full border-2 border-white bg-transparent px-8 py-6 text-lg text-white hover:bg-white hover:text-black transition-all hover:scale-105">
                            <Link href="/about">Know More</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
      </Carousel>
    </section>
  );
}
