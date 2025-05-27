"use client";

import Link from "next/link";
import { FaShoppingCart, FaUser, FaSearch, FaExchangeAlt } from "react-icons/fa";
import styles from "./Header.module.css";
import { useState } from "react";

export default function Header() {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowProfileDropdown((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>RASA</h1>
      <nav className={styles.nav}>
        {/* Search Bar */}
        <div className={styles.searchContainer}>
          <input type="text" placeholder="Search..." className={styles.searchInput} />
          <FaSearch className={styles.searchIcon} />
        </div>

        {/* Transaction */}
        <Link href="/transactions" className={styles.navButton}>
          <FaExchangeAlt className={styles.navIcon} />
          <span className={styles.navText}>Transactions</span>
        </Link>

        {/* Cart */}
        <Link href="/cart" className={styles.navButton}>
          <FaShoppingCart className={styles.navIcon} />
          <span className={styles.navText}>Cart</span>
        </Link>

        {/* Profile */}
        <div className={styles.profileWrapper}>
          <div onClick={toggleDropdown} className={styles.icon}>
            <FaUser />
          </div>
          {showProfileDropdown && (
            <div className={styles.dropdown}>
              <Link href="/profile">My Profile</Link>
              <Link href="/chatbox">Chatbox</Link>
              <Link href="/orders">Orders</Link>
              <Link href="/notifications">Notifications</Link>
              <Link href="/logout">Log Out</Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
