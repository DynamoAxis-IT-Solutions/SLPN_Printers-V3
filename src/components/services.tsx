
'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Paintbrush, IdCard, Megaphone, Package, Layers, BookOpen } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Paintbrush className="h-12 w-12 text-primary" />,
    title: "Graphic Design",
    description: "Creative designs that capture your brand's essence, from logos to full branding packages.",
    href: "/services#business-corporate"
  },
  {
    icon: <IdCard className="h-12 w-12 text-primary" />,
    title: "Business Cards",
    description: "Premium quality business cards with various finishes to make a strong first impression.",
    href: "/services#business-corporate"
  },
  {
    icon: <Megaphone className="h-12 w-12 text-primary" />,
    title: "Marketing Materials",
    description: "High-impact flyers, brochures, and posters to effectively promote your business.",
    href: "/services#marketing-promotional"
  },
  {
    icon: <Package className="h-12 w-12 text-primary" />,
    title: "Packaging",
    description: "Custom packaging solutions that protect your products and delight your customers.",
    href: "/services#packaging-printing"
  },
  {
    icon: <Layers className="h-12 w-12 text-primary" />,
    title: "Banners & Signs",
    description: "Durable and vibrant large-format printing for indoor and outdoor use.",
    href: "/services#marketing-promotional"
  },
  {
    icon: <BookOpen className="h-12 w-12 text-primary" />,
    title: "Booklets & Catalogs",
    description: "Professionally printed and bound booklets, catalogs, and magazines.",
    href: "/services#publications-stationery"
  },
];

export function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">Our Services</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              We offer a wide range of printing services to meet your needs.
            </p>
          </div>
        </div>
        <div className="grid justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
          {services.map((service, index) => (
            <Link key={index} href={service.href} className="group outline-none">
              <Card className="flex flex-col h-full items-center text-center p-8 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl bg-white border border-gray-100 cursor-pointer">
                <CardHeader className="p-0 flex flex-col items-center">
                  <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-4">
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
