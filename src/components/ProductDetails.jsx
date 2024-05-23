import styles from './ProductDetails.module.css';

export default function ProductDetails({ product }) {
  const { title, description, price } = product;
  return (
    <div className={styles.content}>
      <div className={styles.productDetails}>
        <h3 className={styles.productTitle}>{title}</h3>
        <p className={styles.productDescription}>{description}</p>
        <p className={styles.productPrice}>${price.toFixed(2)}</p>
      </div>
      <div className={styles.addContainer}>
        <div className={styles.quantityContainer}>
          <button className={styles.quantityBtn}>-</button>
          <input type="text"></input>
          <button className={styles.quantityBtn}>+</button>
        </div>
        <a href="#" className={`${styles.addBtn} cta`}>
          Add to cart
        </a>
      </div>
    </div>
  );
}
