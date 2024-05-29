import Product from './Product';
import styles from './ProductList.module.css';

function ProductList({ products, children }) {
  return <div className={styles.products}>{children}</div>;
}

export default ProductList;
