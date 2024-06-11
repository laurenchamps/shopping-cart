import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import styles from './PageNav.module.css';
import { useContext } from 'react';
import { CartContext } from '../App';

export default function PageNav() {
  const { totalItems } = useContext(CartContext);

  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            <div className={styles.cartIcon}>
              <ion-icon name="cart-outline" size="large"></ion-icon>
              {totalItems > 0 && (
                <span className={styles.cartTally}>{totalItems}</span>
              )}
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
