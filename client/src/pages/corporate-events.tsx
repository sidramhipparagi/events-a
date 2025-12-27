import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { ContactModal } from "@/components/ui/contact-modal";
import corporateImg from "@assets/stock_images/modern_corporate_eve_9508c83f.jpg";

export default function CorporateEventsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    "Product launches with cutting-edge stage design",
    "Corporate conferences with flawless execution",
    "Gala dinners with refined ambiance",
    "Award ceremonies with professional production",
    "Team building events with interactive elements",
    "Strategic brand alignment and messaging"
  ];

  const benefits = [
    {
      title: "Brand Impact",
      description: "Elevate your corporate image with meticulously executed events that resonate with stakeholders"
    },
    {
      title: "Seamless Coordination",
      description: "From concept through execution, we handle every detail ensuring zero stress for your team"
    },
    {
      title: "Professional Production",
      description: "World-class audio, visual, and lighting systems delivered by experienced technicians"
    },
    {
      title: "Audience Engagement",
      description: "Create memorable experiences that strengthen client relationships and employee bonds"
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
              src={corporateImg} 
              alt="Corporate Events" 
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
                Corporate Excellence
              </span>
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white mb-6 leading-tight">
                Corporate Events <br />
                <span className="text-gradient-primary">That Inspire</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-10 leading-relaxed">
                From intimate client dinners to large-scale product launches, we deliver corporate events that strengthen relationships, amplify your brand message, and create lasting impressions.
              </p>
              <Button 
                size="lg" 
                onClick={() => setIsModalOpen(true)}
                className="rounded-full px-8 text-base bg-foreground text-background hover:bg-foreground/90 h-12 sm:w-auto cursor-pointer"
              >
                Plan Your Event
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
                What We Deliver
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Comprehensive event solutions tailored to corporate excellence
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
                Your corporate event is an investment in your brand and relationships
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
                Ready to Make Your Event Unforgettable?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Let's discuss how we can bring your corporate event vision to life with precision and creativity.
              </p>
              <Button 
                size="lg" 
                onClick={() => setIsModalOpen(true)}
                className="rounded-full px-8 text-base bg-foreground text-background hover:bg-foreground/90 h-12"
              >
                Get in Touch
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
