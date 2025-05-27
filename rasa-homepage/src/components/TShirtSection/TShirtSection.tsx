// src/components/TShirtSection/TShirtSection.tsx
import styles from "./TShirtSection.module.css";

export default function TShirtSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>T-Shirts</h2>
      <div className={styles.grid}>
        {/* Replace with real product data */}
        <div className={styles.card}>T-Shirt 1</div>
        <div className={styles.card}>T-Shirt 2</div>
        <div className={styles.card}>T-Shirt 3</div>
      </div>
    </section>
  );
}
