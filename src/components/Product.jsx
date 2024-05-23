import styles from './Product.module.css';
import ProductDetails from './ProductDetails';

export default function Product({ product }) {
  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          src={product.image}
          alt={`${product.title}, ${product.category}`}
          className={styles.productImage}
        ></img>
      </div>
      <ProductDetails product={product} />
    </article>
  );
}
