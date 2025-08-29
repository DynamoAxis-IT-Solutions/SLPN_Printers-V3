'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";

const carouselItems = [
  {
    image: "/slider/img-1.webp",
    alt: "Assortment of printed materials",
  },
  {
    image: "/slider/img-2.webp",
    alt: "Close-up of a high-quality print",
  },
  {
    image: "/slider/img-20.webp",
    alt: "Printing press in action",
  },
  {
    image: "/slider/img-21.webp",
    alt: "Colorful print design",
  },
  {
    image: "/slider/img-22.webp",
    alt: "Finished print products",
  },
];

export function Hero() {
  return (
    <section className="relative w-full h-[calc(100vh-120px)] min-h-[500px] md:min-h-[600px] text-white">
      <Carousel
        className="w-full h-full"
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: true,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-full">
          {carouselItems.map((item, index) => (
           <CarouselItem key={index} className="h-full">
           <div className="relative w-full h-full min-h-[500px]">
             <Image
               src={item.image}
               alt={item.alt}
               fill
               className="object-cover"
               priority={index === 0}
             />
             <div className="absolute inset-0 bg-black/60" />
           </div>
         </CarouselItem>         
          ))}
        </CarouselContent>
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-start max-w-2xl text-left space-y-6">
                    <h1 className="animate-fade-in-up text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
                        Let's be Bold with <br /> Print for <span className="text-primary">SLPN Printers</span>
                    </h1>
                    <p className="animate-fade-in-up max-w-xl text-lg md:text-xl text-white/90" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
                        High-quality offset printing solutions tailored to elevate your business. From flyers and brochures to packaging and large-format prints — we deliver precision, consistency, and vibrant results.
                    </p>
                    <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
                        <Button asChild size="lg" className="rounded-full bg-primary px-8 py-6 text-lg text-primary-foreground hover:bg-primary/90">
                            <Link href="#quote">Make Quotation</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="rounded-full border-2 border-white bg-transparent px-8 py-6 text-lg text-white hover:bg-white hover:text-black">
                            <Link href="#about">Know More</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-4">
                <CarouselPrevious className="relative -left-4 static translate-y-0 bg-white/20 hover:bg-white/30 text-white border-0" />
                <CarouselNext className="relative -right-4 static translate-y-0 bg-white/20 hover:bg-white/30 text-white border-0" />
            </div>
        </div>
      </Carousel>
    </section>
  );
}
