import { motion } from "framer-motion";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle } from "lucide-react";
import BotanicalDeco from "@/components/BotanicalDeco";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="relative py-28 md:py-40 bg-card/50">
      <BotanicalDeco variant="petal-corner" className="absolute bottom-0 right-0 w-28 opacity-25 -scale-x-100" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
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

            <div className="space-y-4">
              <a
                href="https://wa.me/584265110762"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>(0426) 511 0762 — WhatsApp</span>
              </a>
              <a
                href="mailto:anabellanb@gmail.com"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>anabellanb@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5" />
                <span>(0426) 511 0762</span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {submitted ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center space-y-4">
                  <p className="text-2xl font-light text-foreground italic">Gracias por escribirme</p>
                  <p className="text-muted-foreground">Te responderé lo antes posible.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 p-8 rounded-2xl bg-background shadow-sm shadow-foreground/5">
                <div>
                  <Input
                    placeholder="Tu nombre"
                    required
                    className="bg-background border-none shadow-sm shadow-foreground/5 focus:shadow-md"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Tu correo electrónico"
                    required
                    className="bg-background border-none shadow-sm shadow-foreground/5 focus:shadow-md"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="¿En qué puedo ayudarte?"
                    rows={5}
                    required
                    className="bg-background border-none shadow-sm shadow-foreground/5 focus:shadow-md resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground rounded-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
                >
                  Enviar mensaje
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
