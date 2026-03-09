import { motion } from "framer-motion";
import BotanicalDeco from "@/components/BotanicalDeco";

const archetypes = [
  {
    name: "Palas Atenea",
    role: "La tutora",
    desc: "Cuida desde el conocimiento. Guía con sabiduría, enseña con paciencia. Es la médica que educa a sus pacientes, no solo los trata.",
  },
  {
    name: "Afrodita",
    role: "La auténtica",
    desc: "Atrae por su autenticidad, no por artificio. Su presencia digital refleja quién es de verdad — cercana, genuina, humana.",
  },
  {
    name: "Artemisa",
    role: "La guerrera",
    desc: "Triunfa en territorio exigente con determinación. Jefa de residentes. Cum Laude. Migrante. No se detiene.",
  },
];

const StudySection = () => {
  return (
    <section id="el-estudio" className="relative py-28 md:py-40 bg-primary text-primary-foreground overflow-hidden">
      <BotanicalDeco variant="branch-left" className="absolute top-0 left-0 w-44 opacity-15" />
      <BotanicalDeco variant="branch-right" className="absolute bottom-0 right-0 w-40 opacity-15" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary-foreground/50 mb-4">
            ✦ Lo que la ciencia vio en mí
          </p>
          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">
            Una identidad <span className="italic">estudiada</span>, no construida
          </h2>
          <p className="text-primary-foreground/75 leading-relaxed">
            En 2018, la revista académica <em>Serendipia</em> (Universidad Central de Venezuela)
            publicó un estudio que analizó mi presencia digital usando la metodología iconográfica
            de Panofsky y los arquetipos junguianos. Lo que encontraron no fue branding fabricado
            — fue coherencia simbólica real.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto mb-16">
          {archetypes.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto shadow-lg shadow-primary-foreground/5">
                <span className="text-2xl font-light italic">{a.name.charAt(0)}</span>
              </div>
              <h3 className="text-2xl font-light italic">{a.name}</h3>
              <p className="text-sm tracking-widest uppercase text-primary-foreground/50">
                {a.role}
              </p>
              <p className="text-sm text-primary-foreground/75 leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-2xl mx-auto text-center border-t border-primary-foreground/15 pt-10"
        >
          <blockquote className="text-lg italic text-primary-foreground/85 mb-4">
            "La identidad digital de Ana Bell expresa un ciclo arquetípico femenino que transita
            entre la sabiduría, la autenticidad y la fortaleza."
          </blockquote>
          <p className="text-xs text-primary-foreground/40 tracking-wide">
            — Lindys Vásquez-Ramírez · Revista Serendipia, UCV, 2018
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StudySection;
