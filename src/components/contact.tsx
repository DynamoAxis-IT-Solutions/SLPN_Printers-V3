'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here.
    alert("Message sent! Thank you for contacting us.");
  };

  return (
    <div id="contact" className="w-full scroll-mt-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Card className="w-full max-w-3xl mx-auto animate-fade-in-up bg-white border shadow-sm" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
            <CardHeader className="text-center pt-8">
              <CardTitle className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">Contact Us</CardTitle>
              <CardDescription className="mt-2 text-muted-foreground md:text-lg">
                Have a question? We'd love to hear from you.
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-8">
              <form onSubmit={handleSubmit} className="grid gap-6 text-left">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Full Name</Label>
                    <Input id="contact-name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email</Label>
                    <Input id="contact-email" type="email" placeholder="john@example.com" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="e.g., Inquiry about custom order" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message..." className="min-h-[100px]" required/>
                </div>
                <Button type="submit" className="w-full sm:w-auto justify-self-center rounded-full px-8 h-12 text-lg">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
