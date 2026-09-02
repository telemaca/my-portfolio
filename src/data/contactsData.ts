export type ChatType =
  | "about"
  | "stack"
  | "work"
  | "projects"
  | "contact"
  | "vecindalia"
  | "agora"
  | "wordGames"
  | "default";

export type Contact = {
  name: string;
  status: string;
  message: string;
  onClick: string;
  chatType: ChatType;
  customAvatar?: string;
};

export type ContactsData = {
  personal: Contact[];
  projects: Contact[];
  contact: Contact[];
};

// Estructura bilingüe para tus listas de contactos del MSN
const contactsDataTranslations: Record<"es" | "en", ContactsData> = {
  es: {
    personal: [
      {
        name: "Sobre mí",
        status: "msn-online",
        message: "Full-stack developer, Data analyst, UX enthusiast",
        onClick: "about",
        chatType: "about",
      },
      {
        name: "Stack técnico",
        status: "msn-online",
        message: "React, Node.js, TypeScript, Sql",
        onClick: "stack",
        chatType: "stack",
      },
      {
        name: "Experiencia laboral",
        status: "msn-online",
        message: "4+ años de experiencia, Ex-Meli",
        onClick: "work",
        chatType: "work",
      },
    ],
    projects: [
      {
        name: "Vecindalia - Guía comercial",
        status: "idle",
        message: "Vite + Typescript + Supabase",
        onClick: "project0",
        chatType: "vecindalia",
        customAvatar: "/vecindalia-logo.png",
      },
      {
        name: "Ágora - Mercado de pulgas online",
        status: "idle",
        message: "Vite + Typescript",
        onClick: "project1",
        chatType: "agora",
      },
      {
        name: "Juegos de palabras App",
        status: "idle",
        message: "NextJS + Typescript + Supabase",
        onClick: "project2",
        chatType: "wordGames",
      },
      {
        name: "El Ropero de Viole - Marketplace",
        status: "idle",
        message: "Vite + Typescript",
        onClick: "project3",
        chatType: "projects",
      },
      {
        name: "Pasapalabra!",
        status: "idle",
        message: "NextJS + AI",
        onClick: "project4",
        chatType: "projects",
      },
      {
        name: "Rock, Paper, Scissors",
        status: "idle",
        message: "Classic game remake with Vanilla JS",
        onClick: "project5",
        chatType: "projects",
      },
    ],
    contact: [
      {
        name: "Flor Holzmann",
        status: "offline",
        message: "¡Escribime! Siempre disponible para charlar",
        onClick: "contact",
        chatType: "contact",
      },
      {
        name: "Mi LinkedIn",
        status: "offline",
        message: "Pasá por acá para ver todo mi CV",
        onClick: "default",
        chatType: "default",
      },
    ],
  },
  en: {
    personal: [
      {
        name: "About me",
        status: "msn-online",
        message: "Full-stack developer, Data analyst, UX enthusiast",
        onClick: "about",
        chatType: "about",
      },
      {
        name: "Technical Stack",
        status: "msn-online",
        message: "React, Node.js, TypeScript, SQL",
        onClick: "stack",
        chatType: "stack",
      },
      {
        name: "Work Experience",
        status: "msn-online",
        message: "4+ years of experience, Ex-Meli",
        onClick: "work",
        chatType: "work",
      },
    ],
    projects: [
      {
        name: "Vecindalia - Business Directory",
        status: "idle",
        message: "Vite + TypeScript + Supabase",
        onClick: "project0",
        chatType: "vecindalia",
        customAvatar: "/vecindalia-logo.png",
      },
      {
        name: "Ágora - Online Flea Market",
        status: "idle",
        message: "Vite + TypeScript",
        onClick: "project1",
        chatType: "agora",
      },
      {
        name: "Word Games App",
        status: "idle",
        message: "Next.js + TypeScript + Supabase",
        onClick: "project2",
        chatType: "wordGames",
      },
      {
        name: "El Ropero de Viole - Marketplace",
        status: "idle",
        message: "Vite + TypeScript",
        onClick: "project3",
        chatType: "projects",
      },
      {
        name: "Pasapalabra!",
        status: "idle",
        message: "Next.js + AI",
        onClick: "project4",
        chatType: "projects",
      },
      {
        name: "Rock, Paper, Scissors",
        status: "idle",
        message: "Classic game remake with Vanilla JS",
        onClick: "project5",
        chatType: "projects",
      },
    ],
    contact: [
      {
        name: "Flor Holzmann",
        status: "offline",
        message: "Drop me a line! Always down to chat",
        onClick: "contact",
        chatType: "contact",
      },
      {
        name: "My LinkedIn",
        status: "offline",
        message: "Check it out to see my full profile",
        onClick: "default",
        chatType: "default",
      },
    ],
  },
};

export default contactsDataTranslations;
