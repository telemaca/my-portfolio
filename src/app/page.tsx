"use client";

import { useState } from "react";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import ChatWindow from "@/components/ChatWindow";
import contactsData from "@/data/contactsData";

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
        {openWindows.map((id) => {
          const contact = Object.values(contactsData)
            .flat()
            .find((c) => c.onClick === id);

          if (!contact) return null;

          return (
            <ChatWindow
              key={id}
              chatType={contact.chatType}
              onClose={() => handleClose(id)}
              onMinimize={() => console.log("Minimizar")}
              onMaximize={() => console.log("Maximizar")}
            />
          );
        })}
      </div>
      <footer className="footer">
        <div className="inicio-footer">
          <Image src="/start.png" alt="Windows logo" width={170} height={55} />
        </div>
      </footer>
    </div>
  );
}
