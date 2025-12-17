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

      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-black text-sm md:text-base font-medium tracking-widest uppercase mb-6">
            EVENT MANAGEMENT
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-foreground mb-6 leading-tight">
            Crafting Moments <br />
            <span className="text-gradient-primary">Beyond Imagination</span>
          </h1>
          
          
          
        </motion.div>
      </div>
    </section>
  );
}
