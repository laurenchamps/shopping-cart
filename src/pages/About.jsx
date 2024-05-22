import PageNav from '../components/PageNav';
import styles from './About.module.css';

export default function About() {
  return (
    <main className={styles.about}>
      <PageNav />
      <h1>About</h1>
    </main>
  );
}
