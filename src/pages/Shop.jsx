import PageNav from '../components/PageNav';
import styles from './Shop.module.css';

export default function Shop() {
  return (
    <main className={styles.shop}>
      <PageNav />
      <h1>Shop</h1>
    </main>
  );
}
