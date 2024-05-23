import styles from './Product.module.css';
// import ProductDetails from './ProductDetails';

export default function Product({ product }) {
  const { title, price, description, image } = product;

  return (
    <li className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          src={image}
          alt={description}
          className={styles.productImage}
        ></img>
      </div>
      <h3 className={styles.productTitle}>{title}</h3>
      <p className={styles.productDescription}>{description}</p>
      <p className={styles.productPrice}>${price.toFixed(2)}</p>
    </li>
  );
}
