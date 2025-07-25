"use client";

import Image from "next/image";
import styles from "./Sidebar.module.scss";

type Props = {
  onOpenWindow: (id: string) => void;
};

const Sidebar = ({ onOpenWindow }: Props) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.topContainer}>
        <div className={styles.windowHeader}>
          <Image
            src="/windows-logo.jpeg"
            alt="Windows logo"
            width={100}
            height={100}
            className={styles.windowsLogo}
          />
          <div>Windows Live Messenger</div>
        </div>
        <div className={styles.profile}>
          <div className={styles.avatarContainer}>
            <Image
              src="/avatar.png"
              alt="Avatar"
              width={100}
              height={100}
              className={styles.avatar}
            />
          </div>
          <div>
            <div className={styles.username}>Flor_Holzmann</div>
            {/* <div className={styles.status}>🟢 En línea</div> */}
          </div>
        </div>
      </div>

      <div className={styles.customDivider}></div>

      <div className={styles.menu}>
        <h3>Mis ventanas</h3>
        <ul>
          <li onClick={() => onOpenWindow("about")}>
            <Image
              src="/msn-online.png"
              alt="Msn logo"
              width={32}
              height={37}
              className={styles.chatIcon}
            />
            <div>Sobre mí</div>
          </li>
          <li onClick={() => onOpenWindow("stack")}>
            {" "}
            <Image
              src="/msn-online.png"
              alt="Msn logo"
              width={32}
              height={37}
              className={styles.chatIcon}
            />
            <div>Stack técnico</div>
          </li>
          <li onClick={() => onOpenWindow("projects")}>
            {" "}
            <Image
              src="/msn-online.png"
              alt="Msn logo"
              width={32}
              height={37}
              className={styles.chatIcon}
            />
            <div>Proyectos</div>
          </li>
          <li onClick={() => onOpenWindow("contact")}>
            {" "}
            <Image
              src="/msn-online.png"
              alt="Msn logo"
              width={32}
              height={37}
              className={styles.chatIcon}
            />
            <div>Contacto</div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
