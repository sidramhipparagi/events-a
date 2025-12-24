import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <section className="py-24 bg-foreground/5 border-y border-foreground/5">
          <div className="container mx-auto px-8 md:px-16 lg:px-24 text-center">
            <h2 className="text-2xl md:text-3xl font-display font-light italic text-foreground/80 max-w-4xl mx-auto leading-relaxed">
              "Lumina transformed our annual summit into a breathtaking experience. Their attention to detail and creative vision are simply unmatched in the industry."
            </h2>
            <div className="mt-8">
              <p className="font-semibold text-foreground">Sarah Jenkins</p>
              <p className="text-sm text-muted-foreground">CMO, TechGlobal Inc.</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
