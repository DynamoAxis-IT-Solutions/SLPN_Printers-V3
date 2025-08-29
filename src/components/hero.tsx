'use client';

import Image from 'next/image';
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
    title: "High-Quality Business Cards",
    description: "Make a lasting impression with our premium business cards.",
    image: "https://picsum.photos/1200/600?random=1",
    alt: "Business Cards",
    hint: "business card",
  },
  {
    title: "Vibrant Flyers & Brochures",
    description: "Promote your business with eye-catching flyers and brochures.",
    image: "https://picsum.photos/1200/600?random=2",
    alt: "Flyers and Brochures",
    hint: "flyer brochure",
  },
  {
    title: "Large Format Banners",
    description: "Get your message seen with our durable, high-resolution banners.",
    image: "https://picsum.photos/1200/600?random=3",
    alt: "Banners",
    hint: "banner sign",
  },
];

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <Carousel 
          className="w-full"
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
          <CarouselContent>
            {carouselItems.map((item, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    data-ai-hint={item.hint}
                  />
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                    <h1 className="animate-fade-in-up text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
                      {item.title}
                    </h1>
                    <p className="animate-fade-in-up mt-4 max-w-2xl text-lg md:text-xl" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:inline-flex" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:inline-flex" />
        </Carousel>
      </div>
    </section>
  );
}
