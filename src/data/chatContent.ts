export type ChatMessage = {
  text: string;
  delay: number;
  isFile?: boolean;
  fileName?: string;
  fileUrl?: string;
};

export type ChatContent = {
  contactName: string;
  customAvatar?: string;
  proyectUrl?: string;
  messages: ChatMessage[];
};

// Estructura contenedora para los dos idiomas
const chatContentTranslations: Record<
  "es" | "en",
  Record<string, ChatContent>
> = {
  es: {
    about: {
      contactName: "Flor Holzmann",
      messages: [
        { text: "¡Hola! Soy Flor 👋", delay: 0 },
        {
          text: "Soy desarrolladora full-stack con +4 años de experiencia",
          delay: 2000,
        },
        {
          text: "Me especializo en React, Node.js y TypeScript 💻",
          delay: 3500,
        },
        {
          text: "Estudié Letras Clásicas en la UBA y Desarrollo Frontend en ADA-IT, y desde entonces no paré de aprender",
          delay: 5000,
        },
        {
          text: "Lo que más me gusta de programar es resolver problemas complejos y ver cómo las ideas cobran vida",
          delay: 6500,
        },
        {
          text: "Cuando no estoy programando, me gusta leer, los juegos de palabras y obviamente... ¡soy fan nostálgica del MSN! 😄",
          delay: 8000,
        },
        {
          text: "Me considero una persona curiosa, siempre buscando aprender nuevas tecnologías",
          delay: 9500,
        },
        {
          text: "Acá tenés mi CV completo por si querés conocer más detalles 📄",
          delay: 11000,
          isFile: true,
          fileName: "CV_Flor_Holzmann.pdf",
          fileUrl: "/cv.pdf",
        },
      ],
    },
    stack: {
      contactName: "Stack técnico",
      messages: [
        { text: "¡Hola! Te muestro mi stack técnico 🛠️", delay: 0 },
        {
          text: "Frontend: ⚛️ React, Next.js, TypeScript, HTML5, CSS3, SCSS",
          delay: 2000,
        },
        { text: "Backend: 🟢 Node.js, Express, NestJS", delay: 3500 },
        { text: "Bases de datos: 🗄️ PostgreSQL, MongoDB, MySQL", delay: 5000 },
        { text: "DevOps: 🐳 Docker, AWS, Vercel, GitHub Actions", delay: 6500 },
        { text: "Herramientas: Git, VS Code, Figma, Postman", delay: 8000 },
        {
          text: "¿Querés ver algún proyecto específico usando estas tecnologías?",
          delay: 9500,
        },
      ],
    },
    contact: {
      contactName: "Flor Holzmann",
      messages: [
        { text: "¡Hola! ¿Cómo estás? 😊", delay: 0 },
        {
          text: "Podés escribirme cualquier cosa, me llegan directo al mail",
          delay: 2000,
        },
        {
          text: "¿Tenés algún proyecto en mente? ¿Querés charlar sobre tecnología?",
          delay: 4000,
        },
        { text: "¡Dale, escribime! 👇", delay: 5500 },
      ],
    },
    vecindalia: {
      contactName: "Vecindalia",
      customAvatar: "/vecindalia-logo.png",
      proyectUrl: "https://www.vecindalia.com.ar",
      messages: [
        {
          text: "¡Hola! 👋 Soy Vecindalia, una guía comercial local",
          delay: 0,
        },
        {
          text: "La idea es simple: ayudar a encontrar comercios, servicios y emprendimientos de una zona sin perderse entre redes sociales y grupos de WhatsApp",
          delay: 2200,
        },
        {
          text: "La desarrollé como una aplicación full-stack, desde la interfaz hasta la base de datos y el panel de administración",
          delay: 4500,
        },
        {
          text: "El frontend está hecho con React + TypeScript y la información se gestiona con Supabase y PostgreSQL",
          delay: 6500,
        },
        {
          text: "También implementé autenticación, roles, Row Level Security y un panel privado para administrar los negocios",
          delay: 8500,
        },
        {
          text: "La búsqueda permite encontrar negocios por nombre, categoría, descripción y palabras clave, incluso sin preocuparse por los acentos",
          delay: 10500,
        },
        {
          text: "Además, cada negocio puede tener horarios, ubicación, medios de pago, promociones, redes sociales y galería de imágenes. Hacé click en el avatar de la derecha para ir a la página.",
          delay: 12500,
        },
        {
          text: "Fue uno de esos proyectos donde no alcanza con hacer una interfaz linda: hay que pensar producto, datos, seguridad y experiencia de usuario",
          delay: 14500,
        },
        {
          text: "Stack: React · TypeScript · Supabase · PostgreSQL · TanStack Query · Tailwind CSS",
          delay: 16500,
        },
      ],
    },
    agora: {
      contactName: "Ágora",
      proyectUrl: "https://agoraferia.netlify.app",
      customAvatar: "/agoraferia.png",
      messages: [
        { text: "¡Hola! Soy Ágora 👋", delay: 0 },
        {
          text: "Este proyecto nació de una idea bastante clásica: crear un espacio digital para compartir y descubrir contenido cultural",
          delay: 2200,
        },
        {
          text: "La propuesta combina contenido editorial con una experiencia de navegación pensada para explorar, no solamente para buscar",
          delay: 4500,
        },
        {
          text: "Trabajé especialmente en la arquitectura del frontend, los componentes reutilizables y la integración con el contenido dinámico",
          delay: 6500,
        },
        {
          text: "La interfaz está construida con React y TypeScript, buscando mantener el código modular y fácil de escalar",
          delay: 8500,
        },
        {
          text: "También worked con APIs y gestión de contenido para separar la presentación de los datos y poder actualizar el contenido sin modificar la aplicación",
          delay: 10500,
        },
        {
          text: "Uno de los desafíos fue encontrar el equilibrio entre una interfaz editorial y una experiencia web moderna",
          delay: 12500,
        },
        {
          text: "Porque sí: también se puede programar pensando en cómo se lee una página, no solamente en cómo funciona",
          delay: 14500,
        },
        {
          text: "Stack: React · TypeScript · APIs · CMS · JavaScript · CSS",
          delay: 16500,
        },
      ],
    },
    wordGames: {
      contactName: "Juegos de palabras",
      proyectUrl: "https://panaldeletras.netlify.app",
      customAvatar: "/beehive.svg",
      messages: [
        { text: "¡Hola! 🐝 ¿Te gustan los juegos de palabras?", delay: 0 },
        {
          text: "Estoy desarrollando una pequeña colección de juegos diarios inspirados en clásicos como Spelling Bee y Wordle",
          delay: 2200,
        },
        {
          text: "Por ahora hay dos: un panal de letras y un Wordle",
          delay: 4200,
        },
        {
          text: "En el panal tenés siete letras y una letra central que siempre tiene que aparecer en cada palabra",
          delay: 6200,
        },
        {
          text: "El desafío está en encontrar todas las palabras posibles, descubrir los pangramas y subir de rango según los puntos obtenidos",
          delay: 8200,
        },
        {
          text: "El Wordle, por su parte, propone descubrir una palabra en una cantidad limitada de intentos usando las pistas de cada jugada",
          delay: 10200,
        },
        {
          text: "Los juegos tienen datos diarios almacenados en Supabase y una API propia para recuperar el desafío correspondiente a cada fecha",
          delay: 12200,
        },
        {
          text: "También implementé persistencia local para conservar las partidas y los progresos del jugador",
          delay: 14200,
        },
        {
          text: "Y sí: tuve que pelearme bastante con fechas, estados, caché y localStorage. Porque aparentemente hacer un jueguito de palabras nunca es solamente hacer un jueguito de palabras 😅",
          delay: 16200,
        },
        {
          text: "Stack: Next.js · React · TypeScript · Supabase · PostgreSQL · TanStack Query",
          delay: 18400,
        },
      ],
    },
  },
  en: {
    about: {
      contactName: "Flor Holzmann",
      messages: [
        { text: "Hi! I'm Flor 👋", delay: 0 },
        {
          text: "I'm a full-stack developer with over 4 years of experience",
          delay: 2000,
        },
        {
          text: "I specialize in React, Node.js, and TypeScript 💻",
          delay: 3500,
        },
        {
          text: "I studied Classical Literature at UBA and Frontend Development at ADA-IT, and I haven't stopped learning since",
          delay: 5000,
        },
        {
          text: "What I love most about programming is solving complex problems and watching ideas come to life",
          delay: 6500,
        },
        {
          text: "When I'm not coding, I enjoy reading, word games, and obviously... I'm a nostalgic MSN fan! 😄",
          delay: 8000,
        },
        {
          text: "I consider myself a curious person, always looking to learn new technologies",
          delay: 9500,
        },
        {
          text: "Here is my full CV if you want to know more details 📄",
          delay: 11000,
          isFile: true,
          fileName: "CV_Flor_Holzmann.pdf",
          fileUrl: "/cv.pdf",
        },
      ],
    },
    stack: {
      contactName: "Technical Stack",
      messages: [
        { text: "Hi! Let me show you my tech stack 🛠️", delay: 0 },
        {
          text: "Frontend: ⚛️ React, Next.js, TypeScript, HTML5, CSS3, SCSS",
          delay: 2000,
        },
        { text: "Backend: 🟢 Node.js, Express, NestJS", delay: 3500 },
        { text: "Databases: 🗄️ PostgreSQL, MongoDB, MySQL", delay: 5000 },
        { text: "DevOps: 🐳 Docker, AWS, Vercel, GitHub Actions", delay: 6500 },
        { text: "Tools: Git, VS Code, Figma, Postman", delay: 8000 },
        {
          text: "Would you like to see a specific project using these technologies?",
          delay: 9500,
        },
      ],
    },
    contact: {
      contactName: "Flor Holzmann",
      messages: [
        { text: "Hi! How are you doing? 😊", delay: 0 },
        {
          text: "Feel free to drop me a line, messages go straight to my email",
          delay: 2000,
        },
        {
          text: "Have a project in mind? Want to talk about tech?",
          delay: 4000,
        },
        { text: "Go ahead, send me a message! 👇", delay: 5500 },
      ],
    },
    vecindalia: {
      contactName: "Vecindalia",
      customAvatar: "/vecindalia-logo.png",
      proyectUrl: "https://www.vecindalia.com.ar",
      messages: [
        {
          text: "Hi! 👋 I'm Vecindalia, a local commercial business directory",
          delay: 0,
        },
        {
          text: "The concept is simple: helping users find local shops, services, and ventures without getting lost in social media and WhatsApp groups",
          delay: 2200,
        },
        {
          text: "I built it as a full-stack application, managing everything from the UI to the database and administration panel",
          delay: 4500,
        },
        {
          text: "The frontend is built with React + TypeScript, and data is handled via Supabase and PostgreSQL",
          delay: 6500,
        },
        {
          text: "I also implemented authentication, roles, Row Level Security, and a private panel for business management",
          delay: 8500,
        },
        {
          text: "The search engine allows finding businesses by name, category, description, and keywords, even handling accents seamlessly",
          delay: 10500,
        },
        {
          text: "Additionally, each business can list store hours, locations, payment options, deals, social links, and galleries. Click the right avatar to visit the live site.",
          delay: 12500,
        },
        {
          text: "It was one of those projects where building a pretty interface isn't enough; you really have to design data, product flow, security, and user experience",
          delay: 14500,
        },
        {
          text: "Stack: React · TypeScript · Supabase · PostgreSQL · TanStack Query · Tailwind CSS",
          delay: 16500,
        },
      ],
    },
    agora: {
      contactName: "Ágora",
      proyectUrl: "https://agoraferia.netlify.app",
      customAvatar: "/agoraferia.png",
      messages: [
        { text: "Hi! I'm Ágora 👋", delay: 0 },
        {
          text: "This project stems from a classic concept: building a digital space for sharing and discovering cultural content",
          delay: 2200,
        },
        {
          text: "The platform pairs editorial content with a browsing experience designed around discovery, rather than just raw keyword searching",
          delay: 4500,
        },
        {
          text: "I focused heavily on frontend architecture, reusable modular components, and integrating dynamic content",
          delay: 6500,
        },
        {
          text: "The interface is engineered with React and TypeScript, keeping the codebase clean, modular, and easy to scale",
          delay: 8500,
        },
        {
          text: "I also worked with APIs and content management to split data logic from presentation, enabling updates without modifying the source application",
          delay: 10500,
        },
        {
          text: "One of the key challenges was balancing a clean, editorial layout with the requirements of a modern web experience",
          delay: 12500,
        },
        {
          text: "Because yes: coding can also be approached by thinking about how a page reads, not just how it runs",
          delay: 14500,
        },
        {
          text: "Stack: React · TypeScript · APIs · CMS · JavaScript · CSS",
          delay: 16500,
        },
      ],
    },
    wordGames: {
      contactName: "Word Games",
      proyectUrl: "https://panaldeletras.netlify.app",
      customAvatar: "/beehive.svg",
      messages: [
        { text: "Hi! 🐝 Do you like word games?", delay: 0 },
        {
          text: "I'm developing a small collection of daily games inspired by classics like Spelling Bee and Wordle",
          delay: 2200,
        },
        {
          text: "Right now there are two available: a letter honeycomb puzzle and a Wordle clone",
          delay: 4200,
        },
        {
          text: "In the honeycomb, you get seven letters and a center letter that must be included in every single guess",
          delay: 6200,
        },
        {
          text: "The challenge lies in finding all valid words, uncovering pangrams, and climbing ranks based on your score",
          delay: 8200,
        },
        {
          text: "Wordle, on the other hand, tasks you with guessing a secret word within limited attempts using dynamic tile hints",
          delay: 10200,
        },
        {
          text: "The games feature daily puzzles stored in Supabase with a custom API to fetch the exact puzzle for each calendar date",
          delay: 12200,
        },
        {
          text: "I also set up client-side persistence to save running matches and store the user's historical progress",
          delay: 14200,
        },
        {
          text: "And yes: I had to battle heavily with dates, system states, cache layers, and localStorage. Apparently, building a 'simple' word game is never actually simple 😅",
          delay: 16200,
        },
        {
          text: "Stack: Next.js · React · TypeScript · Supabase · PostgreSQL · TanStack Query",
          delay: 18400,
        },
      ],
    },
  },
};
export default chatContentTranslations;
