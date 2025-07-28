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
            <div className={styles.username}>
              Flor Holzmann <span>(Online)</span>
            </div>
            <div className={styles.status}>Developer</div>
          </div>
        </div>
      </div>

      <div className={styles.menu}>
        <div className={styles.lateral}>
          <div className={styles.logoContainer}>
            <Image
              src="/msn-online.png"
              alt="Msn logo"
              width={45}
              height={50}
              className={styles.chatIcon}
            />
          </div>
        </div>
        <ul className={styles.contactsList}>
          <li className={styles.listSection}>
            <h4>Info personal ( 3 )</h4>
            <ul>
              <li onClick={() => onOpenWindow("about")}>
                <Image
                  src="/msn-online.png"
                  alt="Msn logo"
                  width={30}
                  height={35}
                  className={styles.chatIcon}
                />
                <div>Sobre mí</div>
              </li>
              <li onClick={() => onOpenWindow("stack")}>
                {" "}
                <Image
                  src="/msn-online.png"
                  alt="Msn logo"
                  width={30}
                  height={35}
                  className={styles.chatIcon}
                />
                <div>Stack técnico</div>
              </li>
              <li onClick={() => onOpenWindow("work")}>
                {" "}
                <Image
                  src="/msn-online.png"
                  alt="Msn logo"
                  width={30}
                  height={35}
                  className={styles.chatIcon}
                />
                <div>Experiencia laboral</div>
              </li>
            </ul>
          </li>
          <li className={styles.listSection}>
            <h4>Mis proyectos ( 5 )</h4>
            <ul>
              <li onClick={() => onOpenWindow("about")}>
                <Image
                  src="/idle.png"
                  alt="Msn logo"
                  width={22}
                  height={27}
                  className={styles.chatIcon}
                />
                <div>Juegos de palabras app</div>
              </li>
              <li onClick={() => onOpenWindow("stack")}>
                {" "}
                <Image
                  src="/idle.png"
                  alt="Msn logo"
                  width={22}
                  height={27}
                  className={styles.chatIcon}
                />
                <div>Etimología diaria</div>
              </li>
              <li onClick={() => onOpenWindow("projects")}>
                {" "}
                <Image
                  src="/idle.png"
                  alt="Msn logo"
                  width={22}
                  height={27}
                  className={styles.chatIcon}
                />
                <div>Pasapalabra!</div>
              </li>
              <li onClick={() => onOpenWindow("contact")}>
                {" "}
                <Image
                  src="/idle.png"
                  alt="Msn logo"
                  width={22}
                  height={27}
                  className={styles.chatIcon}
                />
                <div>My EnglishBuddy</div>
              </li>
              <li onClick={() => onOpenWindow("contact")}>
                {" "}
                <Image
                  src="/idle.png"
                  alt="Msn logo"
                  width={22}
                  height={27}
                  className={styles.chatIcon}
                />
                <div>Rock, Paper, Scissors</div>
              </li>
            </ul>
          </li>
          <li className={styles.listSection}>
            <h4>Contacto ( 1 )</h4>
            <ul>
              <li onClick={() => onOpenWindow("contact")}>
                {" "}
                <Image
                  src="/offline.png"
                  alt="Msn logo"
                  width={22}
                  height={27}
                  className={styles.chatIcon}
                />
                <div>Escribime!</div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
