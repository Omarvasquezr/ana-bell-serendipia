import { motion } from "framer-motion";
import { Heart, Activity, Calculator, Video, Users, Bell } from "lucide-react";
import BotanicalDeco from "@/components/BotanicalDeco";

const services = [
  {
    icon: Heart,
    title: "Historia clínica digital",
    desc: "Seguimiento personalizado y continuo de tu salud, con un registro accesible y seguro.",
  },
  {
    icon: Activity,
    title: "Control de hipertensión y diabetes",
    desc: "Monitoreo cercano y planes integrales para mantener tus valores en equilibrio.",
  },
  {
    icon: Calculator,
    title: "Herramientas de cálculo",
    desc: "IMC, riesgo cardiovascular y más — herramientas que te empoderan con información clara.",
  },
  {
    icon: Video,
    title: "Consulta online",
    desc: "Telemedicina sin fronteras. Tu bienestar no depende de la distancia.",
  },
  {
    icon: Users,
    title: "Wellness geriátrico",
    desc: "Nutrición, odontología, yoga y fitness — un enfoque premium para la plenitud en cada etapa.",
  },
  {
    icon: Bell,
    title: "Recordatorios inteligentes",
    desc: "Control de datos en tiempo real y alertas para que nunca pierdas de vista tu salud.",
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
            No ofrezco una lista de servicios — ofrezco una filosofía de cuidado. Cada herramienta
            que uso está al servicio de algo más grande: tu bienestar integral.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-card/60 shadow-sm shadow-foreground/5 hover:shadow-lg hover:shadow-accent/15 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
