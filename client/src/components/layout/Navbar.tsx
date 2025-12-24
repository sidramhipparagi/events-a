import { useState, useEffect } from "react";
import { Link } from "wouter";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const instagramUrl = "https://www.instagram.com/98events.in/";
  const whatsappUrl = "https://wa.me/919945555269";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2">
            <img 
              src="/logo_web.png" 
              alt="98 Events" 
              className="h-8 md:h-10 w-auto object-contain"
              onError={(e) => {
                console.error("Logo failed to load from /logo_web.png");
              }}
            />
            <span className="text-xl font-display font-bold tracking-tighter text-foreground">
              Events<span className="text-primary">.</span>
            </span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-70"
            aria-label="Instagram"
          >
            <img 
              src="/instagram_logo.png" 
              alt="Instagram" 
              className="w-7 h-7 object-contain"
              onError={(e) => {
                console.error("Instagram logo failed to load");
              }}
            />
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-70"
            aria-label="WhatsApp"
          >
            <img 
              src="/whatsapp_logo.png" 
              alt="WhatsApp" 
              className="w-5 h-5 object-contain"
              onError={(e) => {
                console.error("WhatsApp logo failed to load");
              }}
            />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-70"
            aria-label="Instagram"
          >
            <img 
              src="/instagram_logo.png" 
              alt="Instagram" 
              className="w-7 h-7 object-contain"
              onError={(e) => {
                console.error("Instagram logo failed to load");
              }}
            />
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-70"
            aria-label="WhatsApp"
          >
            <img 
              src="/whatsapp_logo.png" 
              alt="WhatsApp" 
              className="w-5 h-5 object-contain"
              onError={(e) => {
                console.error("WhatsApp logo failed to load");
              }}
            />
          </a>
        </div>
      </div>

    </nav>
  );
}
