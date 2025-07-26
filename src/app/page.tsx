"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import ChatWindow from "@/components/ChatWindow";

export default function HomePage() {
  const [openWindows, setOpenWindows] = useState<string[]>([]);

  const handleOpen = (id: string) => {
    setOpenWindows((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const handleClose = (id: string) => {
    setOpenWindows((prev) => prev.filter((winId) => winId !== id));
  };

  return (
    <div className="flex page-container">
      <Sidebar onOpenWindow={handleOpen} />

      <div className="flex flex-wrap p-4">
        {openWindows.includes("about") && (
          <ChatWindow title="Sobre mí" onClose={() => handleClose("about")}>
            Contenido personal acá.
          </ChatWindow>
        )}
        {openWindows.includes("stack") && (
          <ChatWindow
            title="Stack técnico"
            onClose={() => handleClose("stack")}
          >
            Herramientas y tecnologías.
          </ChatWindow>
        )}
        {openWindows.includes("projects") && (
          <ChatWindow title="Proyectos" onClose={() => handleClose("projects")}>
            Lista de proyectos.
          </ChatWindow>
        )}
        {openWindows.includes("contact") && (
          <ChatWindow title="Contacto" onClose={() => handleClose("contact")}>
            Formulario o medios de contacto.
          </ChatWindow>
        )}
      </div>
      <footer className="footer">
        <div className="inicio-footer">Inicio</div>
      </footer>
    </div>
  );
}
