import { Link } from '../../components/Link/link';
import styles from './style.module.css';

export default function About() {

  return (
    <div className={styles.root}>
      <h2>About page</h2>
      <div>Nothing to show here yet</div>
      <Link href={'/rackets'}>Back to Rackets</Link>
    </div>
  );
}