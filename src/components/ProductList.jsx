import Product from './Product';
import styles from './ProductList.module.css';

function ProductList({ products, children }) {
  localStorage.setItem('products', JSON.stringify(products));

  return <div className={styles.products}>{children}</div>;
}

export default ProductList;
