import Image from "next/image";
import styles from "./MsnLoader.module.scss";

export const MsnLoader = () => {
  return (
    <div className={styles.msnContainer}>
      <div className={styles.msnOrbit}>
        {/* Hombrecito Azul */}
        <div className={`${styles.buddy} ${styles.blueBuddy}`}>
          <Image src="/msn-online.png" alt="" height={60} width={50} />
        </div>
        {/* Hombrecito Verde */}
        <div className={`${styles.buddy} ${styles.greenBuddy}`}>
          <Image src="/msn-online.png" alt="" height={60} width={50} />
        </div>
      </div>
    </div>
  );
};
