type ChatType = "about" | "stack" | "work" | "projects" | "contact" | "default";

type Contact = {
  name: string;
  status: string;
  message: string;
  onClick: string;
  chatType: ChatType;
};

type ContactsData = {
  personal: Contact[];
  projects: Contact[];
  contact: Contact[];
};

const contactsData: ContactsData = {
  personal: [
    {
      name: "Sobre mí",
      status: "msn-online",
      message: "Full-stack developer...",
      onClick: "about",
      chatType: "about",
    },
    {
      name: "Stack técnico",
      status: "msn-online",
      message: "React, Node.js, TypeScript...",
      onClick: "stack",
      chatType: "stack",
    },
    {
      name: "Experiencia laboral",
      status: "msn-online",
      message: "4+ años de experiencia",
      onClick: "work",
      chatType: "work",
    },
  ],
  projects: [
    {
      name: "Juegos de palabras app",
      status: "idle",
      message: "NextJS + Typescript",
      onClick: "project1",
      chatType: "projects",
    },
    {
      name: "Etimología diaria",
      status: "idle",
      message: "NextJS + API Routes",
      onClick: "project2",
      chatType: "projects",
    },
    {
      name: "Pasapalabra!",
      status: "idle",
      message: "NextJS + AI",
      onClick: "projects",
      chatType: "projects",
    },
    {
      name: "My EnglishBuddy",
      status: "idle",
      message: "Language learning app",
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
      name: "Escribime!",
      status: "offline",
      message: "Siempre disponible para charlar",
      onClick: "contact",
      chatType: "contact",
    },
  ],
};

export default contactsData;
