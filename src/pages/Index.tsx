import { waLink } from "@/lib/whatsapp";
import painting from "../assets/hero-pintura.webp.asset.json";

const saveData =
  typeof navigator !== "undefined" &&
  (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData === true;

const GREETING = "Hola Dra. Ana Bell, quisiera agendar una consulta.";

const services = [
  { n: "I", title: "Consulta de Medicina Interna", desc: "Evaluación completa, con tiempo para escucharle. Diagnóstico claro y un plan que pueda seguir.", message: "Hola Dra. Ana Bell, quisiera agendar una consulta de medicina interna." },
  { n: "II", title: "Control de hipertensión", desc: "Seguimiento cercano de su presión arterial para mantenerla en equilibrio.", message: "Hola Dra., me interesa el control de hipertensión." },
  { n: "III", title: "Control de diabetes", desc: "Acompañamiento continuo de sus niveles de glucosa y de su día a día.", message: "Hola Dra., me interesa el control de diabetes." },
];

const Index = () => (
  <>
    <a href="#contenido" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-background focus:px-4 focus:py-3">
      Saltar al contenido
    </a>

    <header className="mx-auto max-w-6xl px-6">
      <div className="flex flex-col gap-2 py-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <p className="tracking-[0.12em]" style={{ fontVariant: "small-caps" }}>Dra. Ana Bell Vásquez Ramírez</p>
        <p className="text-base">Medicina Interna · Caracas</p>
        <p className="text-base">MPPS 147443 · CMDC 40.111</p>
        <a className="tap justify-center underline underline-offset-4" href={waLink(GREETING)} target="_blank" rel="noopener noreferrer">WhatsApp</a>
      </div>
      <div className="rule" />
      <div className="rule mt-[3px]" />
    </header>

    <main id="contenido">
      <section className="relative overflow-hidden">
        {painting && !saveData && (
          <img
            src={painting.url}
            alt="Pintura de la doctora: dos canarios en una ventana"
            className="pointer-events-none absolute inset-y-0 right-0 h-full w-full object-cover opacity-25 md:w-1/2 md:opacity-45"
            style={{ maskImage: "linear-gradient(to right, transparent, black 45%)", WebkitMaskImage: "linear-gradient(to right, transparent, black 45%)" }}
            fetchPriority="high"
            decoding="async"
          />
        )}
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-36 fade-in">
          <div className="rule-canary w-16 mb-10" />
          <h1 className="max-w-4xl text-[2.75rem] md:text-7xl lg:text-8xl">
            Cuidar es, antes que nada, <em className="text-accent">saber escuchar.</em>
          </h1>
          <p className="measure mt-10 text-xl">
            Dra. Ana Bell Vásquez Ramírez,
            <br />
            médico internista.
          </p>
          <a className="btn-primary mt-10" href={waLink(GREETING)} target="_blank" rel="noopener noreferrer">
            Escribirme por WhatsApp
          </a>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6"><div className="rule" /></div>

      <section id="quien-soy" className="mx-auto max-w-6xl px-6 py-24 fade-in">
        <h2 className="text-5xl md:text-6xl mb-12">Quién soy</h2>
        <div className="gap-12 md:columns-2 [&>p]:mb-6 [&>p]:break-inside-avoid-column">
          <p className="dropcap measure">
            Soy médico especialista en Medicina Interna. Me formé en la Universidad Nacional
            Experimental Rómulo Gallegos (UNERG), donde obtuve el título con mención Cum Laude.
          </p>
          <p className="measure">
            Realicé el postgrado en la Cruz Roja Venezolana – Hospital Carlos J. Bello, donde
            ejercí además como Jefa de Residentes.
          </p>
          <p className="measure">
            Actualmente ejerzo en Caracas. En cada consulta procuro atender a la persona en su
            totalidad, no solo al síntoma.
          </p>
          <p className="measure">
            Le recibo con el tiempo necesario para escucharle, explicarle con claridad su
            situación y acordar con usted un plan de cuidado.
          </p>
        </div>
      </section>

      <section aria-label="Cita" className="mx-auto max-w-6xl px-6 py-20 text-center">
        <div className="rule-canary mx-auto w-24 mb-10" />
        <blockquote className="serif italic text-4xl md:text-6xl text-accent">
          “Vine a crecer para dar, no solo ser.”
        </blockquote>
        <div className="rule-canary mx-auto w-24 mt-10" />
      </section>

      <section id="servicios" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-5xl md:text-6xl mb-12">Servicios</h2>
        <ol>
          {services.map((s) => (
            <li key={s.n} className="rule grid gap-4 py-10 md:grid-cols-[6rem_1fr_auto] md:items-baseline">
              <span className="serif text-4xl text-accent" aria-hidden="true">{s.n}</span>
              <div>
                <h3 className="text-3xl md:text-4xl">{s.title}</h3>
                <p className="measure mt-3">{s.desc}</p>
              </div>
              <a className="tap underline underline-offset-4" href={waLink(s.message)} target="_blank" rel="noopener noreferrer">
                Escribir por WhatsApp
              </a>
            </li>
          ))}
        </ol>
        <div className="rule" />
      </section>

      <section id="consulta" className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h2 className="text-5xl md:text-6xl mb-10">Consulta</h2>
        <a className="btn-primary text-lg px-12" style={{ minHeight: 60 }} href={waLink(GREETING)} target="_blank" rel="noopener noreferrer">
          Escribirme por WhatsApp
        </a>
        <p className="mt-8">
          <a className="tap justify-center underline underline-offset-4" href="mailto:anabellanb@gmail.com">anabellanb@gmail.com</a>
        </p>
        <p className="measure mx-auto mt-6 text-base">
          Por WhatsApp puede escribirme para agendar. No envíe estudios ni datos médicos
          hasta que yo confirme la cita.
        </p>
      </section>
    </main>

    <footer className="mx-auto max-w-6xl px-6">
      <div className="rule" />
      <p className="flex flex-wrap items-center justify-center gap-x-4 py-6 text-base text-center">
        <span>Dra. Ana Bell Vásquez Ramírez · Medicina Interna · MPPS 147443 · CMDC 40.111</span>
        <a className="tap underline underline-offset-4" href="https://instagram.com/anabellvr" target="_blank" rel="noopener noreferrer">Instagram</a>
      </p>
    </footer>
  </>
);

export default Index;
