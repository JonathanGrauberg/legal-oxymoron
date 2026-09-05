export const stats = [
  { value: "25+", label: "Años de trayectoria" },
  { value: "500+", label: "Casos resueltos" },
  { value: "2", label: "Profesionales" },
  { value: "10", label: "Áreas de práctica" },
];

export const practiceAreas = [
  {
    title: "Planificación tributaria internacional",
    description:
      "Estructuración fiscal de operaciones transfronterizas, tratados de doble imposición, precios de transferencia en coordinación con asesores impositivos, y planificación para empresas con filiales, licenciantes o clientes en el exterior.",
    tags: ["Fiscal internacional", "Transfronterizo"],
  },
  {
    title: "Derecho laboral internacional",
    description:
      "Contratos y relaciones laborales con elementos extranjeros, destacaciones y expatriados, contratación remota transfronteriza y coordinación con filiales del exterior.",
    tags: ["Expatriados", "Filiales"],
  },
  {
    title: "Contratos internacionales",
    description:
      "Negociación y redacción de contratos de compraventa, distribución, agencia, licencia y prestación de servicios internacionales; ley aplicable, jurisdicción y arbitraje.",
    tags: ["Contratos", "Arbitraje"],
  },
  {
    title: "Propiedad intelectual e industrial",
    description:
      "Marcas, patentes, derechos de autor, secretos empresariales y defensa frente a infracciones.",
    tags: ["Marcas", "Patentes"],
  },
  {
    title: "Transferencia de tecnología y licenciamiento",
    description:
      "Acuerdos de licencia, franquicias tecnológicas y transferencia de know-how.",
    tags: ["Licencias", "Know-how"],
  },
  {
    title: "Valuación y gestión de intangibles",
    description:
      "Identificación, valuación y estrategia de activos intangibles como ventaja competitiva.",
    tags: ["Intangibles", "Estrategia"],
  },
  {
    title: "Inversiones extranjeras",
    description:
      "Protección de inversiones y conflictos de jurisdicción.",
    tags: ["Inversiones", "Jurisdicción"],
  },
  {
    title: "Derecho internacional privado",
    description:
      "Ley aplicable, competencia judicial internacional y reconocimiento de decisiones extranjeras.",
    tags: ["Ley aplicable", "Competencia"],
  },
  {
    title: "Derecho farmacéutico y ciencias de la vida",
    description:
      "Regulatorio, comercialización y contratos del sector farmacéutico y de ciencias de la vida.",
    tags: ["Regulatorio", "Farmacéutico"],
  },
  {
    title: "Derecho corporativo y empresas familiares",
    description:
      "Gobierno corporativo, protocolos familiares y procesos de sucesión.",
    tags: ["Gobierno corporativo", "Sucesión"],
  },
];

export const team = [
  {
    initials: "SV",
    name: "Santiago Miguel Villa",
    role: "Socio Fundador",
    description:
      "Doctorando en Ciencias Jurídicas y Sociales (UCA), con posgrados en propiedad intelectual y valuación de intangibles en Franklin Pierce Law School / UNH y UC Davis (EE. UU.). Profesor de Derecho Internacional Privado y Derecho Industrial en la UCA, donde coordina el Posgrado de Gestión de Intangibles.",
    tags: ["Propiedad Intelectual", "Intangibles", "Internacional"],
    linkedin: "https://www.linkedin.com/in/santiago-miguel-villa-16635bb",
  },
  {
    initials: "PL",
    name: "Pablo Tomás Lamas",
    role: "Cofundador",
    description:
      "Abogado (UCA, 2003) y Magíster en Propiedad Intelectual (Universidad Austral, 2012), con diploma de honor. Diez años de trayectoria en la industria farmacéutica y docencia universitaria en Argentina, Colombia, Ecuador, Perú y Bolivia. Autor del libro \"El Hilo de Oro\", sobre empresas familiares.",
    tags: ["Propiedad Intelectual", "Farmacéutico", "Empresas Familiares"],
    linkedin: "https://www.linkedin.com/in/pablo-lamas-7b660916",
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
  address: "25 de Junio 229, Buenos Aires, Argentina",
  phone: "+54 11 5237 7192",
  email: "info@oxymoron.com.ar",
  hours: "Lunes a viernes, 9:00 – 17:00hs. Entrevistas virtuales disponibles.",
  instagram: "@oxymoron_ar",
  site: "oxymoron.com.ar",
};

export const interestAreas = practiceAreas.map((a) => a.title);
