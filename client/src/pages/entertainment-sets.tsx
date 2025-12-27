import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { ContactModal } from "@/components/ui/contact-modal";
import concertImg from "@assets/stock_images/concert_stage_with_c_2290e9d1.jpg";

export default function EntertainmentSetsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    "Concert stages with professional sound systems",
    "Award show production with technical excellence",
    "Serial set design and execution",
    "Lighting design and special effects",
    "Video production and projection mapping",
    "Artist coordination and live performance management"
  ];

  const benefits = [
    {
      title: "Technical Mastery",
      description: "State-of-the-art equipment and skilled technicians ensuring pristine audio, visual, and lighting quality"
    },
    {
      title: "Creative Direction",
      description: "Innovative stage design that transforms venues and creates unforgettable visual experiences"
    },
    {
      title: "Artist Management",
      description: "Professional coordination of talent, ensuring smooth logistics and stellar performances"
    },
    {
      title: "Audience Connection",
      description: "Create immersive experiences that captivate and energize audiences from start to finish"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 md:py-40 overflow-hidden pt-32">
          <div className="absolute inset-0 z-0">
            <img 
              src={concertImg} 
              alt="Entertainment & Sets" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
          </div>

          <div className="container mx-auto px-6 md:px-16 lg:px-24 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-foreground/10 border border-foreground/20 text-xs font-medium tracking-widest uppercase text-foreground/80 mb-4 md:mb-6">
                Entertainment Excellence
              </span>
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white mb-6 leading-tight">
                Entertainment & Sets <br />
                <span className="text-gradient-primary">That Captivate</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-10 leading-relaxed">
                From intimate concerts to grand award shows, we design and execute entertainment experiences with technical mastery and creative vision that mesmerize audiences.
              </p>
              <Button 
                size="lg" 
                onClick={() => setIsModalOpen(true)}
                className="rounded-full px-8 text-base bg-foreground text-background hover:bg-foreground/90 h-12 sm:w-auto cursor-pointer"
              >
                Bring Your Vision to Life
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-foreground/5">
          <div className="container mx-auto px-6 md:px-16 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
                Our Expertise
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Complete entertainment production with cutting-edge technology and artistic excellence
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-6 rounded-lg bg-background border border-foreground/10"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24">
          <div className="container mx-auto px-6 md:px-16 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
                Why Choose 98 Events
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Transform your entertainment event into an unforgettable spectacle
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-xl bg-gradient-to-br from-foreground/5 to-foreground/10 border border-foreground/10 hover:border-foreground/20 transition-colors"
                >
                  <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-foreground/5">
          <div className="container mx-auto px-6 md:px-16 lg:px-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
                Ready to Create Magic?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Let's discuss your entertainment event and create an experience that audiences will remember for years to come.
              </p>
              <Button 
                size="lg" 
                onClick={() => setIsModalOpen(true)}
                className="rounded-full px-8 text-base bg-foreground text-background hover:bg-foreground/90 h-12"
              >
                Get Started
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
