import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Index from "@/pages/Index";

const LEAD =
  "La medicina interna exige mirar a la persona completa. Antes de pedir un examen, procuro escucharle; antes de indicar un tratamiento, procuro explicarle. Creo que un diagnóstico bien comprendido ya es el comienzo del cuidado.";

const page = () => {
  const { container } = render(<Index />);
  const main = container.querySelector("main") as HTMLElement;
  const text = (main.textContent ?? "").replace(/\s+/g, " ").trim();
  const order = Array.from(main.querySelectorAll("section[id]")).map((s) => s.id);
  return { container, main, text, order };
};

const norm = (s: string) => s.replace(/\s+/g, " ").trim();

describe("consulta y agendamiento", () => {
  it("muestra los cuatro servicios, con la consulta en línea como IV", () => {
    const { container } = page();
    const items = Array.from(container.querySelectorAll("#servicios ol > li"));
    expect(items.map((li) => norm(li.textContent ?? ""))).toEqual([
      "I Consulta de Medicina Interna Evaluación completa, con tiempo para escucharle. Diagnóstico claro y un plan que pueda seguir. Escribir por WhatsApp",
      "II Control de hipertensión Seguimiento cercano de su presión arterial para mantenerla en equilibrio. Escribir por WhatsApp",
      "III Control de diabetes Acompañamiento continuo de sus niveles de glucosa y de su día a día. Escribir por WhatsApp",
      "IV Consulta en línea Nos vemos por videollamada, con el mismo tiempo para escucharle y explicarle. Escribir por WhatsApp",
    ]);
    const onlineLink = items[3].querySelector("a") as HTMLAnchorElement;
    expect(decodeURIComponent(onlineLink.href)).toBe(
      "https://wa.me/584265110762?text=Hola Dra., me interesa la consulta en línea."
    );
  });

  it("explica cómo agendar antes de la sección Consulta, con los medios de pago", () => {
    const { text, order } = page();
    expect(order.indexOf("como-agendar")).toBeGreaterThan(-1);
    expect(order.indexOf("como-agendar")).toBeLessThan(order.indexOf("consulta"));
    expect(text).toContain("Escríbame por WhatsApp y cuénteme brevemente el motivo de su consulta.");
    expect(text).toContain("Le confirmaré el día y la hora.");
    expect(text).toContain("pago móvil");
    expect(text).toContain("Zelle");
    expect(text).toContain("USDT");
    expect(text).toContain("bolívares al tipo de cambio oficial del BCV del día");
    expect(text).toContain("El valor de la consulta se le informará al agendar.");
  });

  it("no publica datos de pago ni el valor de la consulta", () => {
    const { text } = page();
    expect(text).not.toMatch(/\d{8,}/); // número de cuenta / teléfono expuesto
    expect(text).not.toMatch(/0x[0-9a-fA-F]{6,}/);
    expect(text).not.toMatch(/[A-Za-z0-9]{25,}/); // dirección de billetera
    expect(text).not.toMatch(/(?:\$|USD|USDT|€)\s*\d/i);
    expect(text).not.toMatch(/\d+\s*(?:USD|USDT|€)/i);
  });

  it("abre con 'Mi manera de ejercer' justo después del hero", () => {
    const { container, order } = page();
    expect(order[0]).toBe("manera");
    const lead = container.querySelector("#manera p") as HTMLElement;
    expect(norm(lead.textContent ?? "")).toBe(LEAD);
    expect(order.indexOf("manera")).toBeLessThan(order.indexOf("quien-soy"));
  });
});
