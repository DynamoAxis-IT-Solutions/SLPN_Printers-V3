import { Twitter, Facebook, Instagram } from "lucide-react";
import { Logo } from "./logo";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card border-t">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Logo />
            <p className="text-muted-foreground">Your one-stop shop for all printing needs.</p>
          </div>
          <div className="grid gap-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link href="#services" className="text-muted-foreground hover:text-foreground">Services</Link>
              <Link href="#portfolio" className="text-muted-foreground hover:text-foreground">Portfolio</Link>
              <Link href="#quote" className="text-muted-foreground hover:text-foreground">Get a Quote</Link>
              <Link href="#contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
            </nav>
          </div>
          <div className="grid gap-4">
            <h4 className="font-semibold">Connect With Us</h4>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground"><Twitter /></Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground"><Facebook /></Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground"><Instagram /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} SLPN Printers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
