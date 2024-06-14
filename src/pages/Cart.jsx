import PageNav from '../components/PageNav';
import Footer from '../components/Footer';
import styles from './Cart.module.css';
import CartItem from '../components/CartItem';
import { useContext, useMemo } from 'react';
import { CartContext } from '../App';

const products = JSON.parse(localStorage.getItem('products'));

export default function Cart() {
  const { cart } = useContext(CartContext);

  const prices = cart.map((item) => {
    const product = products.find((product) => product.id === item.id);
    return item.quantity * product.price;
  });

  const totalPrice = useMemo(() => {
    return prices.reduce((total, price) => total + price, 0);
  }, [prices]);

  return (
    <main className={styles.cart}>
      <PageNav />
      <section className={styles.container}>
        <h2>Shopping Cart</h2>

        {cart.length > 0 ? (
          <div className={styles.cartWrapper}>
            <div className={styles.shoppingCart}>
              <ul>
                {cart.map((item) => {
                  return <CartItem item={item} key={item.id}></CartItem>;
                })}
              </ul>
            </div>
            <div className={styles.cartTotal}>
              <div>
                <p>
                  <span className={styles.total}>Total </span>$
                  {totalPrice.toFixed(2)}
                </p>
              </div>
              <button className="btn">CHECKOUT</button>
            </div>
          </div>
        ) : (
          <p>Your shopping cart is empty</p>
        )}
      </section>
      <Footer />
    </main>
  );
}
