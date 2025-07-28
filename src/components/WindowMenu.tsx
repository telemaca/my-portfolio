import styles from "./WindowMenu.module.scss";

type Props = {
  menuItems: string[];
};

const WindowMenu = ({ menuItems }: Props) => {
  return (
    <div className={styles.menuBar}>
      <div className={styles.menuItems}>
        {menuItems.map((item) => (
          <span key={item} className={styles.menuItem}>
            {item}
          </span>
        ))}
      </div>
      <div className={styles.menuActions}>
        <button className={styles.actionButton}>✏️</button>
        <button className={styles.actionButton}>📁</button>
        <button className={styles.actionButton}>▼</button>
      </div>
    </div>
  );
};

export default WindowMenu;
