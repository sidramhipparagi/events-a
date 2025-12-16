import { Navbar } from "@/components/layout/Navbar";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <main className="pt-24">
        <section className="py-12 md:py-24 bg-background">
          <div className="container mx-auto px-6 text-center mb-16">
             <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-medium tracking-widest uppercase text-primary mb-6">
                Our Expertise
              </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              World-Class <span className="text-gradient-primary">Execution</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We bring a multidisciplinary approach to every project, ensuring no detail is overlooked and every moment is unforgettable.
            </p>
          </div>
          <Services />
        </section>
        <Contact />
      </main>
      
       <footer className="py-12 border-t border-white/10 bg-black">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm">© 2024 Lumina Events. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-white/40 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-white/40 hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
