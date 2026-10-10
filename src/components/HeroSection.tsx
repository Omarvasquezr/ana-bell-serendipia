import { motion } from "framer-motion";
import heroImg from "@/assets/hero-portrait.jpg";
import BotanicalDeco from "@/components/BotanicalDeco";
import { waLink } from "@/lib/whatsapp";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Botanical decorations */}
      <BotanicalDeco variant="branch-left" className="absolute top-10 left-0 w-40 md:w-56 opacity-60" />
      <BotanicalDeco variant="branch-right" className="absolute bottom-10 right-0 w-36 md:w-48 opacity-50" />
      <BotanicalDeco variant="petal-corner" className="absolute top-0 right-0 w-24 md:w-32 opacity-40" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center min-h-screen py-24">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Medicina Interna · Bienestar Integral
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-foreground mb-6">
              Dra. Ana Bell
              <br />
              <span className="italic font-normal text-primary">Vásquez Ramírez</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed mb-4">
              Vine a crecer para dar, no solo ser.
            </p>
            <p className="text-xs tracking-widest text-muted-foreground/60 mb-12">
              MPPS 147443 · CMDC 40.111
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={waLink("Hola Dra. Ana Bell, quisiera agendar una consulta.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground text-sm tracking-wide rounded-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                Agendar consulta
              </a>
              <a
                href="#quien-soy"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-accent/30 text-foreground text-sm tracking-wide rounded-lg hover:bg-accent/50 transition-colors"
              >
                Conocerme
              </a>
            </div>
          </motion.div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-80 md:w-96 lg:w-[28rem]">
              <div className="absolute -inset-6 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute -inset-3 bg-primary/10 rounded-full blur-2xl" />
              <img
                src={heroImg}
                alt="Dra. Ana Bell Vásquez Ramírez — Médico Internista"
                width={1024}
                height={1024}
                className="relative rounded-2xl object-cover w-full aspect-[3/4] shadow-xl shadow-foreground/10"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <BotanicalDeco variant="leaf-divider" className="w-full h-12 opacity-40" />
      </div>
    </section>
  );
};

export default HeroSection;
