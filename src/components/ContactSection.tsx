import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import BotanicalDeco from "@/components/BotanicalDeco";
import { waLink } from "@/lib/whatsapp";

const ContactSection = () => {
  return (
    <section id="contacto" className="relative py-28 md:py-40 bg-card/50">
      <BotanicalDeco variant="petal-corner" className="absolute bottom-0 right-0 w-28 opacity-25 -scale-x-100" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center space-y-8"
        >
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-warm mb-4">Contacto</p>
            <h2 className="text-4xl md:text-5xl font-light text-foreground leading-tight mb-6">
              Hablemos de <span className="italic text-primary">tu salud</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Estoy aquí para escucharte. Si buscas una consulta, tienes una pregunta o
              simplemente quieres comenzar un camino hacia tu bienestar — escríbeme.
            </p>
          </div>

          <a
            href={waLink("Hola Dra. Ana Bell, quisiera agendar una consulta.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 bg-primary text-primary-foreground text-base tracking-wide rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl transition-shadow"
          >
            <MessageCircle className="w-5 h-5" />
            Escribirme por WhatsApp
          </a>

          <p className="text-xs text-muted-foreground max-w-md mx-auto leading-relaxed">
            Por WhatsApp puedes escribirme para agendar. No envíes estudios ni datos médicos
            hasta que te confirme la cita.
          </p>

          <a
            href="mailto:anabellanb@gmail.com"
            className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
            anabellanb@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
