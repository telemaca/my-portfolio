import styles from "./ChatWindow.module.scss";
import { ReactNode } from "react";
import WindowHeader from "./WindowHeader";

type ChatWindowProps = {
  children: ReactNode;
  onClose?: () => void;
};

const ChatWindow = ({ children, onClose }: ChatWindowProps) => {
  return (
    <div className={styles.window}>
      <WindowHeader onClose={onClose} />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default ChatWindow;
