"use client";

import Image from "next/image";
import styles from "./Sidebar.module.scss";
import { Avatar } from "./Avatar";
import WindowHeader from "./WindowHeader";
import WindowMenu from "./WindowMenu";

type Props = {
  onOpenWindow: (id: string) => void;
};

const mainMenuItems = ["File", "Contacts", "Actions", "Tools", "Help"];

const Sidebar = ({ onOpenWindow }: Props) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.topContainer}>
        <WindowHeader />
        <WindowMenu menuItems={mainMenuItems} />
        <div className={styles.profile}>
          <Avatar />
          <div>
            <div className={styles.username}>Flor_Holzmann</div>
            {/* <div className={styles.status}>🟢 En línea</div> */}
          </div>
        </div>
      </div>

      <div className={styles.customDivider}></div>

      <div className={styles.menu}>
        <h3>Info personal</h3>
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
          <li onClick={() => onOpenWindow("work")}>
            {" "}
            <Image
              src="/msn-online.png"
              alt="Msn logo"
              width={32}
              height={37}
              className={styles.chatIcon}
            />
            <div>Experiencia laboral</div>
          </li>
        </ul>
        <h3>Mis proyectos</h3>
        <ul>
          <li onClick={() => onOpenWindow("about")}>
            <Image
              src="/idle.png"
              alt="Msn logo"
              width={32}
              height={37}
              className={styles.chatIcon}
            />
            <div>Juegos de palabras app</div>
          </li>
          <li onClick={() => onOpenWindow("stack")}>
            {" "}
            <Image
              src="/idle.png"
              alt="Msn logo"
              width={32}
              height={37}
              className={styles.chatIcon}
            />
            <div>Etimología diaria</div>
          </li>
          <li onClick={() => onOpenWindow("projects")}>
            {" "}
            <Image
              src="/idle.png"
              alt="Msn logo"
              width={32}
              height={37}
              className={styles.chatIcon}
            />
            <div>Pasapalabra!</div>
          </li>
          <li onClick={() => onOpenWindow("contact")}>
            {" "}
            <Image
              src="/idle.png"
              alt="Msn logo"
              width={32}
              height={37}
              className={styles.chatIcon}
            />
            <div>My EnglishBuddy</div>
          </li>
          <li onClick={() => onOpenWindow("contact")}>
            {" "}
            <Image
              src="/idle.png"
              alt="Msn logo"
              width={32}
              height={37}
              className={styles.chatIcon}
            />
            <div>Rock, Paper, Scissors</div>
          </li>
        </ul>
        <h3>Contacto</h3>
        <ul>
          <li onClick={() => onOpenWindow("contact")}>
            {" "}
            <Image
              src="/offline.png"
              alt="Msn logo"
              width={32}
              height={37}
              className={styles.chatIcon}
            />
            <div>Escribime!</div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
