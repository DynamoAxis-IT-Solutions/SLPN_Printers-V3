
import { Twitter, Facebook, Instagram } from "lucide-react";
import { Logo } from "./logo";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-gray-50 border-t">
      <div className="mx-auto w-full max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Left: Logo + tagline */}
          <div className="space-y-4">
            <Logo />
            <p className="text-muted-foreground">
              Your one-stop shop for all printing needs. Precision and quality in every project.
            </p>
          </div>
          {/* Middle: Quick Links */}
          <div className="grid gap-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="text-muted-foreground hover:text-primary">
                About Us
              </Link>
              <Link href="/#services" className="text-muted-foreground hover:text-primary">
                Services
              </Link>
              <Link href="/#portfolio" className="text-muted-foreground hover:text-primary">
                Portfolio
              </Link>
              <Link href="/#quote" className="text-muted-foreground hover:text-primary">
                Get a Quote
              </Link>
              <Link href="/#contact" className="text-muted-foreground hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>
          {/* Right: Social Links */}
          <div className="grid gap-4">
            <h4 className="font-semibold text-foreground">Connect With Us</h4>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
            <div className="pt-2 text-sm text-muted-foreground">
              <p>Email: slpn.pr@gmail.com</p>
              <p>Tel: 011-2194819</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} SLPN Printers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
