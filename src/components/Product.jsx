import styles from './Product.module.css';

export default function Product({ product, children }) {
  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          src={product.image}
          alt={`${product.title}, ${product.category}`}
          className={styles.productImage}
        ></img>
      </div>
      {children}
    </article>
  );
}
