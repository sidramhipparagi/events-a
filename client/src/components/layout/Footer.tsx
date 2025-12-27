import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          <div className="flex gap-6">
            <Link href="/services">
              <a 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Services
              </a>
            </Link>
            <Link href="/portfolio">
              <a 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Portfolio
              </a>
            </Link>
            <Link href="/about">
              <a 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                About
              </a>
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex gap-6">
              <a 
                href="https://www.instagram.com/98events.in/" 
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
            </div>
            <img 
              src="/logo_png.png" 
              alt="98 Events" 
              className="h-8 w-auto object-contain ml-4"
              onError={(e) => {
                console.error("Logo failed to load from /logo_web.png");
              }}
            />
          </div>
        </div>
        <div className="text-center">
          <p className="text-muted-foreground text-xs">
            © 2026 98 Events. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

