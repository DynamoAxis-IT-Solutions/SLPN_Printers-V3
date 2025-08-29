import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Portfolio } from "@/components/portfolio";
import { Quote } from "@/components/quote";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4">
          <Hero />
          <Services />
          <Portfolio />
          <Quote />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
