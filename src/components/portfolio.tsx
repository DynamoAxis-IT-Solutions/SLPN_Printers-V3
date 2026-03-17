
'use client';
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import placeholders from "@/app/lib/placeholder-images.json";

const portfolioItems = [
  placeholders.portfolio1,
  placeholders.portfolio2,
  placeholders.portfolio3,
  placeholders.portfolio4,
  placeholders.portfolio5,
  placeholders.portfolio6,
];

export function Portfolio() {
  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">Our Portfolio</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A glimpse into our world of quality printing and design.
            </p>
          </div>
        </div>
        <div className="grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
          {portfolioItems.map((item, index) => (
            <Card key={index} className="overflow-hidden group bg-transparent border rounded-lg">
              <CardContent className="p-0">
                <Image
                  src={item.url}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={item.hint}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
