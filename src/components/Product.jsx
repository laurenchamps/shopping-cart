import styles from './Product.module.css';
import ProductDetails from './ProductDetails';

export default function Product({ product, onAddProducts }) {
  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          src={product.image}
          alt={`${product.title}, ${product.category}`}
          className={styles.productImage}
        ></img>
      </div>
      <ProductDetails product={product} onAddProducts={onAddProducts} />
    </article>
  );
}
