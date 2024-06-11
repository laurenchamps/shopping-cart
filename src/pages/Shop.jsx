import PageNav from '../components/PageNav';
import Footer from '../components/Footer';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';
import ProductList from '../components/ProductList';
import Product from '../components/Product';
import ProductDetails from '../components/ProductDetails';
import styles from './Shop.module.css';

export default function Shop({ products, isLoading, error }) {
  return (
    <main className={styles.shop}>
      <PageNav />
      <section className={styles.content}>
        <h2>Products</h2>
        {isLoading && <Spinner />}
        {!isLoading && !error && (
          <ProductList products={products}>
            {products.map((product) => (
              <Product product={product} key={product.id}>
                <ProductDetails product={product} />
              </Product>
            ))}
          </ProductList>
        )}
        {error && <ErrorMessage message={error} />}
      </section>
      <Footer />
    </main>
  );
}
