import { motion } from "framer-motion";
import heroImg from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-60" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-20">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Medicina Interna · Bienestar Integral
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-foreground mb-6">
              Dra. Ana Bell
              <br />
              <span className="italic font-normal">Vásquez Ramírez</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed mb-4">
              Vine a crecer para dar, no solo ser.
            </p>
            <p className="text-xs tracking-widest text-muted-foreground mb-10">
              MPPS 147443 · CMDC 40.111
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground text-sm tracking-wide rounded-sm hover:opacity-90 transition-opacity"
              >
                Agendar consulta
              </a>
              <a
                href="#quien-soy"
                className="inline-flex items-center justify-center px-8 py-3 border border-foreground/20 text-foreground text-sm tracking-wide rounded-sm hover:bg-foreground/5 transition-colors"
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
              <div className="absolute -inset-4 bg-accent/20 rounded-full blur-3xl" />
              <img
                src={heroImg}
                alt="Dra. Ana Bell Vásquez Ramírez — Médico Internista"
                className="relative rounded-2xl object-cover w-full aspect-[3/4] shadow-2xl"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
