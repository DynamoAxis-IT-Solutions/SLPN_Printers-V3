'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function Quote() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here.
    alert("Quote request submitted! We will get back to you shortly.");
  };

  return (
    <section id="quote" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Card className="w-full max-w-3xl mx-auto animate-fade-in-up bg-transparent border-none shadow-none" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">Request a Quote</CardTitle>
              <CardDescription className="mt-2 text-muted-foreground md:text-lg">
                Fill out the form below and we'll get back to you with a personalized quote.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="grid gap-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="service">Service</Label>
                    <Select required>
                      <SelectTrigger id="service">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="business-cards">Business Cards</SelectItem>
                        <SelectItem value="flyers-brochures">Flyers & Brochures</SelectItem>
                        <SelectItem value="banners-signs">Banners & Signs</SelectItem>
                        <SelectItem value="packaging">Packaging</SelectItem>
                        <SelectItem value="booklets-catalogs">Booklets & Catalogs</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input id="quantity" type="number" placeholder="e.g., 500" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="details">Project Details</Label>
                  <Textarea id="details" placeholder="Please provide details like size, paper type, colors, etc." className="min-h-[120px]" />
                </div>
                <Button type="submit" className="w-full sm:w-auto justify-self-center">Submit Request</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
