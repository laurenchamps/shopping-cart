import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()}{' '}
        <a href="https://github.com/laurenchamps" className={styles.link}>
          Lauren Champs
        </a>
      </p>
    </footer>
  );
}
