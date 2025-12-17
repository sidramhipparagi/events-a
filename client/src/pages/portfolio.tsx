import { Navbar } from "@/components/layout/Navbar";
import { Contact } from "@/components/sections/Contact";
import { motion } from "framer-motion";
import corporateImg from "@assets/stock_images/modern_corporate_eve_9508c83f.jpg";
import traditionalImg from "@assets/stock_images/luxury_traditional_i_dd2df4b0.jpg";
import concertImg from "@assets/stock_images/concert_stage_with_c_2290e9d1.jpg";
import fashionImg from "@assets/stock_images/fashion_show_runway__03fabf6d.jpg";

const portfolioItems = [
  {
    id: 1,
    title: "TechSummit 2024",
    category: "Corporate",
    image: corporateImg,
    description: "A futuristic conference experience for 5,000 attendees."
  },
  {
    id: 2,
    title: "The Royal Wedding",
    category: "Traditional",
    image: traditionalImg,
    description: "A 3-day celebration blending heritage with modern luxury."
  },
  {
    id: 3,
    title: "Neon Nights Festival",
    category: "Entertainment",
    image: concertImg,
    description: "Immersive stage design for the year's biggest music festival."
  },
  {
    id: 4,
    title: "Vogue Runway Spring",
    category: "Fashion",
    image: fashionImg,
    description: "Minimalist geometric set design for high fashion."
  },
    {
    id: 5,
    title: "Global Finance Gala",
    category: "Corporate",
    image: corporateImg,
    description: "Elegant black-tie event for industry leaders."
  },
  {
    id: 6,
    title: "Heritage Awards",
    category: "Traditional",
    image: traditionalImg,
    description: "Celebrating culture with authentic set designs."
  }
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <main className="pt-24">
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-6 mb-16 text-center">
             <span className="inline-block py-1 px-3 rounded-full bg-foreground/5 border border-foreground/10 text-xs font-medium tracking-widest uppercase text-primary mb-6">
                Our Work
              </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              Selected <span className="text-gradient-primary">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of our most ambitious and successful events across the globe.
            </p>
          </div>

          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                        <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1 block">{item.category}</span>
                        <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <Contact />
      </main>
      
      <footer className="py-12 border-t border-border bg-background">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
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
