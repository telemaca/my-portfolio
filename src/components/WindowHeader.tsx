import styles from "./WindowHeader.module.scss";

type Props = {
  title: string;
};

const WindowHeader = ({ title }: Props) => {
  return (
    <div className={styles.header}>
      <span>{title}</span>
      <div className={styles.controls}>
        <button>-</button>
        <button>X</button>
      </div>
    </div>
  );
};

export default WindowHeader;
