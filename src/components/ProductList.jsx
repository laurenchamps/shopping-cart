import Product from './Product';
import styles from './ProductList.module.css';

function ProductList({ products, onAddProducts }) {
  return (
    <div className={styles.products}>
      {products.map((product) => (
        <Product product={product} key={product.id} onAddProducts={onAddProducts} />
      ))}
    </div>
  );
}

export default ProductList;
