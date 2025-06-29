import Link from 'next/link';
import styles from './racket/[racketId]/style.module.css';

export default function NotFound() {

    return (
      <div className={styles.notFound}>
        <h2>404</h2>
        <h3>Root not found</h3>
        <Link href='/'>Back home</Link>
      </div>
    );
}