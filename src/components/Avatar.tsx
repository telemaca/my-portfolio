import Image from "next/image";
import styles from "./Avatar.module.scss";

export const Avatar = () => {
  return (
    <div className={styles.avatarContainer}>
      <Image
        src="/avatar.png"
        alt="Avatar"
        width={100}
        height={100}
        className={styles.avatar}
      />
    </div>
  );
};
