
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { sendQuoteEmail } from '@/app/actions/email-actions';

export function Quote() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      serviceId: formData.get('service') as string,
      phone: formData.get('contact-number') as string,
      quantity: Number(formData.get('quantity')),
      details: formData.get('details') as string,
    };

    const result = await sendQuoteEmail(data);

    if (result.success) {
      toast({
        title: "Quote Request Sent!",
        description: "We've received your request and will get back to you soon.",
      });
      (e.target as HTMLFormElement).reset();
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.error || "Could not submit request. Please try again.",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <div id="quote" className="w-full scroll-mt-24 py-4">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Card className="w-full max-w-3xl mx-auto bg-white border shadow-sm">
            <CardHeader className="text-center pt-8">
              <CardTitle className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">Request a Quote</CardTitle>
              <CardDescription className="mt-2 text-muted-foreground md:text-lg">
                Fill out the form below and we'll get back to you with a personalized quote.
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-8">
              <form onSubmit={handleSubmit} className="grid gap-6 text-left">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="service">Service</Label>
                    <Select name="service" required>
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
                    <Label htmlFor="contact-number">Contact Number</Label>
                    <Input id="contact-number" name="contact-number" type="tel" placeholder="e.g., +1 234 567 890" required />
                  </div>
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input id="quantity" name="quantity" type="number" placeholder="e.g., 500" required />
                  </div>
                <div className="space-y-2">
                  <Label htmlFor="details">Project Details</Label>
                  <Textarea id="details" name="details" placeholder="Please provide details like size, paper type, colors, etc." className="min-h-[100px]" />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full sm:w-auto justify-self-center rounded-full px-8 h-12 text-lg"
                >
                  {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                  Submit Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
