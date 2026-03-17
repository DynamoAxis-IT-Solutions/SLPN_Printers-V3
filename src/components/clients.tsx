'use client';

import Image from "next/image";

// Replace these with your actual filenames in public/companylogo
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

// Duplicate the list to ensure seamless infinite scrolling
const scrollLogos = [...clientLogos, ...clientLogos];

export function Clients() {
  return (
    <section className="w-full py-16 bg-gray-50 overflow-hidden">
      <div className="container px-4 md:px-6 mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
          Our Valued Clients
        </h2>
        <p className="mt-4 text-muted-foreground md:text-lg max-w-2xl mx-auto">
          Trusted by businesses locally and internationally for high-quality printing solutions.
        </p>
      </div>

      <div className="relative flex w-full">
        <div className="flex animate-scroll whitespace-nowrap">
          {scrollLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-12 w-40 h-24 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <div className="relative w-full h-full">
                <Image
                  src={logo}
                  alt={`Client Logo ${index + 1}`}
                  fill
                  className="object-contain"
                  onError={(e) => {
                    // Fallback for missing images during development
                    const target = e.target as HTMLImageElement;
                    target.src = `https://placehold.co/200x100?text=Client+Logo`;
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
