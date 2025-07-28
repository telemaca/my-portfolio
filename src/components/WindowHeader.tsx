import styles from "./WindowHeader.module.scss";
import Image from "next/image";
type Props = {
  onClose?: () => void;
  handleMouseDown?: (e: React.MouseEvent) => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
};

const WindowHeader = ({
  onClose,
  handleMouseDown,
  onMinimize,
  onMaximize,
}: Props) => {
  return (
    <div className={styles.titleBar} onMouseDown={handleMouseDown}>
      <div className={styles.titleContent}>
        <Image
          src="/windows-logo.jpeg"
          alt="Windows logo"
          width={100}
          height={100}
          className={styles.windowsLogo}
        />
        <span className={styles.titleText}>Windows Live Messenger</span>
      </div>
      <div className={styles.windowControls}>
        <button
          onClick={onMinimize}
          className={`${styles.controlButton} ${styles.minimizeButton}`}
        >
          _
        </button>
        <button
          onClick={onMaximize}
          className={`${styles.controlButton} ${styles.maximizeButton}`}
        >
          □
        </button>
        <button
          onClick={onClose}
          className={`${styles.controlButton} ${styles.closeButton}`}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default WindowHeader;
