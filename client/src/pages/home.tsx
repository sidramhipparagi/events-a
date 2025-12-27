"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";

const reviews = [
  {
    quote: "98 Events transformed our annual summit into a breathtaking experience. Their attention to detail and creative vision are simply unmatched in the industry.",
    author: "Sarah Jenkins",
    role: "CMO, TechGlobal Inc."
  },
  {
    quote: "Working with 98 Events was an absolute pleasure. They delivered a flawless wedding celebration that exceeded all our expectations. Every detail was perfect.",
    author: "Michael Chen",
    role: "Event Host"
  },
  {
    quote: "The team at 98 Events brought our product launch to life in ways we never imagined. Their creativity and professionalism are second to none.",
    author: "Emily Rodriguez",
    role: "Marketing Director, InnovateCorp"
  },
  {
    quote: "From concept to execution, 98 Events handled everything with precision and style. Our corporate gala was the talk of the industry for months.",
    author: "David Thompson",
    role: "CEO, Global Ventures"
  }
];

export default function Home() {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 7000); // Change every 7 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <section className="py-24 bg-foreground/5 border-y border-foreground/5">
          <div className="container mx-auto px-8 md:px-16 lg:px-24 text-center">
            <div className="relative min-h-[400px] flex items-center justify-center">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ${
                    index === currentReview ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <h2 className="text-2xl md:text-3xl font-display font-light italic text-foreground/80 max-w-4xl mx-auto leading-relaxed">
                    "{review.quote}"
                  </h2>
                  <div className="mt-8">
                    <p className="font-semibold text-foreground">{review.author}</p>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                    <div className="flex justify-center gap-2 mt-4">
                      {reviews.map((_, dotIndex) => (
                        <button
                          key={dotIndex}
                          onClick={() => setCurrentReview(dotIndex)}
                          className={`transition-all duration-300 rounded-full ${
                            dotIndex === currentReview
                              ? "w-1.5 h-1.5 bg-primary"
                              : "w-1.5 h-1.5 bg-foreground/20 hover:bg-foreground/40"
                          }`}
                          aria-label={`Go to review ${dotIndex + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
