'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Paintbrush, FileText, Megaphone, Box, Layers, BookOpen } from "lucide-react";

const services = [
  {
    icon: <Paintbrush className="h-12 w-12 text-primary" />,
    title: "Graphic Design",
    description: "Creative designs that capture your brand's essence, from logos to full branding packages.",
  },
  {
    icon: <FileText className="h-12 w-12 text-primary" />,
    title: "Business Cards",
    description: "Premium quality business cards with various finishes to make a strong first impression.",
  },
  {
    icon: <Megaphone className="h-12 w-12 text-primary" />,
    title: "Marketing Materials",
    description: "High-impact flyers, brochures, and posters to effectively promote your business.",
  },
  {
    icon: <Box className="h-12 w-12 text-primary" />,
    title: "Packaging",
    description: "Custom packaging solutions that protect your products and delight your customers.",
  },
  {
    icon: <Layers className="h-12 w-12 text-primary" />,
    title: "Banners & Signs",
    description: "Durable and vibrant large-format printing for indoor and outdoor use.",
  },
  {
    icon: <BookOpen className="h-12 w-12 text-primary" />,
    title: "Booklets & Catalogs",
    description: "Professionally printed and bound booklets, catalogs, and magazines.",
  },
];

export function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-[]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a wide range of printing services to meet your needs.
            </p>
          </div>
        </div>
        <div className="grid justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 transition-transform transform-gpu hover:-translate-y-2 hover:shadow-xl bg-transparent border-border">
              <CardHeader className="p-0">
                {service.icon}
                <CardTitle className="mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-2">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
