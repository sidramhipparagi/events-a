import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background z-10" />
        <div className="absolute top-0 left-0 right-0 h-full bg-[radial-gradient(circle_at_50%_0%,rgba(120,119,198,0.3),transparent_50%)]" />
        {/* Animated noise texture could go here */}
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-medium tracking-widest uppercase text-primary mb-6">
            Premium Event Management
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white mb-6 leading-tight">
            Crafting Moments <br />
            <span className="text-gradient-primary">Beyond Imagination</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            From intimate traditional gatherings to massive corporate spectacles. 
            We design experiences that leave a lasting imprint.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8 text-base bg-white text-black hover:bg-white/90 h-12">
                Start Planning
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="outline" size="lg" className="rounded-full px-8 text-base border-white/20 text-white hover:bg-white/10 h-12 group">
                View Portfolio <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-2">
          <div className="w-1 h-1 bg-current rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
