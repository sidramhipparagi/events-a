import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "98 Events transformed our annual summit into a breathtaking experience. Their attention to detail and creative vision are simply unmatched in the industry.",
    author: "Sarah Jenkins",
    role: "CMO",
    company: "TechGlobal Inc."
  },
  {
    id: 2,
    quote: "From concept to execution, 98 Events delivered a flawless wedding celebration. Every moment was perfectly orchestrated and exceeded our expectations in every way.",
    author: "Raj Patel",
    role: "CEO",
    company: "Patel Enterprises"
  },
  {
    id: 3,
    quote: "The team at 98 Events handled our massive product launch with incredible professionalism. They brought our vision to life in ways we never imagined possible.",
    author: "Emma Williams",
    role: "Head of Marketing",
    company: "InnovateTech Solutions"
  },
  {
    id: 4,
    quote: "Our corporate gala was nothing short of magnificent. The attention to every detail, the seamless coordination, and the magical atmosphere created memories that will last a lifetime.",
    author: "Michael Chen",
    role: "Founder & Chairman",
    company: "Aurora Ventures"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-foreground/5">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-foreground/5 border border-foreground/10 text-xs font-medium tracking-widest uppercase text-primary mb-4">
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Stories from Our Clients
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the magic through the words of those who've worked with us
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="relative h-80 md:h-72">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex flex-col justify-center"
              >
                <div className="bg-foreground/5 border border-foreground/10 rounded-2xl p-8 md:p-12 h-full flex flex-col justify-between">
                  {/* Quote */}
                  <blockquote className="text-lg md:text-xl font-light italic text-foreground/80 leading-relaxed mb-6">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div>
                    <p className="font-semibold text-foreground text-base">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-20 p-2 rounded-full hover:bg-foreground/10 transition-colors group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-20 p-2 rounded-full hover:bg-foreground/10 transition-colors group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-foreground/60 w-8 h-3"
                    : "bg-foreground/20 w-3 h-3 hover:bg-foreground/40"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
