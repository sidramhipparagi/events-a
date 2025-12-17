import { Navbar } from "@/components/layout/Navbar";
import { Contact } from "@/components/sections/Contact";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <main className="pt-24">
        <section className="py-12 md:py-24 relative overflow-hidden">
             {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full opacity-30 pointer-events-none" />

          <div className="container mx-auto px-8 md:px-16 lg:px-24">
            <div className="max-w-4xl mx-auto text-center mb-20">
               <span className="inline-block py-1 px-3 rounded-full bg-foreground/5 border border-foreground/10 text-xs font-medium tracking-widest uppercase text-primary mb-6">
                Who We Are
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-8">
                Architects of <span className="text-gradient-primary">Experience</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Lumina Events was founded on a simple belief: that events shouldn't just be attended, they should be felt. We combine technical precision with boundless creativity to build worlds that captivate and inspire.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                {[
                    { number: "10+", label: "Years Experience" },
                    { number: "500+", label: "Events Executed" },
                    { number: "50+", label: "Global Awards" }
                ].map((stat, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className="glass-card p-8 rounded-2xl text-center"
                    >
                        <h3 className="text-5xl font-display font-bold text-primary mb-2">{stat.number}</h3>
                        <p className="text-foreground/60 font-medium">{stat.label}</p>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
                <div className="order-2 md:order-1">
                     <h2 className="text-3xl font-display font-bold text-foreground mb-6">Our Philosophy</h2>
                     <p className="text-muted-foreground mb-6 leading-relaxed">
                         We don't believe in templates. Every client has a unique story, and our job is to tell it through immersive design, lighting, sound, and spatial arrangement.
                     </p>
                     <p className="text-muted-foreground leading-relaxed">
                         From the initial sketch to the final curtain call, our team of designers, producers, and technicians work in unison to ensure perfection.
                     </p>
                </div>
                <div className="order-1 md:order-2 h-[400px] bg-foreground/5 rounded-3xl overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-50" />
                     {/* Placeholder for team/office image */}
                    <div className="absolute inset-0 flex items-center justify-center text-foreground/20 font-display text-2xl font-bold">
                        Lumina Studio
                    </div>
                </div>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      
      <footer className="py-12 border-t border-border bg-background">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-sm">© 2024 Lumina Events. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Instagram</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
