// -----------------------------------------------------------------------
// Todo el contenido de la web vive aquí. Edita este archivo para
// actualizar textos, experiencia, skills o proyectos sin tocar los
// componentes.
// -----------------------------------------------------------------------

export const profile = {
  name: 'David Manuel García',
  role: 'Desarrollador Web Full Stack',
  location: 'Madrid, España',
  email: 'davidmagarcia95@gmail.com',
  phone: '+34 672 15 33 77',
  // Sustituye por tus enlaces reales antes de publicar
  github: 'https://github.com/davixma95/',
  paginaWebGit: 'https://github.com/davixma95/Portfolio',
  linkedin: 'https://www.linkedin.com/in/david-manuel-garcia-jimenez-50334b20b/',
  availability: 'Disponible para nuevas oportunidades',
  bio: `Soy una persona joven, llena de energía para integrarme en un equipo
de trabajo donde aportar conocimiento y aumentar mi experiencia
profesional en un entorno real. Mi objetivo es seguir creciendo,
personal y profesionalmente, en un proyecto donde poder aportar
soluciones sólidas de principio a fin.`,
}

export const stats = [
  { label: 'Años de experiencia', value: '4+' },
  { label: 'Stack principal', value: 'PHP · JS · React · NodeJs' },
  { label: 'Lugar de residencia', value: 'Alcobendas' },
]

export const experience = [
  {
    role: 'Desarrollador Web',
    company: 'RACE',
    period: 'Mar 2023 — Actual',
    current: true,
    points: [
      'Mantenimiento y evolución de un proyecto en PHP y JavaScript.',
      'Resolución de incidencias y optimización continua de la plataforma.',
      'Mejoras para asegurar la estabilidad del entorno de producción.',
    ],
  },
  {
    role: 'Desarrollador Web Full Stack',
    company: 'Accom',
    period: 'Ene 2022 — Mar 2023',
    current: false,
    points: [
      'Desarrollo Full Stack con PHP y React en distintos proyectos.',
      'Creación de endpoints y APIs propias para el backend.',
      'Mejora de la funcionalidad e interactividad del frontend.',
    ],
  },
  {
    role: 'Desarrollador Web (beca)',
    company: 'Indra Sistemas',
    period: 'Oct 2021 — Dic 2021',
    current: false,
    points: [
      'Gestión de tickets e incidencias en entorno corporativo.',
      'Organización del trabajo en equipo bajo metodologías ágiles.',
    ],
  },
]

export const education = [
  {
    title: 'Técnico Superior en Desarrollo de Aplicaciones Web',
    school: 'IES Virgen de la Paz',
    location: 'Alcobendas, Madrid',
  },
  {
    title: 'Técnico Superior en Iluminación, Captación y Tratamiento de la Imagen',
    school: 'IES La Puerta Bonita',
    location: 'Madrid',
  },
]

export const skillGroups = [
  {
    label: 'Frontend',
    skills: ['JavaScript (ES6)', 'React', 'Next.js'],
  },
  {
    label: 'Backend',
    skills: ['PHP', 'Node.js', 'SQL'],
  },
  {
    label: 'Datos',
    skills: ['MongoDB','SQLite','MariaDB'],
  },
  {
    label: 'Herramientas',
    skills: ['Control de versiones (Git)','Postman'],
  },
]

// Sustituye estos proyectos de ejemplo por los tuyos reales:
// añade nombre, una descripción corta, el stack usado y los enlaces.
export const projects = [
  {
    title: 'Alejandría',
    description:
      'Es un gestor documental que hice para poder guardar o descargar documentos empresariales, se guardaban en docker y mediante endpoints se previsualizaban y/o descargaban. He de decir que fue una API que hice cuando estaba aprendiendo a usar contenedores Docker o NodeJs y es por eso que estoy muy orgulloso.',
    stack: ['Express.js', 'Node.js', 'Docker'],
    repo: profile.github,
    demo: '',
  },
  {
    title: 'Portfolio David García ',
    description:
      'Este mismo sitio: una web construida en React con un sistema de diseño propio (sin librerías de UI externas), pensada para ser fácil de mantener y ampliar. Un ejemplo directo de cómo trabajo con React, con el que llevo alrededor de 4 años de experiencia.',
    stack: ['PHP', 'SQL','JS','React'],
    repo: 'profile.paginaWebGit',
    demo: '',
  },
]
