'use client';

import { useState, useEffect } from "react";

const clientLogos = [
  "/companylogo/1.webp",
  "/companylogo/2.webp",
  "/companylogo/3.webp",
  "/companylogo/4.webp",
  "/companylogo/5.webp",
  "/companylogo/6.webp",
  "/companylogo/7.webp",
  "/companylogo/8.webp",
  "/companylogo/9.webp",
  "/companylogo/10.webp",
  "/companylogo/11.webp",
  "/companylogo/12.webp",
  "/companylogo/13.webp",
  "/companylogo/14.webp",
];

export function Clients() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <section className="w-full py-16 bg-gray-50 overflow-hidden border-t">
        <div className="container px-4 text-center mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
            Our Valued Clients
          </h2>
          <div className="mt-12 h-32 flex items-center justify-center">
            <div className="animate-pulse bg-gray-200 w-full max-w-6xl h-full rounded-lg" />
          </div>
        </div>
      </section>
    );
  }

  // Duplicate the list multiple times for a seamless infinite scroll
  const scrollLogos = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="w-full py-20 bg-gray-50 overflow-hidden border-t">
      <div className="container px-4 md:px-6 mb-16 text-center mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
          Our Valued Clients
        </h2>
        <p className="mt-4 text-muted-foreground md:text-lg max-w-2xl mx-auto">
          Trusted by businesses locally and internationally for high-quality printing solutions.
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Fade masks for the edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />

        <div className="flex animate-scroll whitespace-nowrap w-max py-8">
          {scrollLogos.map((logo, index) => (
            <div
              key={index}
              className="flex shrink-0 items-center justify-center px-12 w-64 h-32 transition-all duration-300 group"
            >
              <div className="relative w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <img
                  src={logo}
                  alt={`Client Logo ${(index % clientLogos.length) + 1}`}
                  className="max-w-full max-h-full object-contain pointer-events-none transform group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://placehold.co/300x150?text=Client+${(index % clientLogos.length) + 1}`;
                    target.onerror = null; 
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
