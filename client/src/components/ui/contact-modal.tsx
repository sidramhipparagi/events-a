import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const instagramUrl = "https://www.instagram.com/98events.in/";
  const whatsappUrl = "https://wa.me/919945555269";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-background rounded-2xl shadow-2xl max-w-md w-full border border-border overflow-hidden">
              {/* Header */}
              <div className="relative p-6 md:p-8 border-b border-border flex justify-between items-center">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                  Get in <span className="text-gradient-primary">Touch</span>
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-foreground/10 rounded-lg transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 text-foreground" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <p className="text-muted-foreground mb-8 text-center">
                  Connect with us on your preferred platform
                </p>

                <div className="space-y-4">
                  {/* Instagram Button */}
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full p-4 rounded-xl border border-border bg-foreground/5 hover:bg-foreground/10 transition-all hover:scale-105 active:scale-95"
                  >
                    <img
                      src="/instagram_logo.png"
                      alt="Instagram"
                      className="w-6 h-6 object-contain"
                      onError={(e) => {
                        console.error("Instagram logo failed to load");
                      }}
                    />
                    <span className="font-medium text-foreground">Instagram</span>
                  </a>

                  {/* WhatsApp Button */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full p-4 rounded-xl border border-border bg-foreground/5 hover:bg-foreground/10 transition-all hover:scale-105 active:scale-95"
                  >
                    <img
                      src="/whatsapp_logo.png"
                      alt="WhatsApp"
                      className="w-6 h-6 object-contain"
                      onError={(e) => {
                        console.error("WhatsApp logo failed to load");
                      }}
                    />
                    <span className="font-medium text-foreground">WhatsApp</span>
                  </a>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 my-6">
                  <div className="flex-1 h-px bg-border" />
                  <span className="text-xs text-muted-foreground">OR</span>
                  <div className="flex-1 h-px bg-border" />
                </div>

                {/* Email Info */}
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Email us directly</p>
                  <p className="font-medium text-foreground break-all">
                    contact@98events.in
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 md:px-8 py-4 bg-foreground/5 border-t border-border">
                <button
                  onClick={onClose}
                  className="w-full py-2 px-4 rounded-lg bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
