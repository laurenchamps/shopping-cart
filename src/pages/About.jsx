import PageNav from '../components/PageNav';
import Footer from '../components/Footer';
import styles from './About.module.css';

export default function About() {
  return (
    <main className={styles.about}>
      <PageNav />
      <div className={styles.container}>
        <h2>About</h2>
        <p>
          When you need gear for your next adventure, Adventure Gear has got you
          covered.
        </p>
        <p>
          Whether you&apos;re hitting the forest trail or have a full itinerary
          checking out the art and cultural sights in the city, equip yourself
          with everything you need.
        </p>
      </div>
      <Footer />
    </main>
  );
}
