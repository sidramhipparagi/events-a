import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full opacity-20 pointer-events-none" />

      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Let's Create <br />
                <span className="text-primary">Magic Together</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Ready to bring your vision to life? Fill out the form or reach out directly. We're excited to hear from you.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Email</h4>
                  <p className="text-lg text-foreground/80 hover:text-primary transition-colors cursor-pointer">hello@luminaevents.com</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Phone</h4>
                  <p className="text-lg text-foreground/80">+1 (555) 0123-4567</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Office</h4>
                  <p className="text-lg text-foreground/80">123 Event Horizon Blvd, <br/>New York, NY 10001</p>
                </div>
              </div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/70">First Name</label>
                  <Input placeholder="John" className="bg-foreground/5 border-foreground/10 text-foreground placeholder:text-foreground/30 focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/70">Last Name</label>
                  <Input placeholder="Doe" className="bg-foreground/5 border-foreground/10 text-foreground placeholder:text-foreground/30 focus-visible:ring-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/70">Email</label>
                <Input type="email" placeholder="john@example.com" className="bg-foreground/5 border-foreground/10 text-foreground placeholder:text-foreground/30 focus-visible:ring-primary" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/70">Event Type</label>
                <select className="flex h-10 w-full rounded-md border border-foreground/10 bg-foreground/5 px-3 py-2 text-sm text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option className="bg-background">Corporate Event</option>
                  <option className="bg-background">Wedding / Traditional</option>
                  <option className="bg-background">Concert / Show</option>
                  <option className="bg-background">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/70">Message</label>
                <Textarea placeholder="Tell us about your event..." className="min-h-[120px] bg-foreground/5 border-foreground/10 text-foreground placeholder:text-foreground/30 focus-visible:ring-primary" />
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-12">
                Send Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
