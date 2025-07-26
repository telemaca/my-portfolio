import styles from "./ChatWindow.module.scss";
import { ReactNode } from "react";
import WindowHeader from "./WindowHeader";

type ChatWindowProps = {
  title: string;
  children: ReactNode;
  onClose?: () => void;
};

const ChatWindow = ({ title, children, onClose }: ChatWindowProps) => {
  return (
    <div className={styles.window}>
      <WindowHeader title={title} onClose={onClose} />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default ChatWindow;
