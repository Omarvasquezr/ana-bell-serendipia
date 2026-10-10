import { motion } from "framer-motion";
import aboutImg from "@/assets/about-portrait.jpg";
import BotanicalDeco from "@/components/BotanicalDeco";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const AboutSection = () => {
  return (
    <section id="quien-soy" className="relative py-28 md:py-40 bg-card/50">
      <BotanicalDeco variant="petal-corner" className="absolute top-0 left-0 w-24 opacity-30 rotate-90" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <img
              src={aboutImg}
              alt="Dra. Ana Bell Vásquez Ramírez en consulta"
              width={1024}
              height={1024}
              className="rounded-2xl object-cover w-full aspect-[4/5] shadow-xl shadow-foreground/8"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-warm">Quién soy</p>
            <h2 className="text-4xl md:text-5xl font-light text-foreground leading-tight">
              La medicina como <span className="italic text-primary">escucha</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Soy médico especialista en Medicina Interna, formada en la Universidad Nacional
                Experimental Rómulo Gallegos (UNERG) con mención <em>Cum Laude</em>. Hice mi
                postgrado en la Cruz Roja Venezolana — Hospital Carlos J. Bello, donde también
                fui Jefa de Residentes.
              </p>
              <p>
                Ejerzo en Caracas. Me apasiona el ser humano completo: no solo el diagnóstico,
                sino la persona detrás de cada síntoma. Creo en una medicina que escucha y
                acompaña.
              </p>
              <p>
                Mi consulta no es solo un espacio clínico — es un lugar donde te sientes visto,
                escuchado y cuidado de verdad.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <BotanicalDeco variant="leaf-divider" className="w-full h-10 opacity-30" />
      </div>
    </section>
  );
};

export default AboutSection;
