"use client";

import { useState, useEffect } from "react";
import styles from "./HeroSection.module.css";

const slides = [
  {
    src: "https://cdn.pixabay.com/photo/2022/03/27/10/18/market-7094635_1280.jpg",
    link: "https://www.linkedin.com/in/sarbeswar-nandi-9041a31aa/",
  },
  {
    src: "https://img.freepik.com/free-vector/biggest-exchange-offer-background-replace-old-product-new_1017-53475.jpg",
    link: "https://www.youtube.com/",
  },
  {
    src: "https://img.freepik.com/free-vector/gradient-zero-commission-sale-banner_52683-98503.jpg",
    link: "https://www.freepik.com/",
  },
  {
    src: "https://img.freepik.com/free-vector/realistic-sale-background-with-ripped-paper_23-2148856307.jpg",
    link: "https://www.facebook.com/JayaReadymadeStore",
  },
  {
    src: "https://img.freepik.com/free-psd/fashion-day-2023-social-media-promo-template_23-2149738786.jpg",
    link: "https://www.instagram.com/jayareadymade/",
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goPrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.slider}>
        <button className={styles.navButton} onClick={goPrev}>
          ‹
        </button>
        <a href={slides[index].link} target="_blank" rel="noopener noreferrer">
          <img src={slides[index].src} className={styles.sliderImage} />
        </a>
        <button className={styles.navButton} onClick={goNext}>
          ›
        </button>
      </div>
    </section>
  );
}
