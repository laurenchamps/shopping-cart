import styles from './Product.module.css';
// import ProductDetails from './ProductDetails';

export default function Product({ product }) {
  const { productName, description, price } = product;

  return (
    <li className={styles.product}>
      <img src="bg.jpg" alt="" className={styles.productImage}></img>
      <h3 className={styles.productTitle}>{productName}</h3>
      <p className={styles.productDescription}>{description}</p>
      <p className={styles.productPrice}>${price.toFixed(2)}</p>
    </li>
  );
}
