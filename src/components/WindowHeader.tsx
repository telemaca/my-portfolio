import styles from "./WindowHeader.module.scss";

type Props = {
  title: string;
  onClose?: () => void;
};

const WindowHeader = ({ title, onClose }: Props) => {
  return (
    <div className={styles.header}>
      <span>{title}</span>
      <div className={styles.controls}>
        <button>-</button>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default WindowHeader;
