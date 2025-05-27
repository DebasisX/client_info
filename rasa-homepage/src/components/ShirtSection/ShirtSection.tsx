// src/components/ShirtSection/ShirtSection.tsx
import styles from "./ShirtSection.module.css";

export default function ShirtSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Shirts</h2>
      <div className={styles.grid}>
        {/* Replace with real product data */}
        <div className={styles.card}>Shirt 1</div>
        <div className={styles.card}>Shirt 2</div>
        <div className={styles.card}>Shirt 3</div>
      </div>
    </section>
  );
}
