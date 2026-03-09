import { Instagram, Mail } from "lucide-react";
import BotanicalDeco from "@/components/BotanicalDeco";

const FooterSection = () => {
  return (
    <footer className="relative py-16 bg-foreground text-background overflow-hidden">
      <BotanicalDeco variant="leaf-divider" className="absolute top-0 left-0 w-full h-8 opacity-10" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-xl font-light italic">
              Dra. Ana Bell Vásquez Ramírez
            </p>
            <p className="text-sm opacity-50 mt-2">
              Medicina Interna · MPPS 147443 · CMDC 40.111
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/anabellvr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="opacity-50 hover:opacity-100 transition-opacity"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="mailto:anabellanb@gmail.com"
              aria-label="Email"
              className="opacity-50 hover:opacity-100 transition-opacity"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-10 text-center">
          <p className="text-xs opacity-35">
            © {new Date().getFullYear()} Dra. Ana Bell Vásquez Ramírez. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
