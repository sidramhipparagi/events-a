import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { ContactModal } from "@/components/ui/contact-modal";

export default function PrivateCelebrationsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    "Birthday parties with personalized themes",
    "Anniversary celebrations with romantic ambiance",
    "Milestone events tailored to your story",
    "Intimate gatherings with elegant design",
    "Family reunions with meaningful experiences",
    "Custom décor and entertainment options"
  ];

  const benefits = [
    {
      title: "Personal Connection",
      description: "Every detail reflects your personality and preferences, creating a celebration uniquely yours"
    },
    {
      title: "Stress-Free Planning",
      description: "Our team handles all logistics so you can focus on celebrating with your loved ones"
    },
    {
      title: "Quality Experience",
      description: "Thoughtful execution ensures your guests feel welcomed and your celebration flows beautifully"
    },
    {
      title: "Cherished Memories",
      description: "Create moments with the people you love most that you'll treasure forever"
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
              src="/images/private.png" 
              alt="Private Celebrations" 
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
                Personal Milestones
              </span>
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white mb-6 leading-tight">
                Private Celebrations <br />
                <span className="text-gradient-primary">With Heart</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-10 leading-relaxed">
                Celebrate life's precious moments with elegance and intimacy. From birthdays to anniversaries, we create personalized celebrations that bring loved ones together.
              </p>
              <Button 
                size="lg" 
                onClick={() => setIsModalOpen(true)}
                className="rounded-full px-8 text-base bg-foreground text-background hover:bg-foreground/90 h-12 sm:w-auto cursor-pointer"
              >
                Plan Your Celebration
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
                Our Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Full-service event planning for the moments that matter most
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
                Make your special day as meaningful as the milestone itself
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
                Let's Celebrate Together
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Share your celebration ideas with us and let's create a memorable event filled with joy and meaning.
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
