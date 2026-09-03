export const stats = [
  { value: "25+", label: "Años de trayectoria" },
  { value: "500+", label: "Casos resueltos" },
  { value: "8", label: "Profesionales" },
  { value: "12", label: "Áreas de práctica" },
];

export const practiceAreas = [
  {
    title: "Derecho Laboral",
    description:
      "Asesoramiento preventivo, contratación, conflictos, despidos, reestructuraciones, auditorías y seguridad social. Representación de empresas y trabajadores.",
    tags: ["Empresas", "Trabajadores", "Mediación"],
  },
  {
    title: "Civil & Comercial",
    description:
      "Contratos, obligaciones, daños, sociedades, M&A, flujos de crédito y competitividad.",
    tags: ["Contratos", "Sociedades"],
  },
  {
    title: "Derecho Empresarial",
    description:
      "Sistemas societarios, compliance, contratos comerciales, mediación y resolución de conflictos.",
    tags: ["Compliance", "Conflictos"],
  },
  {
    title: "Amparos de Salud",
    description:
      "Mediación de conflictos con obras sociales y prepagas. Cobertura de medicamentos, tratamientos y régimen de alto costo.",
    tags: ["Amparos", "Prepagas"],
  },
  {
    title: "Jubilaciones",
    description:
      "Trámite ante ANSES, reajuste de haberes, pensiones, moratoria y regímenes especiales.",
    tags: ["ANSES", "Reajustes"],
  },
  {
    title: "Derecho Penal",
    description:
      "Defensa especializada en todas las etapas del proceso. Delitos viales, económicos, violencia de género y más.",
    tags: ["Defensa", "Proceso penal"],
  },
  {
    title: "Derecho de Familia",
    description:
      "Divorcio, cuidado personal, alimentos, sucesiones, adopción, violencia familiar y mediación.",
    tags: ["Familia", "Sucesiones"],
  },
  {
    title: "Inmobiliario",
    description:
      "Compraventas, alquileres, desarrollos inmobiliarios, propiedad horizontal y regularización.",
    tags: ["Alquileres", "Desarrollos"],
  },
  {
    title: "Daños y Perjuicios",
    description:
      "Incidentes de tránsito, laborales, mala praxis y productos defectuosos. Tasación integral de la indemnización.",
    tags: ["Indemnización", "Mala praxis"],
  },
  {
    title: "Propiedad Intelectual",
    description:
      "Registro de marcas y patentes, asesoría contractual, licenciamiento y protección de activos intangibles.",
    tags: ["Marcas", "Licencias"],
  },
];

export const team = [
  {
    initials: "SV",
    name: "Dr. Santiago Villa",
    role: "Socio Principal",
    tags: ["Laboral", "Empresarial"],
  },
  {
    initials: "MV",
    name: "Dr. Maximiliano Villa",
    role: "Socio Fundador",
    tags: ["UBA", "Laboral"],
  },
  {
    initials: "GP",
    name: "Dr. Gustavo Parga",
    role: "Socio",
    description:
      "Experiencia integral en derecho laboral, civil y comercial. Maneja con solvencia casos que interrelacionan distintas ramas jurídicas.",
    tags: ["Laboral", "Civil", "Comercial"],
  },
  {
    initials: "MR",
    name: "Dra. María Vargas",
    role: "Abogada",
    description:
      "Más de 20 años de experiencia exclusiva en derecho laboral. Representación tanto de trabajadores como de empleadores.",
    tags: ["Laboral"],
  },
  {
    initials: "JC",
    name: "Dra. Juliana Chiesa",
    role: "Abogada",
    description:
      "Enfocada en derecho colectivo de trabajo y seguridad social. Asesoría estratégica y negociación colectiva.",
    tags: ["Colectivo", "Seguridad Social"],
  },
  {
    initials: "SM",
    name: "Dr. Santiago Moscardini",
    role: "Consultor Externo",
    description:
      "Especializado en recuperación empresaria. Conocimiento integral en derecho inmobiliario, mercantil, civil y ejercicio deportivo.",
    tags: ["Inmobiliario", "Mercantil", "Deportivo"],
  },
];

export const methodology = [
  {
    number: "01",
    title: "Escuchamos",
    description:
      "Entendemos tu negocio antes de proponer soluciones. El objetivo es comprender bien el contexto de tu realidad.",
  },
  {
    number: "02",
    title: "Determinamos",
    description:
      "Identificamos riesgos y oportunidades. Diferenciamos lo urgente de lo importante en cada caso.",
  },
  {
    number: "03",
    title: "Diseñamos",
    description:
      "Soluciones implementables, proporcionales y alineadas a la realidad económica y operativa del cliente.",
  },
  {
    number: "04",
    title: "Ejecutamos",
    description:
      "Reducimos riesgos, negociamos e implementamos, con seguimiento cercano y continuo.",
  },
];

export const contactInfo = {
  address: "Av. Pueyrredón 783, Palermo, Buenos Aires, Argentina",
  phone: "+54 11 5237 7192",
  email: "info@oxymoron.com.ar",
  hours: "Lunes a viernes, 9:00 – 17:00hs. Entrevistas virtuales disponibles.",
  instagram: "@oxymoron_ar",
  site: "oxymoron.com.ar",
};

export const interestAreas = practiceAreas.map((a) => a.title);
