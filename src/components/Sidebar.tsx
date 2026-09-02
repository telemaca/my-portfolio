"use client";

import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import styles from "./Sidebar.module.scss";
import { Avatar } from "./Avatar";
import WindowHeader from "./WindowHeader";
import WindowMenu from "./WindowMenu";
import contactsData from "@/data/contactsData";
import { mainMenuItems } from "@/data/menuData";
import { Contact } from "@/data/contactsData";

type Props = {
  onOpenWindow: (id: string) => void;
  onCloseSidebar: (v: boolean) => void;
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
  contact: Contact;
  onOpenWindow: (id: string, chatType: string) => void;
}) => {
  return (
    <li onClick={() => onOpenWindow(contact.onClick, contact.chatType)}>
      <StatusIcon status={contact.status} />
      <div className={styles.contactName}>
        {contact.name}
        <span className={styles.personalMessage}>{contact.message}</span>
      </div>
    </li>
  );
};

const Sidebar = ({ onOpenWindow, onCloseSidebar }: Props) => {
  const { t, lang } = useLang();
  return (
    <aside className={styles.sidebar}>
      <div className={styles.topContainer}>
        <WindowHeader onClose={() => onCloseSidebar(false)} />
        <WindowMenu menuItems={mainMenuItems[lang]} />

        <div className={styles.profile}>
          <Avatar />
          <div>
            <div className={styles.username}>
              Flor Holzmann <span>{t("online")}</span>
            </div>
            <div className={styles.status}>{t("profession")}</div>
          </div>
        </div>

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
          {t("addContact")}
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
              <h4>
                🧑‍💻 {t("personalInfo")} ({contactsData[lang].personal.length})
              </h4>
              <ul>
                {contactsData[lang].personal.map((contact, index) => (
                  <ContactItem
                    key={index}
                    contact={contact}
                    onOpenWindow={onOpenWindow}
                  />
                ))}
              </ul>
            </div>

            <div className={styles.listSection}>
              <h4>
                💼 {t("proyectInfo")} ({contactsData[lang].projects.length})
              </h4>
              <ul>
                {contactsData[lang].projects.map((contact, index) => (
                  <ContactItem
                    key={index}
                    contact={contact}
                    onOpenWindow={onOpenWindow}
                  />
                ))}
              </ul>
            </div>

            <div className={styles.listSection}>
              <h4>
                📧 {t("contactInfo")} ({contactsData[lang].contact.length})
              </h4>
              <ul>
                {contactsData[lang].contact.map((contact, index) => (
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
