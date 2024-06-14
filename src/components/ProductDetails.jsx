import { CartContext } from '../App';
import styles from './ProductDetails.module.css';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductDetails({ product }) {
  const { onAddProducts } = useContext(CartContext);
  const { id, title, description, price } = product;
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const newProduct = { id, quantity };
    onAddProducts(newProduct);

    setQuantity(1);
    navigate('/cart');
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
        <p className={styles.productPrice}>${price.toFixed(2)}</p>
        <p className={styles.productDescription}>{description}</p>
      </div>
      <form className={styles.addContainer} onSubmit={handleSubmit}>
        <div className={styles.quantityContainer}>
          <button
            className={styles.quantityBtn}
            type="button"
            onClick={decreaseQty}
          >
            &minus;
          </button>
          <input
            className={styles.numberInput}
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <button
            className={styles.quantityBtn}
            type="button"
            onClick={increaseQty}
          >
            &#43;
          </button>
        </div>
        <button type="submit" className={styles.addBtn}>
          Add to cart
        </button>
      </form>
    </div>
  );
}
