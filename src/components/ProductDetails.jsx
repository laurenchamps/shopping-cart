import styles from './ProductDetails.module.css';
import { useState } from 'react';

export default function ProductDetails({ product, onAddProducts }) {
  const { id, title, description, price } = product;
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    const newProduct = { id, title, quantity, price };
    console.log(newProduct);
    onAddProducts(newProduct);

    alert(`${quantity} ${title} added to cart`);
    setQuantity(1);
  }

  function decreaseQty() {
    if (quantity > 1) setQuantity((q) => q - 1);
  }

  function increaseQty() {
    setQuantity((q) => q + 1);
  }

  return (
    <div className={styles.content}>
      <div className={styles.productDetails}>
        <h3 className={styles.productTitle}>{title}</h3>
        <p className={styles.productDescription}>{description}</p>
        <p className={styles.productPrice}>${price.toFixed(2)}</p>
      </div>
      <form className={styles.addContainer} onSubmit={handleSubmit}>
        <div className={styles.quantityContainer}>
          <button
            className={styles.quantityBtn}
            type="button"
            onClick={decreaseQty}
          >
            -
          </button>
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          >
            {Array.from({ length: 100 }, (_, i) => i + 1).map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </select>
          <button
            className={styles.quantityBtn}
            type="button"
            onClick={increaseQty}
          >
            +
          </button>
        </div>
        <button type="submit" className={styles.addBtn}>
          Add to cart
        </button>
      </form>
    </div>
  );
}
