"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import Sidebar from "@/components/Sidebar";
import ChatWindow from "@/components/ChatWindow";
import contactsDataTranslations from "@/data/contactsData";
import StartupScreen from "@/components/StartupScreen";
import MsnLoadingWindow from "@/components/MsnLoadingWindow";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 30_000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span>
      {time.toLocaleTimeString("es-AR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })}
    </span>
  );
};

export default function HomePage() {
  const { t, lang } = useLang();
  const [openWindows, setOpenWindows] = useState<string[]>([]);
  const [userClicked, setUserClicked] = useState<boolean>(false);
  const [msnOpened, setMsnOpened] = useState<boolean>(false);
  const [iconSelected, setIconSelected] = useState<boolean>(false);
  const [msnLoading, setMsnLoading] = useState<boolean>(false);

  const handleOpen = (id: string) => {
    setOpenWindows((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const handleClose = (id: string) => {
    setOpenWindows((prev) => prev.filter((winId) => winId !== id));
  };

  const handleDoubleClick = () => {
    setMsnLoading(true);
    setTimeout(() => {
      setMsnLoading(false);
      setMsnOpened(true);
    }, 3000);
    setIconSelected(false);
  };

  return !userClicked ? (
    <StartupScreen onHandleClick={setUserClicked} />
  ) : (
    <div className="flex page-container">
      {msnOpened && (
        <Sidebar
          onOpenWindow={handleOpen}
          onCloseSidebar={() => setMsnOpened(false)}
        />
      )}
      <div
        className={`msn-logo__container ${iconSelected ? "selected" : ""}`}
        onDoubleClick={handleDoubleClick}
        onClick={() => setIconSelected(!iconSelected)}
      >
        <Image alt="" src="/msn-logo.webp" height={80} width={80} />
        <p>{"MSN - " + t("clickMe")}</p>
      </div>

      {msnLoading && <MsnLoadingWindow />}

      <div className="flex flex-wrap p-4">
        {openWindows.map((id) => {
          const contact = Object.values(contactsDataTranslations[lang])
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
        <div className="right-corner">
          <div>
            <Image src="/msn-logo.webp" width={24} height={24} alt="" />
            <Image src="/pc-icon.png" width={24} height={24} alt="" />
          </div>
          <Clock />
        </div>
        <div className="bottom-arrow">
          <span>‹</span>
        </div>
        <div className="bottom-arrow__bg"></div>
      </footer>
    </div>
  );
}
