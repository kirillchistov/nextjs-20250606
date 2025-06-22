import Link from 'next/link';
import styles from './style.module.css';

export default function NotFound() {

    return (
      <div className={styles.notFound}>
        <h2>Racket not found</h2>
        <Link href="/">Back home</Link>
      </div>
    );
}