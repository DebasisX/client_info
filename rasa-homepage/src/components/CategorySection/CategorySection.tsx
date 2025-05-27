// src/components/CategorySection/CategorySection.tsx
import styles from "./CategorySection.module.css";

const tshirtCategories = [
  { label: "All T-Shirts", link: "/category/polo-tshirt" },
  { label: "Polo T-Shirt", link: "/category/polo-tshirt" },
  { label: "Round Neck T-Shirt", link: "/category/roundneck-tshirt" },
  { label: "Collar T-Shirt", link: "/category/collar-tshirt" },
  { label: "Printed T-Shirt", link: "/category/printed-tshirt" },
  { label: "Embroidery T-Shirt", link: "/category/embroidery-tshirt" },
  { label: "Mono T-Shirt", link: "/category/mono-tshirt" },
];

const shirtCategories = [
  { label: "All Shirts", link: "/category/full-shirt" },
  { label: "Full Shirt", link: "/category/full-shirt" },
  { label: "Half Shirt", link: "/category/half-shirt" },
  { label: "Printed Shirt", link: "/category/printed-shirt" },
  { label: "Check Shirt", link: "/category/check-shirt" },
  { label: "Single Color Shirt", link: "/category/singlecolor-shirt" },
  { label: "Aged Shirt", link: "/category/check-shirt" },
  { label: "Floral Shirt", link: "/category/check-shirt" },
];

export default function CategorySection() {
  return (
    <section className={styles.section}>
      <h3 className={styles.heading}>Shop by Category</h3>

      <div className={styles.row}>
        {tshirtCategories.map(({ label, link }) => (
          <a key={label} href={link} className={styles.categoryButton}>
            {label}
          </a>
        ))}
      </div>

      <div className={styles.row}>
        {shirtCategories.map(({ label, link }) => (
          <a key={label} href={link} className={styles.categoryButton}>
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}
