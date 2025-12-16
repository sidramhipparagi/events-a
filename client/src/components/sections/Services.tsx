import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import corporateImg from "@assets/stock_images/modern_corporate_eve_9508c83f.jpg";
import traditionalImg from "@assets/stock_images/luxury_traditional_i_dd2df4b0.jpg";
import concertImg from "@assets/stock_images/concert_stage_with_c_2290e9d1.jpg";
import fashionImg from "@assets/stock_images/fashion_show_runway__03fabf6d.jpg";

const services = [
  {
    id: "01",
    title: "Corporate Events",
    description: "Product launches, conferences, and gala dinners executed with precision and brand alignment.",
    image: corporateImg,
    colSpan: "md:col-span-2",
  },
  {
    id: "02",
    title: "Traditional Ceremonies",
    description: "Weddings and cultural celebrations honored with authentic detail and modern luxury.",
    image: traditionalImg,
    colSpan: "md:col-span-1",
  },
  {
    id: "03",
    title: "Entertainment & Sets",
    description: "Concerts, award shows, and serial sets designed for maximum visual impact.",
    image: concertImg,
    colSpan: "md:col-span-1",
  },
  {
    id: "04",
    title: "Fashion & Lifestyle",
    description: "Runway shows and brand activations that define trends and captivate audiences.",
    image: fashionImg,
    colSpan: "md:col-span-2",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Our Expertise</h2>
            <p className="text-muted-foreground max-w-md">
              We bring a multidisciplinary approach to every project, ensuring no detail is overlooked.
            </p>
          </div>
          <button className="text-white hover:text-primary transition-colors flex items-center gap-2 font-medium">
            View All Services <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer ${service.colSpan}`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="text-white/50 font-mono text-sm mb-2 block">{service.id}</span>
                <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/70 line-clamp-2 group-hover:text-white transition-colors">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
