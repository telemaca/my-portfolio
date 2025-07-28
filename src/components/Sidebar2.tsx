"use client";

import Image from "next/image";
import styles from "./Sidebar2.module.scss";
import { Avatar } from "./Avatar";
import WindowHeader from "./WindowHeader";
import WindowMenu from "./WindowMenu";

type Props = {
  onOpenWindow: (id: string) => void;
};

const mainMenuItems = ["File", "Contacts", "Actions", "Tools", "Help"];

// Datos de contactos con mensajes personales y estados
const contactsData = {
  personal: [
    {
      name: "Sobre mí",
      status: "msn-online",
      message: "Full-stack developer...",
      onClick: "about",
    },
    {
      name: "Stack técnico",
      status: "msn-online",
      message: "React, Node.js, TypeScript...",
      onClick: "stack",
    },
    {
      name: "Experiencia laboral",
      status: "msn-online",
      message: "4+ años de experiencia",
      onClick: "work",
    },
  ],
  projects: [
    {
      name: "Juegos de palabras app",
      status: "idle",
      message: "NextJS + Typescript",
      onClick: "project1",
    },
    {
      name: "Etimología diaria",
      status: "idle",
      message: "NextJS + API Routes",
      onClick: "project2",
    },
    {
      name: "Pasapalabra!",
      status: "idle",
      message: "NextJS + AI",
      onClick: "projects",
    },
    {
      name: "My EnglishBuddy",
      status: "idle",
      message: "Language learning app",
      onClick: "project4",
    },
    {
      name: "Rock, Paper, Scissors",
      status: "idle",
      message: "Classic game remake with Vanilla JS",
      onClick: "project5",
    },
  ],
  contact: [
    {
      name: "Escribime!",
      status: "offline",
      message: "Siempre disponible para charlar",
      onClick: "contact",
    },
  ],
};

const StatusIcon = ({ status }: { status: string }) => {
  return (
    <Image
      src={`/${status}.png`}
      alt="Msn logo"
      width={22}
      height={27}
      className={styles.chatIcon}
    />
  );
};

const ContactItem = ({
  contact,
  onOpenWindow,
}: {
  contact: (typeof contactsData.personal)[0];
  onOpenWindow: (id: string) => void;
}) => {
  return (
    <li onClick={() => onOpenWindow(contact.onClick)}>
      <StatusIcon status={contact.status} />
      <div className={styles.contactName}>
        {contact.name}
        <span className={styles.personalMessage}>{contact.message}</span>
      </div>
    </li>
  );
};

const Sidebar = ({ onOpenWindow }: Props) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.topContainer}>
        <WindowHeader />
        <WindowMenu menuItems={mainMenuItems} />

        <div className={styles.profile}>
          <div className={styles.avatarContainer}>
            <Avatar />
          </div>
          <div>
            <div className={styles.username}>
              Flor Holzmann <span>(Online)</span>
            </div>
            <div className={styles.status}>Developer</div>
          </div>
        </div>

        <div className={styles.customDivider} />

        {/* Botón "Add a Contact" estilo MSN */}
        <div
          style={{
            padding: "4px 8px",
            fontSize: "11px",
            color: "#4A6FA5",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <StatusIcon status="msn-online" />
          Add a Contact
        </div>
      </div>

      <div className={styles.menu}>
        <div className={styles.lateral}>
          <div className={styles.logoContainer}>
            <Image src="/msn-logo.webp" alt="MSN logo" width={44} height={42} />
          </div>
        </div>

        <div className={styles.contactsList}>
          <div>
            <div className={styles.listSection}>
              <h4>🧑‍💻 Info personal ({contactsData.personal.length})</h4>
              <ul>
                {contactsData.personal.map((contact, index) => (
                  <ContactItem
                    key={index}
                    contact={contact}
                    onOpenWindow={onOpenWindow}
                  />
                ))}
              </ul>
            </div>

            <div className={styles.listSection}>
              <h4>💼 Mis proyectos ({contactsData.projects.length})</h4>
              <ul>
                {contactsData.projects.map((contact, index) => (
                  <ContactItem
                    key={index}
                    contact={contact}
                    onOpenWindow={onOpenWindow}
                  />
                ))}
              </ul>
            </div>

            <div className={styles.listSection}>
              <h4>📧 Contacto ({contactsData.contact.length})</h4>
              <ul>
                {contactsData.contact.map((contact, index) => (
                  <ContactItem
                    key={index}
                    contact={contact}
                    onOpenWindow={onOpenWindow}
                  />
                ))}
              </ul>
            </div>
          </div>
          <Image
            src="/msn-messenger.png"
            alt="Msn logo"
            width={356}
            height={94}
            className={styles.msnLogo}
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
