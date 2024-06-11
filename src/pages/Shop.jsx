import PageNav from '../components/PageNav';
import ProductList from '../components/ProductList';
import Product from '../components/Product';
import ProductDetails from '../components/ProductDetails';
import styles from './Shop.module.css';

export default function Shop({ products }) {
  return (
    <main className={styles.shop}>
      <PageNav />
      <section className={styles.content}>
        <h2>Products</h2>
        <ProductList products={products}>
          {products.map((product) => (
            <Product product={product} key={product.id}>
              <ProductDetails product={product} />
            </Product>
          ))}
        </ProductList>
      </section>
    </main>
  );
}
