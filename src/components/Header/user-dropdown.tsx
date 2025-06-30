'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function UserDropdown({ name }: { name: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.userDropdown}>
      <button 
        className={styles.userButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.userInitial}>{name.charAt(0)}</span>
        <span>{name}</span>
      </button>
      
      {isOpen && (
        <div className={styles.dropdownMenu}>
          <Link href='/account' className={styles.dropdownItem}>
            My Account
          </Link>
          <Link href='/orders' className={styles.dropdownItem}>
            My Orders
          </Link>
          <div className={styles.divider}></div>
          <Link href='/logout' className={styles.dropdownItem}>
            Logout
          </Link>
        </div>
      )}
    </div>
  );
}