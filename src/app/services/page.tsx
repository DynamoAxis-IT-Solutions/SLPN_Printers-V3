
'use client';

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Image from "next/image";
import placeholders from "@/app/lib/placeholder-images.json";
import { CheckCircle2 } from "lucide-react";

const serviceSections = [
  {
    title: "Business & Corporate Printing",
    items: [
      "Business cards",
      "Letterheads and envelopes",
      "Company profiles and brochures",
      "Presentation folders",
      "Annual reports and corporate catalogs",
      "Invoice books and carbonless (NCR) forms"
    ],
    image: placeholders.serviceBusiness,
    color: "bg-[#E91E63]" // Pink/Magenta from image
  },
  {
    title: "Marketing & Promotional Materials",
    items: [
      "Flyers, leaflets, and handbills",
      "Posters (small to large format)",
      "Product catalogs and lookbooks",
      "Coupons and vouchers",
      "Direct mailers and postcards",
      "Stickers and labels"
    ],
    image: placeholders.serviceMarketing,
    color: "bg-[#03A9F4]" // Light Blue from image
  },
  {
    title: "Publications & Stationery",
    items: [
      "Magazines and newsletters",
      "Books and booklets",
      "Calendars and planners",
      "Notepads and diaries",
      "Certificates and greeting cards"
    ],
    image: placeholders.servicePub,
    color: "bg-[#1A237E]" // Dark Blue from image
  },
  {
    title: "Packaging Printing",
    items: [
      "Box sleeves and product packaging",
      "Cartons and inserts",
      "Hang tags and product labels",
      "Custom packaging designs for retail items"
    ],
    image: placeholders.servicePkg,
    color: "bg-[#673AB7]" // Purple from image
  },
  {
    title: "Value-Added Finishes",
    items: [
      "Gloss, matte, or spot UV coating",
      "Embossing / debossing",
      "Foil stamping (colors)",
      "Die-cutting for unique shapes",
      "Laminations"
    ],
    image: placeholders.serviceFinish,
    color: "bg-[#FF5722]" // Orange from image
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1 pt-24">
        {/* Page Header */}
        <section className="relative w-full py-20 bg-gray-50 border-b">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
              Our Services
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
              Comprehensive printing solutions tailored to your business needs. 
              Quality and precision in every detail.
            </p>
          </div>
        </section>

        {/* Services Content */}
        <section className="w-full py-12 md:py-24">
          <div className="container mx-auto px-4 space-y-24">
            {serviceSections.map((section, index) => (
              <div 
                key={index} 
                className={`grid gap-12 lg:grid-cols-2 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Text Side */}
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="space-y-4">
                    <div className={`w-12 h-1 rounded-full ${section.color}`} />
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
                      {section.title}
                    </h2>
                  </div>
                  <ul className="grid gap-4">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3 text-lg text-muted-foreground">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image Side */}
                <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gray-100 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Image
                    src={section.image.url}
                    alt={section.image.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    data-ai-hint={section.image.hint}
                  />
                  {/* Decorative Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Ready to start your next project?
            </h2>
            <p className="max-w-xl mx-auto text-primary-foreground/90 text-lg">
              Get a personalized quote for any of our services today. Our team is ready to help you bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/#quote" 
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-lg font-medium text-primary hover:bg-gray-100 transition-colors"
              >
                Request a Quote
              </a>
              <a 
                href="/#contact" 
                className="inline-flex h-12 items-center justify-center rounded-full border-2 border-white px-8 text-lg font-medium hover:bg-white/10 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
