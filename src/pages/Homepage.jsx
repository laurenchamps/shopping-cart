import React from 'react';
import PageNav from '../components/PageNav';
import styles from './Homepage.module.css';
import { Link } from 'react-router-dom';

export default function Homepage({ totalItems }) {
  return (
    <main className={styles.homepage}>
      <PageNav totalItems={totalItems} />
      <section>
        <h1>Gear for your next adventure</h1>
        <Link to="/shop" className="cta">
          Start shopping now
        </Link>
      </section>
    </main>
  );
}
