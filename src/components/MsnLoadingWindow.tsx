import React, { useState, useRef, useEffect } from "react";
import { useLang } from "@/context/LanguageContext";
import styles from "./MsnLoadingWindow.module.scss";
import WindowHeader from "./WindowHeader";
import WindowMenu from "./WindowMenu";
import { menuItems } from "@/data/menuData";
import { MsnLoader } from "./MsnLoader";

interface ChatWindowProps {
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
}

const MsnLoadingWindow: React.FC<ChatWindowProps> = ({
  onClose,
  onMinimize,
  onMaximize,
}) => {
  const [position, setPosition] = useState({ x: 250, y: 100 });
  const [dragging, setDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });
  const timeoutRefs = useRef<NodeJS.Timeout[]>([]);
  const { t, lang } = useLang();

  // Limpiar timeouts al desmontar
  useEffect(() => {
    return () => {
      timeoutRefs.current.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const windowRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: MouseEvent) => {
    if (!dragging) return;

    const newX = e.clientX - offset.current.x;
    const newY = e.clientY - offset.current.y;

    const windowWidth = windowRef.current?.offsetWidth ?? 380;
    const windowHeight = windowRef.current?.offsetHeight ?? 300;
    const maxX = window.innerWidth - windowWidth;
    const maxY = window.innerHeight - windowHeight;

    setPosition({
      x: Math.max(0, Math.min(newX, maxX)),
      y: Math.max(0, Math.min(newY, maxY)),
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  return (
    <div
      className={styles.msnLoadingWindow}
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        zIndex: 10,
      }}
      ref={windowRef}
    >
      <WindowHeader
        handleMouseDown={handleMouseDown}
        onMaximize={onMaximize}
        onMinimize={onMinimize}
        onClose={onClose}
      />

      <WindowMenu menuItems={menuItems[lang]} />

      <div className={styles.mainContent}>
        <MsnLoader />
        <p>
          {t("loggingIn")}
          <span className={styles.dotOne}>.</span>
          <span className={styles.dotTwo}>.</span>
          <span className={styles.dotThree}>.</span>
        </p>
      </div>
    </div>
  );
};

export default MsnLoadingWindow;
