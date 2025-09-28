import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Portfolio } from "@/components/portfolio";
import { Quote } from "@/components/quote";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-300">
      <Header />
      <main className="flex-1">
        {/* Hero stays full width with its own background */}
        <Hero />

        {/* Services */}
        <section className="w-full py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <Services />
          </div>
        </section>

        {/* Portfolio */}
        <section className="w-full py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <Portfolio />
          </div>
        </section>

        {/* Quote */}
        <section className="w-full py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <Quote />
          </div>
        </section>

        {/* Contact */}
        <section className="w-full py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
