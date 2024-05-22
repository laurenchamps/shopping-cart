import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

export default function Logo() {
  return (
    <Link to="/">
      <img
        src="./mountain.png"
        alt="ExploreGear logo"
        className={styles.logo}
      />
    </Link>
  );
}
