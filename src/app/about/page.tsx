
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Image from "next/image";
import placeholders from "@/app/lib/placeholder-images.json";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1 pt-24">
        {/* Page Header */}
        <section className="relative w-full py-24 bg-gray-50 border-b">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
              About SLPN Printers
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
              Precision, Quality, and Innovation in every print since 2013.
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
                <p className="text-lg text-muted-foreground text-justify">
                  SLPN Printers is a trusted leader in printing
                  and packaging, serving both local and
                  international markets. With a strong focus
                  on premium quality and exceptional
                  customer service, we deliver the best
                  value for your investment. Our highly
                  trained and experienced team ensures
                  every project is handled with precision,
                  efficiency, and on-time delivery - helping
                  your brand stand out with unmatched
                  print excellence.
                </p>
                <p className="text-lg text-muted-foreground text-justify">
                  We specialize in offset and digital printing, packaging solutions, and large-format signage. Our team of experienced designers and technicians work tirelessly to ensure that every project meets our rigorous standards for color accuracy and finish.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div>
                    <h4 className="text-2xl font-bold text-primary">13+</h4>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Years Experience</p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-primary">1000+</h4>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Projects Completed</p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-white flex items-center justify-center p-8 border">
                <Image
                  src="/logo2.webp"
                  alt="SLPN Printers Logo"
                  width={400}
                  height={200}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Leadership & Director's Message */}
        <section className="w-full py-20 bg-gray-50/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Director Section */}
              <div className="grid gap-12 lg:grid-cols-5 items-center mb-24">
                <div className="lg:col-span-2">
                  <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                    <Image
                      src={placeholders.teamSupun.url}
                      alt={placeholders.teamSupun.alt}
                      fill
                      className="object-cover"
                      data-ai-hint={placeholders.teamSupun.hint}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://picsum.photos/seed/director-supun/600/600`;
                        target.onerror = null;
                      }}
                    />
                  </div>
                </div>
                <div className="lg:col-span-3 space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">Message from our Director</h2>
                    <div className="w-20 h-1 bg-primary rounded-full" />
                  </div>
                  <div className="relative">
                    <span className="absolute -top-6 -left-4 text-8xl text-primary/10 font-serif leading-none select-none">"</span>
                    <p className="text-xl text-muted-foreground italic leading-relaxed relative z-10 text-justify">
                      At SLPN Printers, our journey has always been defined by a simple yet powerful goal: to provide world-class printing solutions that help our clients' businesses flourish. We understand that every piece of print carries the weight of your brand's reputation, and that is why we never compromise on precision or quality. Our team is dedicated to pushing the boundaries of what's possible in printing technology to deliver excellence, every single time.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-foreground">Supun</h4>
                    <p className="text-primary font-semibold tracking-wide uppercase text-sm">Director</p>
                  </div>
                </div>
              </div>

              {/* Other Team Members */}
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl text-foreground">Our Leadership Team</h3>
                <p className="text-muted-foreground mt-2">The experts behind our quality and operations.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 justify-center max-w-3xl mx-auto">
                {/* Sudanga */}
                <div className="flex flex-col items-center text-center space-y-6 group">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={placeholders.teamSudanga.url}
                      alt={placeholders.teamSudanga.alt}
                      fill
                      className="object-cover"
                      data-ai-hint={placeholders.teamSudanga.hint}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://picsum.photos/seed/team-sudanga/400/400`;
                        target.onerror = null;
                      }}
                    />
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-xl font-bold text-foreground">Sudanga</h5>
                    <p className="text-primary font-medium text-sm tracking-widest uppercase">Head of Services</p>
                  </div>
                </div>
                {/* Jayathilaka */}
                <div className="flex flex-col items-center text-center space-y-6 group">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={placeholders.teamJayathilaka.url}
                      alt={placeholders.teamJayathilaka.alt}
                      fill
                      className="object-cover"
                      data-ai-hint={placeholders.teamJayathilaka.hint}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://picsum.photos/seed/team-jayathilaka/400/400`;
                        target.onerror = null;
                      }}
                    />
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-xl font-bold text-foreground">Jayathilaka</h5>
                    <p className="text-primary font-medium text-sm tracking-widest uppercase">Head of Operations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="w-full py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="p-8 bg-gray-50 rounded-xl shadow-sm border transition-all hover:shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
                <p className="text-muted-foreground text-justify leading-relaxed">
                  Our mission is to empower individuals and
                  businesses to realize their greatest potential
                  via the power of print by upholding a strong
                  commitment to quality.
                </p>
              </div>
              <div className="p-8 bg-gray-50 rounded-xl shadow-sm border transition-all hover:shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
                <p className="text-muted-foreground text-justify leading-relaxed">
                  To succeed in the way in printing technology
                  development, promoting creative thinking and
                  effortless integration throughout every print.
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
