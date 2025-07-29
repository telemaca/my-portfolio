import Image from "next/image";
import styles from "../components/ChatWindow.module.scss";

const inputButtons = [
  {
    type: "text",
    icon: (
      <Image
        src="/letter-a-text.svg"
        alt="Windows logo"
        width={100}
        height={100}
        className={styles.fontIcon}
      />
    ),
    className: styles.chatIcon,
  },
  {
    type: "emoji",
    icon: (
      <Image
        src="/emoticons.png"
        alt="Windows logo"
        width={100}
        height={100}
        className={styles.withAfter}
      />
    ),
    className: styles.withAfter,
  },
  {
    type: "sound",
    icon: (
      <>
        <Image
          src="/sound-clip.png"
          alt="Windows logo"
          width={100}
          height={100}
          className={styles.soundIcon}
        />
        <p>Voice Clip</p>
      </>
    ),
    className: styles.soundIcon,
  },
  {
    type: "wink",
    icon: (
      <Image
        src="/wink.png"
        alt="Windows logo"
        width={100}
        height={100}
        className={styles.withAfter}
      />
    ),
    className: styles.withAfter,
  },
  {
    type: "picture",
    icon: (
      <Image
        src="/mountain-icon.png"
        alt="Windows logo"
        width={100}
        height={100}
        className={styles.withAfter}
      />
    ),
    className: styles.withAfter,
  },
  {
    type: "gift",
    icon: (
      <Image
        src="/gift-icon.png"
        alt="Windows logo"
        width={100}
        height={100}
        className={styles.withAfter}
      />
    ),
    className: styles.withAfter,
  },
  {
    type: "nudge",
    icon: (
      <Image
        src="/zumbido.png"
        alt="Windows logo"
        width={100}
        height={100}
        className={styles.nudgeIcon}
      />
    ),
    className: styles.fontButton,
  },
];

export default inputButtons;
