import Product from './Product';
import styles from './ProductList.module.css';

function ProductList({ products }) {
  return (
    <div className={styles.products}>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductList;
