// src/config/site.ts
// ─────────────────────────────────────────────────────────────
// RHINO® Minería & Construcción — Single Source of Truth
// Branch: Proyecto_RHINO
// ─────────────────────────────────────────────────────────────

export const site = {
  // ─── Identidad ──────────────────────────────────────────────
  name: 'RHINO® Minería & Construcción',
  shortName: 'RHINO',
  tagline: 'Ingeniería, minería al más alto nivel y venta de commodities',
  description:
    'RHINO SpA — Servicios integrales de ingeniería, minería y construcción en la Región de Atacama. Movimiento de tierras, perforación y voladura, carguío y acarreo, obras civiles y mantenimiento con más de 25 años de experiencia.',
  legalName: 'Rhino SpA',

  // ─── URL ──────────────────────────────────────────────────
  siteUrl: 'https://rhino-spa.cl',

  // ─── Contacto ─────────────────────────────────────────────
  phone: '+56945422388',
  phoneDisplay: '+56 9 4542 2388',
  email: 'contacto@rhino-spa.cl',
  whatsapp: '56945422388',
  whatsappMessage:
    'Hola, me interesa conocer los servicios de RHINO para mi proyecto minero. ¿Podemos conversar?',

  // ─── Dirección ────────────────────────────────────────────
  address: {
    street: '',
    city: 'Copiapó',
    region: 'Región de Atacama',
    country: 'CL',
  },

  // ─── Redes Sociales ───────────────────────────────────────
  social: {
    instagram: '',
    facebook: '',
  },

  // ─── Analytics ────────────────────────────────────────────
  // TODO: Crear GTM container para RHINO
  gtmId: '',

  // ─── Web3Forms ────────────────────────────────────────────
  // TODO: Crear Access Key en web3forms.com para RHINO
  web3formsKey: '',

  // ─── Navegación ───────────────────────────────────────────
  nav: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Contacto', href: '#contacto' },
  ],

  // ─── Hero ─────────────────────────────────────────────────
  hero: {
    headline: 'Ingeniería, Minería\ny Construcción',
    highlightLine: 'al Más Alto Nivel',
    subheadline:
      'Brindamos soluciones integrales que generan valor en cada etapa de su proyecto.',
    ctaPrimary: { label: 'Conoce Más', href: '#servicios' },
    ctaSecondary: { label: 'Cotiza tu Proyecto', href: '#contacto' },
    // Background image for the hero split layout
    image: '/hero/hero-main.webp',
  },

  // ─── Stats ────────────────────────────────────────────────
  stats: [
    {
      value: '+25',
      label: 'Años de Experiencia',
      icon: 'helmet',
    },
    {
      value: '150+',
      label: 'Proyectos Ejecutados',
      icon: 'blueprint',
    },
    {
      value: '100%',
      label: 'Compromiso con la Seguridad',
      icon: 'shield-check',
    },
    {
      value: '24/7',
      label: 'Soporte y Atención',
      icon: 'headset',
    },
  ],

  // ─── Servicios ────────────────────────────────────────────
  services: [
    {
      title: 'Movimiento de Tierras',
      description:
        'Excavación y transporte de materiales con maquinaria pesada de última generación para obras de gran envergadura.',
      icon: 'truck',
      features: [
        'Excavación masiva',
        'Transporte de materiales',
        'Relleno y compactación',
        'Nivelación de terrenos',
      ],
    },
    {
      title: 'Perforación y Voladura',
      description:
        'Precisión y seguridad en cada operación de perforación y voladura controlada para minería a cielo abierto y subterránea.',
      icon: 'drill',
      features: [
        'Perforación de producción',
        'Voladura controlada',
        'Diseño de mallas',
        'Monitoreo de vibraciones',
      ],
    },
    {
      title: 'Carguío y Acarreo',
      description:
        'Equipos de alto rendimiento para mayor productividad en operaciones de carguío y transporte de mineral.',
      icon: 'excavator',
      features: [
        'Carguío con excavadoras',
        'Acarreo con camiones tolva',
        'Optimización de ciclos',
        'Gestión de flota',
      ],
    },
    {
      title: 'Obras Civiles',
      description:
        'Infraestructura que impulsa el desarrollo minero: caminos, plataformas, muros de contención y obras complementarias.',
      icon: 'building',
      features: [
        'Caminos mineros',
        'Plataformas industriales',
        'Muros de contención',
        'Drenajes y canalizaciones',
      ],
    },
    {
      title: 'Mantenimiento',
      description:
        'Servicios preventivos y correctivos para su maquinaria, asegurando máxima disponibilidad y vida útil de sus equipos.',
      icon: 'wrench',
      features: [
        'Mantenimiento preventivo',
        'Reparaciones correctivas',
        'Diagnóstico de equipos',
        'Disponibilidad garantizada',
      ],
    },
  ],

  // ─── Proceso ──────────────────────────────────────────────
  process: [
    {
      title: 'Evaluación del Proyecto',
      description:
        'Analizamos el sitio, requerimientos técnicos y condiciones del terreno para diseñar la mejor estrategia.',
      icon: 'clipboard-check',
    },
    {
      title: 'Planificación Operativa',
      description:
        'Definimos recursos, equipos y cronograma con foco en eficiencia, seguridad y cumplimiento normativo.',
      icon: 'calendar',
    },
    {
      title: 'Ejecución en Terreno',
      description:
        'Nuestro equipo despliega maquinaria y personal calificado para ejecutar con precisión y estándares de clase mundial.',
      icon: 'hard-hat',
    },
    {
      title: 'Control y Reportes',
      description:
        'Monitoreo continuo, reportes de avance y comunicación transparente durante toda la operación.',
      icon: 'chart-bar',
    },
  ],

  // ─── Nosotros ─────────────────────────────────────────────
  about: {
    title: 'Su Socio Estratégico en Minería',
    description:
      'Con más de 25 años de trayectoria en el sector minero de Atacama, RHINO SpA se ha consolidado como un referente en servicios de ingeniería, minería y construcción. Nuestro compromiso es entregar soluciones eficientes, seguras y sostenibles que maximicen el valor de cada operación.',
    values: [
      {
        title: 'Seguridad',
        description: 'Nuestro compromiso es cero accidentes en cada operación.',
        icon: 'shield',
      },
      {
        title: 'Experiencia',
        description: 'Más de 25 años en el sector minero de Atacama.',
        icon: 'award',
      },
      {
        title: 'Equipo Especializado',
        description: 'Maquinaria moderna y personal altamente calificado.',
        icon: 'users',
      },
      {
        title: 'Sostenibilidad',
        description: 'Operaciones responsables con el medio ambiente.',
        icon: 'leaf',
      },
    ],
  },

  // ─── Horario ──────────────────────────────────────────────
  businessHours: 'Lunes a Viernes: 08:00 – 18:00 | Emergencias 24/7',
};
