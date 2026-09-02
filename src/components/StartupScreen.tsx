"use client";

import { useState, useRef, useEffect } from "react";
import { useLang } from "@/context/LanguageContext";
import styles from "./StartupScreen.module.scss";
import Image from "next/image";
import { WindowsXpLogo } from "./WindowsXpLogo";

type Props = {
  onHandleClick: (v: boolean) => void;
};

export default function StartupScreen({ onHandleClick }: Props) {
  const { setLang } = useLang();
  const [isXPLoading, setIsXPLoading] = useState<boolean>(true);
  const [isWelcome, setIsWelcome] = useState<boolean>(true);
  const [fadeOut, setFadeOut] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const audioRef = useRef<HTMLAudioElement | null>(null);

  setTimeout(() => {
    setIsXPLoading(false);
  }, 3000);

  const handleClick = (language: "en" | "es") => {
    setLang(language);
    setFadeOut(true);
    setTimeout(() => {
      onHandleClick(true);
    }, 3000);
  };

  const handleWelcomeClick = () => {
    audioRef.current?.play().catch(console.warn);
    setIsWelcome(false);
  };

  useEffect(() => {
    if (!isWelcome) return;

    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isWelcome]);

  const customClassNameWelcome = `${styles.mainLoading} ${isWelcome ? styles.welcomeModifier : ""}`;
  const customClassNameFadeOut = `${styles.userSelection} ${fadeOut ? styles.fadeOutModifier : ""}`;

  return isXPLoading ? (
    <section className={styles.loadingXPvideo}>
      <video autoPlay muted loop>
        <source src="/sounds/startupscreen.mp4" type="video/mp4"></source>
      </video>
    </section>
  ) : (
    <div
      className={styles.loadingPage}
      onClick={isWelcome ? handleWelcomeClick : undefined}
    >
      <audio
        ref={audioRef}
        src="/sounds/windows-xp-startup.mp3"
        preload="auto"
      />
      <div className={styles.startUpBar}></div>
      <div className={customClassNameWelcome}>
        <div className={styles.light}></div>

        {isWelcome ? (
          <>
            <h1>bienvenido</h1>

            <span
              className={styles.clickMessage}
              style={{
                left: mousePosition.x + 15,
                top: mousePosition.y + 15,
              }}
            >
              hacé click en cualquier lado
            </span>
          </>
        ) : (
          <div className={customClassNameFadeOut}>
            <div className={styles.halfLeft}>
              <WindowsXpLogo />
              <p>To begin, click your user name</p>
            </div>
            <div className={styles.halfRight}>
              <div
                className={styles.loadingAvatar}
                onClick={() => handleClick("es")}
              >
                <div className={styles.avatarContainer}>
                  <Image
                    src="/avatar.png"
                    alt="Avatar"
                    width={100}
                    height={100}
                    className={styles.avatar}
                  />
                </div>
                <div className={styles.textContainer}>
                  <p>Florencia Holzmann</p>
                  <span>Español 🇦🇷</span>
                </div>
              </div>
              <div
                className={styles.loadingAvatar}
                onClick={() => handleClick("en")}
              >
                <div className={styles.avatarContainer}>
                  <Image
                    src="/avatar.png"
                    alt="Avatar"
                    width={100}
                    height={100}
                    className={styles.avatar}
                  />
                </div>
                <div className={styles.textContainer}>
                  <p>Florencia Holzmann</p>
                  <span>English 🇬🇧</span>
                </div>
              </div>
              <div className={styles.pseudoLine}></div>
            </div>
          </div>
        )}
      </div>
      <div className={styles.startUpBar}></div>
    </div>
  );
}
