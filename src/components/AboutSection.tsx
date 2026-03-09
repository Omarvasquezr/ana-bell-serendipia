import { motion } from "framer-motion";
import aboutImg from "@/assets/about-portrait.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const AboutSection = () => {
  return (
    <section id="quien-soy" className="py-24 md:py-36 bg-card">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
              className="rounded-2xl object-cover w-full aspect-[4/5] shadow-xl"
              loading="lazy"
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
            <p className="text-sm tracking-[0.3em] uppercase text-accent">Quién soy</p>
            <h2 className="text-4xl md:text-5xl font-light text-foreground leading-tight">
              La medicina como <span className="italic">escucha</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Soy venezolana, médico internista formada en la Universidad Nacional Experimental
                Rómulo Gallegos (UNERG) con mención <em>Cum Laude</em>. Hice mi postgrado en
                Medicina Interna en la Cruz Roja Venezolana — Hospital Carlos J. Bello, donde
                también fui Jefa de Residentes.
              </p>
              <p>
                Hoy resido en Italia, pero mi vocación no tiene fronteras. Me apasiona el ser
                humano completo: no solo el diagnóstico, sino la persona que hay detrás de cada
                síntoma. Creo en una medicina que escucha, que acompaña y que transforma.
              </p>
              <p>
                Mi consulta no es solo un espacio clínico — es un lugar donde te sientes visto,
                escuchado y cuidado de verdad.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
