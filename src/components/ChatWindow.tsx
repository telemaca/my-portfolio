import styles from "./ChatWindow.module.scss";
import { ReactNode } from "react";
import WindowHeader from "./WindowHeader";

type ChatWindowProps = {
  title: string;
  children: ReactNode;
};

const ChatWindow = ({ title, children }: ChatWindowProps) => {
  return (
    <div className={styles.window}>
      <WindowHeader title={title} />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default ChatWindow;
