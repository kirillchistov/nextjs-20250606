import Link from 'next/link';
import styles from './style.module.css';

export default function NotFound() {

    return (
      <div className={styles.notFound}>
        <h2>404</h2>
        <h3>Racket not found</h3>
        <div><Link href='/rackets'>View all rackets</Link></div>
        <div><Link href='/'>Go back home</Link></div>
      </div>
    );
}