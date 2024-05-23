import Product from './Product';
import styles from './ProductList.module.css';

function ProductList({ products }) {
  return (
    <ul className={styles.products}>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </ul>
  );
}

export default ProductList;
