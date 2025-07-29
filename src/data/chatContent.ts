const chatContent = {
  about: {
    contactName: "Flor Holzmann",
    messages: [
      { text: "¡Hola! Soy Flor 👋", delay: 0 },
      {
        text: "Soy desarrolladora full-stack con +4 años de experiencia",
        delay: 2000,
      },
      { text: "Me especializo en React, Node.js y TypeScript 💻", delay: 3500 },
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
    contactName: "Escribime!",
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
};

export default chatContent;
