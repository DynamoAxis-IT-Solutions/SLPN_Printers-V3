'use client';

import { useState, useEffect } from "react";

const clientLogos = [
  "/companylogo/logo1.png",
  "/companylogo/logo2.png",
  "/companylogo/logo3.png",
  "/companylogo/logo4.png",
  "/companylogo/logo5.png",
  "/companylogo/logo6.png",
  "/companylogo/logo7.png",
  "/companylogo/logo8.png",
];

export function Clients() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <section className="w-full py-16 bg-gray-50 overflow-hidden">
        <div className="container px-4 text-center mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
            Our Valued Clients
          </h2>
          <div className="mt-12 h-24 flex items-center justify-center">
            <div className="animate-pulse bg-gray-200 w-full max-w-4xl h-full rounded-lg" />
          </div>
        </div>
      </section>
    );
  }

  // Duplicate the list multiple times for a truly seamless infinite scroll
  const scrollLogos = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="w-full py-16 bg-gray-50 overflow-hidden">
      <div className="container px-4 md:px-6 mb-12 text-center mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
          Our Valued Clients
        </h2>
        <p className="mt-4 text-muted-foreground md:text-lg max-w-2xl mx-auto">
          Trusted by businesses locally and internationally for high-quality printing solutions.
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Fade masks for the edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10" />

        <div className="flex animate-scroll whitespace-nowrap w-max py-4">
          {scrollLogos.map((logo, index) => (
            <div
              key={index}
              className="flex shrink-0 items-center justify-center px-10 w-48 h-24 transition-all duration-300 group"
            >
              <div className="relative w-full h-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                <img
                  src={logo}
                  alt={`Client Logo ${(index % clientLogos.length) + 1}`}
                  className="max-w-full max-h-full object-contain pointer-events-none"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://placehold.co/200x100?text=Client+${(index % clientLogos.length) + 1}`;
                    target.onerror = null; // Prevent infinite loop
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
