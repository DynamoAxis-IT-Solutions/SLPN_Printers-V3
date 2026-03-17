'use client';
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const portfolioImages = [
  { url: "/portfolio/1.webp", alt: "Printing Project 1", hint: "print project" },
  { url: "/portfolio/2.webp", alt: "Printing Project 2", hint: "packaging project" },
  { url: "/portfolio/3.webp", alt: "Printing Project 3", hint: "offset project" },
  { url: "/portfolio/4.webp", alt: "Printing Project 4", hint: "branding project" },
  { url: "/portfolio/5.webp", alt: "Printing Project 5", hint: "stationery project" },
  { url: "/portfolio/6.webp", alt: "Printing Project 6", hint: "marketing project" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">Our Portfolio</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              A glimpse into our world of quality printing and design.
            </p>
          </div>
        </div>
        <div className="grid justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
          {portfolioImages.map((item, index) => (
            <Card key={index} className="overflow-hidden group bg-white border border-gray-100 shadow-sm rounded-xl transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={item.url}
                    alt={item.alt}
                    fill
                    className="object-contain p-0 transition-transform duration-500 scale-105 group-hover:scale-125"
                    data-ai-hint={item.hint}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://picsum.photos/seed/slpn-portfolio-${index}/600/450`;
                      target.onerror = null;
                    }}
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
