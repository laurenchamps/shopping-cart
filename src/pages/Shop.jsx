import PageNav from '../components/PageNav';
import styles from './Shop.module.css';

export default function Shop() {
  return (
    <main className={styles.shop}>
      <PageNav />
      <section className={styles.content}>
        <h2>Products</h2>
        <div className={styles.products}>
          <div className={styles.card}>
            <img src="bg.jpg" alt="" className={styles.productImage}></img>
            <div className={styles.productDetails}>
              <h3 className={styles.productTitle}>Item</h3>
              <p className={styles.productDescription}>
                This is a description of the item.
              </p>
              <p className={styles.productPrice}>$100.00</p>
            </div>
          </div>

          <div className={styles.card}>
            <img src="bg.jpg" alt="" className={styles.productImage}></img>
            <div className={styles.productDetails}>
              <h3 className={styles.productTitle}>Item</h3>
              <p className={styles.productDescription}>
                This is a description of the item
              </p>
              <p className={styles.productPrice}>$100.00</p>
            </div>
          </div>

          <div className={styles.card}>
            <img src="bg.jpg" alt="" className={styles.productImage}></img>
            <div className={styles.productDetails}>
              <h3 className={styles.productTitle}>Item</h3>
              <p className={styles.productDescription}>
                This is a description of the item
              </p>
              <p className={styles.productPrice}>$100.00</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
