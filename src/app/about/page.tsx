
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="relative w-full py-24 bg-gray-50 border-b">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
              About SLPN Printers
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
              Precision, Quality, and Innovation in every print since 2010.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="w-full py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
                  Our Story
                </h2>
                <p className="text-lg text-muted-foreground">
                  SLPN Printers began with a simple mission: to provide high-quality, professional printing services that help businesses stand out. Over the years, we have grown from a small local shop into a full-service printing partner for companies across the region.
                </p>
                <p className="text-lg text-muted-foreground">
                  We specialize in offset and digital printing, packaging solutions, and large-format signage. Our team of experienced designers and technicians work tirelessly to ensure that every project meets our rigorous standards for color accuracy and finish.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div>
                    <h4 className="text-2xl font-bold text-primary">15+</h4>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Years Experience</p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-primary">5000+</h4>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Projects Completed</p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://picsum.photos/seed/printshop/800/600"
                  alt="SLPN Printers Facility"
                  fill
                  className="object-cover"
                  data-ai-hint="printing facility"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="w-full py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="p-8 bg-white rounded-xl shadow-sm border">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
                <p className="text-muted-foreground">
                  To deliver exceptional printing solutions that exceed customer expectations through innovation, sustainable practices, and unwavering attention to detail.
                </p>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-sm border">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading provider of creative and industrial printing services, recognized for our quality craftsmanship and commitment to client success.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
