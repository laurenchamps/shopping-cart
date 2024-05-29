import PageNav from '../components/PageNav';
import ProductList from '../components/ProductList';
import styles from './Shop.module.css';

export default function Shop({ products, onAddProducts }) {
  return (
    <main className={styles.shop}>
      <PageNav />
      <section className={styles.content}>
        <h2>Products</h2>
        <ProductList products={products} onAddProducts={onAddProducts} />
      </section>
    </main>
  );
}
