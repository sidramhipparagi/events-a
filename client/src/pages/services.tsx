import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Services } from "@/components/sections/Services";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <main className="pt-24">
        <section className="py-12 md:py-24 bg-background">
          <div className="container mx-auto px-8 md:px-16 lg:px-24 text-center mb-16">
             <span className="inline-block py-1 px-3 rounded-full bg-foreground/5 border border-foreground/10 text-xs font-medium tracking-widest uppercase text-primary mb-6">
                Our Expertise
              </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              World-Class <span className="text-gradient-primary">Execution</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We bring a multidisciplinary approach to every project, ensuring no detail is overlooked and every moment is unforgettable.
            </p>
          </div>
          <Services />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
