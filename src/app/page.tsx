"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import ChatWindow from "@/components/ChatWindow";

export default function HomePage() {
  const [openWindows, setOpenWindows] = useState<string[]>([]);

  const handleOpen = (id: string) => {
    setOpenWindows((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  return (
    <div className="flex page-container">
      <Sidebar onOpenWindow={handleOpen} />

      <div className="flex flex-wrap p-4">
        {openWindows.includes("about") && (
          <ChatWindow title="Sobre mí">Contenido personal acá.</ChatWindow>
        )}
        {openWindows.includes("stack") && (
          <ChatWindow title="Stack técnico">
            Herramientas y tecnologías.
          </ChatWindow>
        )}
        {openWindows.includes("projects") && (
          <ChatWindow title="Proyectos">Lista de proyectos.</ChatWindow>
        )}
        {openWindows.includes("contact") && (
          <ChatWindow title="Contacto">
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
