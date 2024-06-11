import PageNav from '../components/PageNav';
import Footer from '../components/Footer';
import styles from './Homepage.module.css';
import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>Gear for your next adventure</h1>
        <Link to="/shop" className="cta">
          Start shopping now
        </Link>
      </section>
      <Footer />
    </main>
  );
}
