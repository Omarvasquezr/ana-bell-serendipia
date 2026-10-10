import { motion } from "framer-motion";
import { Stethoscope, HeartPulse, Droplet, MessageCircle } from "lucide-react";
import BotanicalDeco from "@/components/BotanicalDeco";
import { waLink } from "@/lib/whatsapp";

const services = [
  {
    icon: Stethoscope,
    title: "Consulta de Medicina Interna",
    desc: "Evaluación completa, con tiempo para escucharte. Diagnóstico claro y un plan que puedas seguir.",
    message: "Hola Dra. Ana Bell, quisiera agendar una consulta de medicina interna.",
  },
  {
    icon: HeartPulse,
    title: "Control de hipertensión",
    desc: "Seguimiento cercano de tu presión arterial para mantenerla en equilibrio.",
    message: "Hola Dra., me interesa el control de hipertensión.",
  },
  {
    icon: Droplet,
    title: "Control de diabetes",
    desc: "Acompañamiento continuo para tus niveles de glucosa y tu día a día.",
    message: "Hola Dra., me interesa el control de diabetes.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="relative py-28 md:py-40 bg-background">
      <BotanicalDeco variant="branch-right" className="absolute top-20 right-0 w-32 opacity-25" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-warm mb-4">Mi enfoque</p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground leading-tight mb-6">
            Medicina interna con <span className="italic text-primary">alma</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Cada consulta está al servicio de algo más grande: tu bienestar integral.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col p-8 rounded-2xl bg-card/60 shadow-sm shadow-foreground/5 hover:shadow-lg hover:shadow-accent/15 transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-5">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-medium text-foreground mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-1">{s.desc}</p>
              <a
                href={waLink(s.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm tracking-wide rounded-lg shadow-md shadow-primary/20 hover:shadow-lg transition-shadow"
              >
                <MessageCircle className="w-4 h-4" />
                Escribir por WhatsApp
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
